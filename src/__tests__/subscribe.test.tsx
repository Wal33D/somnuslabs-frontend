/** @jest-environment node */
import { NextRequest } from 'next/server';
import { POST } from '@/app/api/subscribeUser/route';

describe('subscribe API', () => {
  const originalKey = process.env.SENDGRID_API_KEY;

  afterEach(() => {
    if (originalKey === undefined) {
      delete process.env.SENDGRID_API_KEY;
    } else {
      process.env.SENDGRID_API_KEY = originalKey;
    }
  });

  test('a missing mailing-list key does not name the server setting', async () => {
    delete process.env.SENDGRID_API_KEY;
    const request = new NextRequest('http://127.0.0.1/api/subscribeUser', {
      method: 'POST',
      body: JSON.stringify({ email: 'person@example.com', name: 'Ada' }),
      headers: { 'Content-Type': 'application/json' },
    });

    const response = await POST(request);
    const body = await response.json();

    expect(response.status).toBe(503);
    expect(body.error).toBe(
      'We could not add you just now. Email hello@somnuslabs.com and we will add you by hand.',
    );
    expect(JSON.stringify(body)).not.toMatch(/sendgrid/i);
  });
});
