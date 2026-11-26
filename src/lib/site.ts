import type { Metadata } from 'next';
import { LEGAL_EMAIL } from '@/lib/legal';
import { liveProducts } from '@/lib/products';

export const SITE_URL = 'https://www.somnuslabs.com';
export const SITE_NAME = 'Somnus Labs';
/** Public inbox. Same address the legal pages give for support. */
export const CONTACT_EMAIL = LEGAL_EMAIL;

export const CONTACT_TITLE = 'Contact Somnus Labs';
export const CONTACT_DESCRIPTION =
  'Email Somnus Labs about a product or a build. Subscribe on this page only for product news and beta invites.';
export const HOME_TITLE =
  'Somnus Labs: Deskwork, MagicReply, CMAForge and more';
export const HOME_DESCRIPTION =
  'Somnus Labs builds Deskwork, MagicReply, CMAForge, ARV Analyzer and PlantVision: software for brokerages, agents, investors and local businesses.';
export const SITE_UPDATED = '2026-11-26';

export const OG_IMAGE = {
  url: '/og/somnuslabs-og.png',
  width: 1200,
  height: 630,
  alt: 'Somnus Labs: software for real estate, reviews and plants',
};

export const SOCIAL_LINKS = ['https://github.com/somnuslabs'];

export type SiteProduct = {
  name: string;
  href: string;
  appHref?: string;
  /** One line, taken from the product's own live home page. */
  summary: string;
  category: string;
  slug: string;
};

export const siteProducts: SiteProduct[] = liveProducts.map(product => ({
  name: product.name,
  href: product.href,
  appHref: product.appHref,
  summary: product.summary,
  category: product.category,
  slug: product.slug,
}));

type PageMeta = {
  title: string;
  description: string;
  path: string;
  type?: 'website' | 'article';
  image?: { url: string; width?: number; height?: number; alt?: string };
  keywords?: string[];
};

/** One place that builds the title, description, canonical, Open Graph and Twitter tags. */
export function buildMetadata({
  title,
  description,
  path,
  type = 'website',
  image = OG_IMAGE,
  keywords,
}: PageMeta): Metadata {
  return {
    title,
    description,
    keywords,
    alternates: { canonical: path },
    openGraph: {
      title,
      description,
      url: path,
      siteName: SITE_NAME,
      locale: 'en_US',
      type,
      images: [image],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [image.url],
      creator: '@somnuslabs',
      site: '@somnuslabs',
    },
  };
}
