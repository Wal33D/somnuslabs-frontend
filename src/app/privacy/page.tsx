import type { Metadata } from 'next';
import { PrivacyPolicy } from '@/components/site/legal-pages';
import { LEGAL_PAGES } from '@/lib/legal';
import { buildMetadata } from '@/lib/site';

const page = LEGAL_PAGES[0];

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: [
    'Somnus Labs privacy policy',
    'Somnus Labs Inc.',
    'SMS privacy',
    'text message consent',
  ],
});

export default function PrivacyPage() {
  return <PrivacyPolicy />;
}
