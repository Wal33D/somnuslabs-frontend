import { render, screen } from '@testing-library/react';
import { ContactArticle } from '@/components/site/ContactArticle';
import Home from '@/app/page';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { LEGAL_EMAIL } from '@/lib/legal';
import { CONTACT_EMAIL } from '@/lib/site';

describe('one contact address', () => {
  test('the public address is the legal support address', () => {
    expect(CONTACT_EMAIL).toBe(LEGAL_EMAIL);
    expect(CONTACT_EMAIL).toBe('hello@somnuslabs.com');
  });

  test('the contact page names the product in the email subject', () => {
    render(<ContactArticle productSlug="deskwork" />);

    const email = screen.getByRole('link', { name: CONTACT_EMAIL });
    expect(email).toHaveAttribute(
      'href',
      'mailto:hello@somnuslabs.com?subject=Question%20about%20Deskwork',
    );
    expect(screen.getByText(/This note is about Deskwork/)).toBeInTheDocument();
    expect(screen.queryByText(/info@somnuslabs.com/)).not.toBeInTheDocument();
    expect(screen.queryByText(/Private demo slots/)).not.toBeInTheDocument();
    expect(screen.getByText(/does not book a demo/)).toBeInTheDocument();
  });

  test('home and the header point questions at the contact page', () => {
    render(<Home />);
    expect(screen.queryByText(/Private demo slots/)).not.toBeInTheDocument();
    expect(screen.queryByText(/info@somnuslabs.com/)).not.toBeInTheDocument();
    expect(
      screen.getAllByRole('link', { name: CONTACT_EMAIL }).length,
    ).toBeGreaterThan(0);

    render(<Header />);
    render(<Footer />);
    const contactLinks = screen.getAllByRole('link', { name: 'Contact' });
    expect(contactLinks.length).toBeGreaterThan(0);
    contactLinks.forEach(link => {
      expect(link).toHaveAttribute('href', '/contact');
    });
  });
});
