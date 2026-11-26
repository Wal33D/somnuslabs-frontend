import SendgridClient from '@sendgrid/client';
import { ClientRequest } from '@sendgrid/client/src/request';
import { NextRequest, NextResponse } from 'next/server';
import { createRateLimiter } from '@/lib/rateLimit';
import { CONTACT_EMAIL } from '@/lib/site';

const subscribeFailure = `We could not add you just now. Email ${CONTACT_EMAIL} and we will add you by hand.`;
const invalidEmail = 'Please provide a valid email address.';
const tooMany = 'Too many sign-ups from here. Please try again later.';

// The list id is not a secret (it does nothing without the API key). The
// default is the Somnus Labs newsletter list, so sign-ups keep working on a
// deploy that only sets SENDGRID_API_KEY.
const DEFAULT_LIST_ID = '10415e07-b319-4848-a22d-d7176b5d68bb';

const MAX_BODY_BYTES = 2_000;
const MAX_EMAIL_LENGTH = 254;
const MAX_NAME_LENGTH = 100;
const emailPattern = /^[^\s@<>"]+@[^\s@<>"]+\.[^\s@<>"]+$/;

// 5 sign-ups per client address per 10 minutes, per instance.
const subscribeLimiter = createRateLimiter(5, 10 * 60 * 1000);

function clientKey(request: NextRequest): string {
  const forwarded = request.headers.get('x-forwarded-for');
  const first = forwarded?.split(',')[0]?.trim();
  return first || request.headers.get('x-real-ip') || 'unknown';
}

// Browsers send Origin on a cross-site POST. A form on another site posting
// here is refused; requests with no Origin (curl, server tools) fall through to
// the rate limit.
function isCrossSite(request: NextRequest): boolean {
  const origin = request.headers.get('origin');
  if (!origin) return false;
  const host =
    request.headers.get('x-forwarded-host') || request.headers.get('host');
  try {
    return new URL(origin).host !== host;
  } catch {
    return true;
  }
}

function fail(error: string, status: number) {
  return NextResponse.json({ ok: false, error }, { status });
}

export async function POST(request: NextRequest) {
  try {
    if (isCrossSite(request)) {
      return fail(subscribeFailure, 403);
    }

    const raw = await request.text();
    if (raw.length > MAX_BODY_BYTES) {
      return fail(invalidEmail, 413);
    }

    let reqJson: unknown;
    try {
      reqJson = JSON.parse(raw);
    } catch {
      return fail(invalidEmail, 400);
    }
    const fields = (reqJson ?? {}) as Record<string, unknown>;
    const email =
      typeof fields.email === 'string' ? fields.email.trim() : undefined;
    const name =
      typeof fields.name === 'string'
        ? fields.name.trim().slice(0, MAX_NAME_LENGTH)
        : undefined;

    // Hidden field in the form: people never see it, form-filling bots do.
    // Answer as if it worked so the bot learns nothing.
    if (typeof fields.company === 'string' && fields.company.trim() !== '') {
      return NextResponse.json({ ok: true });
    }

    if (
      !email ||
      email.length > MAX_EMAIL_LENGTH ||
      !emailPattern.test(email)
    ) {
      return fail(invalidEmail, 400);
    }

    if (subscribeLimiter.isLimited(clientKey(request))) {
      return fail(tooMany, 429);
    }

    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      console.error('subscribeUser: SENDGRID_API_KEY is not set');
      return fail(subscribeFailure, 503);
    }

    SendgridClient.setApiKey(apiKey);

    const sendgridRequest: ClientRequest = {
      url: `/v3/marketing/contacts`,
      method: 'PUT',
      body: {
        list_ids: [process.env.SENDGRID_LIST_ID || DEFAULT_LIST_ID],
        contacts: [
          {
            email,
            ...(name ? { first_name: name } : {}),
          },
        ],
      },
    };

    const [sendgridResponse] = await SendgridClient.request(sendgridRequest);
    const statusCode = sendgridResponse.statusCode;
    if (statusCode < 200 || statusCode >= 300) {
      console.error(
        `subscribeUser: SendGrid answered ${statusCode}`,
        sendgridResponse.body,
      );
      return fail(subscribeFailure, 502);
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error('subscribeUser: request failed', error);
    return fail(subscribeFailure, 500);
  }
}
