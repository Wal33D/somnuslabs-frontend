import type { Metadata } from 'next';
import { ContactArticle } from '@/components/site/ContactArticle';
import { CONTACT_DESCRIPTION, CONTACT_TITLE, buildMetadata } from '@/lib/site';

export const metadata: Metadata = buildMetadata({
  title: CONTACT_TITLE,
  description: CONTACT_DESCRIPTION,
  path: '/contact',
  keywords: ['Somnus Labs contact', 'Somnus Labs email'],
});

type ContactPageProps = {
  searchParams?: { product?: string };
};

export default function ContactPage({ searchParams }: ContactPageProps) {
  return <ContactArticle productSlug={searchParams?.product} />;
}
