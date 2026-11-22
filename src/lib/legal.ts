/** Public legal copy for the 10DLC brand pages. Carriers read these strings. */

export const LEGAL_NAME = 'Somnus Labs Inc.';

export const LEGAL_ADDRESS_LINES = [
  '10509 Shaver Rd',
  'Portage, MI 49024',
] as const;

export const LEGAL_EMAIL = 'hello@somnuslabs.com';

export const LEGAL_UPDATED = '2026-11-21';

export const LEGAL_UPDATED_LABEL = 'November 21, 2026';

export const SMS_PROGRAM_NAME = 'Somnus Labs account notifications';

/** Required by the carrier registration. Do not paraphrase. */
export const SMS_NONSHARE_CLAUSE =
  'Mobile information will not be shared with third parties or affiliates for marketing or promotional purposes. Text messaging originator opt-in data and consent will not be shared with any third parties.';

export const SMS_MESSAGE_TYPES =
  'account alerts, lead and task notifications, and support replies for users of our software, for example dealership staff using the Dealer Agent';

export const SMS_DISCLOSURES = [
  'Message frequency varies.',
  'Message and data rates may apply.',
  'Reply STOP to opt out, HELP for help.',
  'Carriers are not liable for delayed or undelivered messages.',
] as const;

export const CONSENT_SENTENCE =
  'I agree to receive text messages from Somnus Labs Inc. about my account, including alerts, lead and task notifications, and support replies. Message frequency varies. Message and data rates may apply. Reply STOP to opt out, HELP for help. Consent is not a condition of purchase. See our Privacy Policy and Terms.';

export const LEGAL_NAV = [
  { href: '/privacy', label: 'Privacy' },
  { href: '/terms', label: 'Terms' },
  { href: '/sms', label: 'SMS' },
] as const;

export const LEGAL_PAGES = [
  {
    path: '/privacy',
    title: 'Privacy Policy: Somnus Labs',
    description:
      'How Somnus Labs Inc. collects, uses, and keeps information for its software, including text-message consent.',
  },
  {
    path: '/terms',
    title: 'Terms of Use: Somnus Labs',
    description:
      'Terms for Somnus Labs software, including the Somnus Labs account notifications text-message program.',
  },
  {
    path: '/sms',
    title: 'SMS Opt-In: Somnus Labs',
    description:
      'How a user opts in to Somnus Labs account notifications by text, and how to stop messages or get help.',
  },
] as const;
