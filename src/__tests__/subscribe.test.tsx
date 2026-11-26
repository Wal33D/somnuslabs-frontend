/** @jest-environment node */
import { NextRequest } from 'next/server';
import SendgridClient from '@sendgrid/client';
import { POST } from '@/app/api/subscribeUser/route';

// Never a live SendGrid call: the client is replaced for every test.
jest.mock('@sendgrid/client', () => ({
  __esModule: true,
  default: { setApiKey: jest.fn(), request: jest.fn() },
}));

const sendgrid = SendgridClient as unknown as {
  setApiKey: jest.Mock;
  request: jest.Mock;
};

const failureText =
  'We could not add you just now. Email hello@somnuslabs.com and we will add you by hand.';

// Each test uses its own client address so the per-address limit does not
// carry over between tests.
let addressCounter = 0;
function nextAddress() {
  addressCounter += 1;
  return `203.0.113.${addressCounter}`;
}

function makeRequest(
  body: unknown,
  {
    address = nextAddress(),
    headers = {},
  }: { address?: string; headers?: Record<string, string> } = {},
) {
  return new NextRequest('http://somnuslabs.test/api/subscribeUser', {
    method: 'POST',
    body: typeof body === 'string' ? body : JSON.stringify(body),
    headers: {
      'Content-Type': 'application/json',
      host: 'somnuslabs.test',
      'x-forwarded-for': address,
      ...headers,
    },
  });
}

describe('subscribe API', () => {
  const originalKey = process.env.SENDGRID_API_KEY;
  const originalList = process.env.SENDGRID_LIST_ID;
  let consoleError: jest.SpyInstance;

  beforeEach(() => {
    process.env.SENDGRID_API_KEY = 'test-key-not-real';
    delete process.env.SENDGRID_LIST_ID;
    sendgrid.setApiKey.mockReset();
    sendgrid.request.mockReset();
    sendgrid.request.mockResolvedValue([
      { statusCode: 202, body: { job_id: 'job-secret-123' } },
      { job_id: 'job-secret-123' },
    ]);
    consoleError = jest.spyOn(console, 'error').mockImplementation(() => {});
  });

  afterEach(() => {
    consoleError.mockRestore();
    if (originalKey === undefined) delete process.env.SENDGRID_API_KEY;
    else process.env.SENDGRID_API_KEY = originalKey;
    if (originalList === undefined) delete process.env.SENDGRID_LIST_ID;
    else process.env.SENDGRID_LIST_ID = originalList;
  });

  test('a missing mailing-list key does not name the server setting', async () => {
    delete process.env.SENDGRID_API_KEY;

    const response = await POST(
      makeRequest({ email: 'person@example.com', name: 'Ada' }),
    );
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body).toEqual({ ok: false, error: failureText });
    expect(JSON.stringify(body)).not.toMatch(/sendgrid/i);
    expect(sendgrid.request).not.toHaveBeenCalled();
  });

  test('a sign-up answers a plain ok and nothing from SendGrid', async () => {
    const response = await POST(
      makeRequest({ email: ' person@example.com ', name: ' Ada ' }),
    );
    const body = await response.json();

    expect(response.status).toBe(200);
    expect(body).toEqual({ ok: true });
    expect(JSON.stringify(body)).not.toContain('job-secret-123');
    expect(sendgrid.setApiKey).toHaveBeenCalledWith('test-key-not-real');
    expect(sendgrid.request).toHaveBeenCalledWith({
      url: '/v3/marketing/contacts',
      method: 'PUT',
      body: {
        list_ids: ['10415e07-b319-4848-a22d-d7176b5d68bb'],
        contacts: [{ email: 'person@example.com', first_name: 'Ada' }],
      },
    });
  });

  test('SENDGRID_LIST_ID picks the list', async () => {
    process.env.SENDGRID_LIST_ID = 'list-from-env';

    await POST(makeRequest({ email: 'person@example.com' }));

    expect(sendgrid.request.mock.calls[0][0].body).toEqual({
      list_ids: ['list-from-env'],
      contacts: [{ email: 'person@example.com' }],
    });
  });

  test('a SendGrid error is logged on the server, not sent to the browser', async () => {
    const sgError = Object.assign(new Error('Forbidden: key sk-live-xyz'), {
      code: 403,
      response: { body: { errors: [{ message: 'access forbidden' }] } },
    });
    sendgrid.request.mockRejectedValue(sgError);

    const response = await POST(makeRequest({ email: 'person@example.com' }));
    const body = await response.json();

    expect(response.status).toBe(500);
    expect(body).toEqual({ ok: false, error: failureText });
    expect(JSON.stringify(body)).not.toMatch(/forbidden|sk-live|sendgrid/i);
    expect(consoleError).toHaveBeenCalledWith(
      'subscribeUser: request failed',
      sgError,
    );
  });

  test("SendGrid's status code is not passed through", async () => {
    sendgrid.request.mockResolvedValue([
      { statusCode: 302, body: 'redirected somewhere' },
      'redirected somewhere',
    ]);

    const response = await POST(makeRequest({ email: 'person@example.com' }));
    const body = await response.json();

    expect(response.status).toBe(502);
    expect(body).toEqual({ ok: false, error: failureText });
    expect(consoleError).toHaveBeenCalled();
  });

  test.each([
    ['no email', { name: 'Ada' }],
    ['not an email', { email: 'not-an-email' }],
    ['an email that is not text', { email: ['a@b.co'] }],
    ['an email over 254 characters', { email: `${'a'.repeat(250)}@b.co` }],
    ['markup in the address', { email: '<script>@x.co' }],
  ])('%s is refused without calling SendGrid', async (_label, payload) => {
    const response = await POST(makeRequest(payload));
    const body = await response.json();

    expect(response.status).toBe(400);
    expect(body).toEqual({
      ok: false,
      error: 'Please provide a valid email address.',
    });
    expect(sendgrid.request).not.toHaveBeenCalled();
  });

  test('a body that is not JSON is refused', async () => {
    const response = await POST(makeRequest('email=person@example.com'));

    expect(response.status).toBe(400);
    expect(sendgrid.request).not.toHaveBeenCalled();
  });

  test('an oversized body is refused', async () => {
    const response = await POST(
      makeRequest({ email: 'person@example.com', name: 'x'.repeat(5000) }),
    );

    expect(response.status).toBe(413);
    expect(sendgrid.request).not.toHaveBeenCalled();
  });

  test('a long name is cut to 100 characters', async () => {
    await POST(
      makeRequest({ email: 'person@example.com', name: 'n'.repeat(500) }),
    );

    const contact = sendgrid.request.mock.calls[0][0].body.contacts[0];
    expect(contact.first_name).toHaveLength(100);
  });

  test('a filled hidden field looks like success but adds no one', async () => {
    const response = await POST(
      makeRequest({ email: 'bot@example.com', company: 'Spam Inc' }),
    );

    expect(response.status).toBe(200);
    expect(await response.json()).toEqual({ ok: true });
    expect(sendgrid.request).not.toHaveBeenCalled();
  });

  test('a post from another site is refused', async () => {
    const response = await POST(
      makeRequest(
        { email: 'person@example.com' },
        { headers: { origin: 'https://evil.example' } },
      ),
    );

    expect(response.status).toBe(403);
    expect(await response.json()).toEqual({ ok: false, error: failureText });
    expect(sendgrid.request).not.toHaveBeenCalled();
  });

  test('a post from this site is accepted', async () => {
    const response = await POST(
      makeRequest(
        { email: 'person@example.com' },
        { headers: { origin: 'http://somnuslabs.test' } },
      ),
    );

    expect(response.status).toBe(200);
  });

  test('one address gets 5 sign-ups per window, then a 429', async () => {
    const address = nextAddress();
    for (let i = 0; i < 5; i += 1) {
      const ok = await POST(
        makeRequest({ email: `p${i}@example.com` }, { address }),
      );
      expect(ok.status).toBe(200);
    }

    const limited = await POST(
      makeRequest({ email: 'p6@example.com' }, { address }),
    );
    expect(limited.status).toBe(429);
    expect(await limited.json()).toEqual({
      ok: false,
      error: 'Too many sign-ups from here. Please try again later.',
    });
    expect(sendgrid.request).toHaveBeenCalledTimes(5);

    const other = await POST(makeRequest({ email: 'other@example.com' }));
    expect(other.status).toBe(200);
  });
});
