import type { Metadata } from 'next';

export const SITE_URL = 'https://www.somnuslabs.com';
export const SITE_NAME = 'Somnus Labs';
export const CONTACT_EMAIL = 'info@somnuslabs.com';
export const HOME_TITLE =
  'Somnus Labs: Deskwork, MagicReply, CMAForge and more';
export const HOME_DESCRIPTION =
  'Somnus Labs builds Deskwork, MagicReply, CMAForge, ARV Analyzer and PlantVision: software for brokerages, agents, investors and local businesses.';
export const SITE_UPDATED = '2026-11-19';

export const OG_IMAGE = {
  url: '/og/somnuslabs-og.png',
  width: 1200,
  height: 630,
  alt: 'Somnus Labs: software for real estate, reviews and plants',
};

export const SOCIAL_LINKS = [
  'https://github.com/somnuslabs',
  'https://twitter.com/somnuslabs',
];

export type SiteProduct = {
  name: string;
  href: string;
  appHref?: string;
  /** One line, taken from the product's own live home page. */
  summary: string;
  category: string;
};

export const siteProducts: SiteProduct[] = [
  {
    name: 'Deskwork',
    href: 'https://deskworkapp.com',
    appHref: 'https://app.deskworkapp.com',
    summary:
      'One back office for independent real estate brokerages: transactions, documents, deadlines, commissions, payouts and reporting.',
    category: 'BusinessApplication',
  },
  {
    name: 'MagicReply',
    href: 'https://magicreply.ai',
    appHref: 'https://app.magicreply.ai',
    summary:
      'Drafts a reply to each Google review in your brand voice; you edit it, approve it, and post it to Google.',
    category: 'BusinessApplication',
  },
  {
    name: 'CMAForge',
    href: 'https://cmaforge.com',
    appHref: 'https://app.cmaforge.com',
    summary:
      'Chat with AI that knows your market: instant CMAs, comps, offer analysis, and client-ready reports for real estate agents.',
    category: 'BusinessApplication',
  },
  {
    name: 'ARV Analyzer',
    href: 'https://arvanalyzer.com',
    summary:
      'AI deal underwriting for real estate investors: ARV, rehab estimate, MAO, deal score, risk flags and exit strategies.',
    category: 'BusinessApplication',
  },
  {
    name: 'PlantVision',
    href: 'https://plantvisionapp.com',
    summary:
      'Identify any plant from a photo in your browser or on WhatsApp, then ask care questions in the chat.',
    category: 'LifestyleApplication',
  },
];

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
