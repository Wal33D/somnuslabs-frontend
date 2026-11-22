import type { Metadata } from 'next';
import { SmsProgram } from '@/components/site/legal-pages';
import { LEGAL_PAGES, SMS_PROGRAM_NAME } from '@/lib/legal';
import { buildMetadata } from '@/lib/site';

const page = LEGAL_PAGES[2];

export const metadata: Metadata = buildMetadata({
  title: page.title,
  description: page.description,
  path: page.path,
  keywords: [
    'Somnus Labs SMS',
    SMS_PROGRAM_NAME,
    'text message opt-in',
    'STOP',
    'HELP',
  ],
});

export default function SmsPage() {
  return <SmsProgram />;
}
