import { render, screen, within } from '@testing-library/react';
import Home from '@/app/page';

describe('why somnus cards', () => {
  test('each reason is a phrase a visitor can read', () => {
    render(<Home />);

    const why = within(
      screen.getByRole('region', { name: 'Built for reliability and speed' }),
    );

    expect(
      why.getByRole('heading', { name: 'Automation with control' }),
    ).toBeInTheDocument();
    expect(
      why.getByRole('heading', { name: 'Data you can trust' }),
    ).toBeInTheDocument();
    expect(
      why.getByRole('heading', { name: 'Ship faster' }),
    ).toBeInTheDocument();
    expect(
      why.getByText(
        'Guardrails, approvals, and human fallback so AI stays on-brand.',
      ),
    ).toBeInTheDocument();

    expect(why.queryByText('Shield')).not.toBeInTheDocument();
    expect(why.queryByText('Data')).not.toBeInTheDocument();
    expect(why.queryByText('Launch')).not.toBeInTheDocument();
  });
});
