import SendgridClient from '@sendgrid/client';
import { ClientRequest } from '@sendgrid/client/src/request';
import { NextRequest, NextResponse } from 'next/server';

const LIST_ID =
  process.env.SENDGRID_LIST_ID || '10415e07-b319-4848-a22d-d7176b5d68bb';
const emailPattern = /\S+@\S+\.\S+/;

export async function POST(request: NextRequest) {
  try {
    const apiKey = process.env.SENDGRID_API_KEY;
    if (!apiKey) {
      return NextResponse.json(
        { error: 'SENDGRID_API_KEY is not configured on the server.' },
        { status: 500 },
      );
    }

    SendgridClient.setApiKey(apiKey);

    const reqJson = await request.json();
    const email = reqJson?.email?.toString().trim();
    const name = reqJson?.name?.toString().trim();

    if (!email || !emailPattern.test(email)) {
      return NextResponse.json(
        { error: 'Please provide a valid email address.' },
        { status: 400 },
      );
    }

    const sendgridRequest: ClientRequest = {
      url: `/v3/marketing/contacts`,
      method: 'PUT',
      body: {
        list_ids: [LIST_ID],
        contacts: [
          {
            email,
            ...(name ? { first_name: name } : {}),
          },
        ],
      },
    };

    const [sendgridResponse] = await SendgridClient.request(sendgridRequest);

    return NextResponse.json(
      {
        message: 'Successfully subscribed user',
        sgmessage: sendgridResponse.body,
      },
      { status: sendgridResponse.statusCode || 200 },
    );
  } catch (error: any) {
    console.error(error);
    return NextResponse.json(
      { error: error?.message || 'Unexpected error subscribing user.' },
      { status: 500 },
    );
  }
}
