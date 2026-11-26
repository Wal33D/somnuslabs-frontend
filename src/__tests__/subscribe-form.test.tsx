import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { SubscribeForm } from '@/components/molecules/SignupForm';

describe('subscribe form', () => {
  test('an invalid email is explained on the page', async () => {
    const user = userEvent.setup();
    render(<SubscribeForm />);

    await user.type(screen.getByLabelText('Email'), 'not-an-email');
    await user.click(screen.getByRole('button', { name: 'Subscribe' }));

    expect(await screen.findByRole('alert')).toHaveTextContent(
      'Please enter a valid email address.',
    );
  });

  test('the form links to the privacy policy', () => {
    render(<SubscribeForm />);
    expect(
      screen.getByRole('link', { name: 'Privacy Policy' }),
    ).toHaveAttribute('href', '/privacy');
  });
});
