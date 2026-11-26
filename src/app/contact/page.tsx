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
  searchParams: Promise<{ product?: string | string[] }>;
};

export default async function ContactPage({ searchParams }: ContactPageProps) {
  const { product } = await searchParams;
  const productSlug = Array.isArray(product) ? product[0] : product;
  return <ContactArticle productSlug={productSlug} />;
}
