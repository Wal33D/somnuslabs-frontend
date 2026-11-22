import type { Metadata } from 'next';
import { TermsOfUse } from '@/components/site/legal-pages';
import { LEGAL_PAGES, SMS_PROGRAM_NAME } from '@/lib/legal';
import { buildMetadata } from '@/lib/site';

const page = LEGAL_PAGES[1];

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: [
    'Somnus Labs terms of use',
    'Somnus Labs Inc.',
    SMS_PROGRAM_NAME,
    'SMS terms',
  ],
});

export default function TermsPage() {
  return <TermsOfUse />;
}
