import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
  fallback: ['system-ui', 'sans-serif'],
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
  fallback: ['Inter', 'system-ui', 'sans-serif'],
});

export const metadata: Metadata = {
  metadataBase: new URL('https://www.somnuslabs.com'),
  title: 'Somnus Labs - AI products that ship faster and stay on-brand',
  description:
    'Somnus Labs builds AI software for real estate and local business: Deskwork, MagicReply, CMAForge, ARV Analyzer, ListingPhoto, and ListingReels.',
  keywords: [
    'Somnus Labs',
    'Deskwork',
    'MagicReply',
    'CMAForge',
    'ARV Analyzer',
    'ListingPhoto',
    'ListingReels',
    'brokerage back office software',
    'commission tracking',
    'comparative market analysis',
    'real estate CMA',
    'ARV calculator',
    'fix and flip deal analysis',
    'real estate photo enhancement',
    'virtual staging',
    'real estate listing videos',
    'AI review responses',
    'AI automation',
  ],
  authors: [{ name: 'Somnus Labs', url: 'https://www.somnuslabs.com' }],
  creator: 'Somnus Labs',
  publisher: 'Somnus Labs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.somnuslabs.com',
    types: {
      'application/rss+xml': 'https://www.somnuslabs.com/rss.xml',
    },
  },
  openGraph: {
    title: 'Somnus Labs - AI products that ship faster and stay on-brand',
    description:
      'Explore Somnus-built products: Deskwork, MagicReply, CMAForge, ARV Analyzer, ListingPhoto, and ListingReels. Built with guardrails, speed, and measurable outcomes.',
    url: 'https://www.somnuslabs.com',
    siteName: 'Somnus Labs',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/images/logo-with-text.png',
        width: 1200,
        height: 630,
        alt: 'Somnus Labs',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Somnus Labs - AI products that ship faster and stay on-brand',
    description:
      'Explore Somnus-built products: Deskwork, MagicReply, CMAForge, ARV Analyzer, ListingPhoto, and ListingReels.',
    images: ['/images/logo-with-text.png'],
    creator: '@somnuslabs',
    site: '@somnuslabs',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {children}
      </body>
    </html>
  );
}
