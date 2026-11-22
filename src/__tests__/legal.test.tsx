import { render, screen } from '@testing-library/react';
import NotFound from '@/app/not-found';
import { Footer } from '@/components/site/Footer';
import {
  PrivacyPolicy,
  SmsProgram,
  TermsOfUse,
} from '@/components/site/legal-pages';
import {
  CONSENT_SENTENCE,
  LEGAL_EMAIL,
  LEGAL_NAME,
  SMS_DISCLOSURES,
  SMS_NONSHARE_CLAUSE,
  SMS_PROGRAM_NAME,
} from '@/lib/legal';

const phonePattern = /\b\d{3}[-.\s]\d{3}[-.\s]\d{4}\b/;

describe('carrier legal copy', () => {
  test('the SMS non-share clause is the required sentence', () => {
    expect(SMS_NONSHARE_CLAUSE).toBe(
      'Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.',
    );
  });

  test('disclosures use the carrier lines', () => {
    expect(SMS_DISCLOSURES).toEqual([
      'Message frequency varies.',
      'Message and data rates may apply.',
      'Reply STOP to opt out, HELP for help.',
      'Carriers are not liable for delayed or undelivered messages.',
    ]);
    expect(SMS_PROGRAM_NAME).toBe('Somnus Labs account notifications');
    expect(CONSENT_SENTENCE).toContain('Reply STOP to opt out, HELP for help');
    expect(CONSENT_SENTENCE).toContain(
      'Consent is not a condition of purchase',
    );
  });
});

describe('legal pages', () => {
  test.each([
    ['privacy', PrivacyPolicy],
    ['terms', TermsOfUse],
    ['sms', SmsProgram],
  ])('%s shows the company, the clause, and no phone number', (_name, Page) => {
    render(<Page />);
    const text = document.body.textContent || '';
    expect(text).toContain(LEGAL_NAME);
    expect(text).toContain(SMS_NONSHARE_CLAUSE);
    expect(
      screen.getAllByRole('link', { name: LEGAL_EMAIL }).length,
    ).toBeGreaterThan(0);
    expect(
      screen.getByRole('navigation', { name: 'Legal' }),
    ).toBeInTheDocument();

    expect(text).not.toMatch(phonePattern);
    expect(text).not.toMatch(/tel:/i);
    expect(text).not.toContain('Deals Unlimited');
  });

  test('the SMS page is the opt-in proof', () => {
    render(<SmsProgram />);
    expect(
      screen.getByRole('heading', { name: SMS_PROGRAM_NAME }),
    ).toBeInTheDocument();
    expect(
      screen.getAllByText(/texting START or JOIN/i).length,
    ).toBeGreaterThan(0);
    expect(document.body.textContent).toContain(CONSENT_SENTENCE);
    SMS_DISCLOSURES.forEach(line => {
      expect(screen.getAllByText(line).length).toBeGreaterThan(0);
    });
    screen.getAllByRole('link', { name: 'Privacy Policy' }).forEach(link => {
      expect(link).toHaveAttribute('href', '/privacy');
    });
    screen.getAllByRole('link', { name: 'Terms' }).forEach(link => {
      expect(link).toHaveAttribute('href', '/terms');
    });
  });
});

describe('not found', () => {
  test('still links Privacy, Terms, and SMS', () => {
    render(<NotFound />);
    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute(
      'href',
      '/privacy',
    );
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute(
      'href',
      '/terms',
    );
    expect(screen.getByRole('link', { name: 'SMS' })).toHaveAttribute(
      'href',
      '/sms',
    );
  });
});

describe('footer', () => {
  test('links Privacy, Terms, and SMS', () => {
    render(<Footer />);
    expect(screen.getByRole('link', { name: 'Privacy' })).toHaveAttribute(
      'href',
      '/privacy',
    );
    expect(screen.getByRole('link', { name: 'Terms' })).toHaveAttribute(
      'href',
      '/terms',
    );
    expect(screen.getByRole('link', { name: 'SMS' })).toHaveAttribute(
      'href',
      '/sms',
    );
  });
});
