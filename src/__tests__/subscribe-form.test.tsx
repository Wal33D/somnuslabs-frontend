import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SubscribeForm } from '@/components/molecules/SignupForm';

// No network: fetch is replaced in every test that submits.
function mockFetch(status: number, body: unknown) {
  const fetchMock = jest.fn().mockResolvedValue({
    ok: status >= 200 && status < 300,
    status,
    json: async () => body,
  });
  global.fetch = fetchMock as unknown as typeof fetch;
  return fetchMock;
}

describe('subscribe form', () => {
  const originalFetch = global.fetch;

  afterEach(() => {
    global.fetch = originalFetch;
  });

  test('an invalid email is explained on the page', async () => {
    const fetchMock = mockFetch(200, { ok: true });
    const user = userEvent.setup();
    render(<SubscribeForm />);

    await user.type(screen.getByLabelText('Email'), 'not-an-email');
    await user.click(screen.getByRole('button', { name: 'Subscribe' }));

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Please enter a valid email address.',
    );
    expect(fetchMock).not.toHaveBeenCalled();
  });

  test('the form links to the privacy policy', () => {
    render(<SubscribeForm />);
    expect(
      screen.getByRole('link', { name: 'Privacy Policy' }),
    ).toHaveAttribute('href', '/privacy');
  });

  test('a sign-up posts the fields and thanks the person', async () => {
    const fetchMock = mockFetch(200, { ok: true });
    const user = userEvent.setup();
    render(<SubscribeForm />);

    await user.type(screen.getByLabelText('Email'), 'person@example.com');
    await user.type(screen.getByLabelText('Name (optional)'), 'Ada');
    await user.click(screen.getByRole('button', { name: 'Subscribe' }));

    expect(await screen.findByRole('status')).toHaveTextContent(
      'Thank you for subscribing!',
    );
    expect(fetchMock).toHaveBeenCalledTimes(1);
    const [url, init] = fetchMock.mock.calls[0];
    expect(url).toBe('/api/subscribeUser');
    expect(JSON.parse(init.body)).toEqual({
      email: 'person@example.com',
      name: 'Ada',
      company: '',
    });
    expect(screen.getByLabelText('Email')).toHaveValue('');
  });

  test("the server's error message is shown on the page", async () => {
    mockFetch(429, {
      ok: false,
      error: 'Too many sign-ups from here. Please try again later.',
    });
    const user = userEvent.setup();
    render(<SubscribeForm />);

    await user.type(screen.getByLabelText('Email'), 'person@example.com');
    await user.click(screen.getByRole('button', { name: 'Subscribe' }));

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Too many sign-ups from here. Please try again later.',
    );
  });

  test('the hidden field is kept out of reach of people', () => {
    render(<SubscribeForm />);
    // The label query still finds it; the role query, which skips
    // aria-hidden content, does not.
    expect(screen.getByLabelText('Company')).toHaveAttribute('tabindex', '-1');
    expect(screen.queryByRole('textbox', { name: 'Company' })).toBeNull();
  });
});
