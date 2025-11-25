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
  title: 'Somnus Labs - AI products that ship faster and stay on-brand',
  description:
    'Somnus Labs is the team behind MagicReply, PlantVision, CandyComp, and PromptNexus—built with safety, observability, and polish.',
  openGraph: {
    title: 'Somnus Labs - AI products that ship faster and stay on-brand',
    description:
      'Explore Somnus-built products: MagicReply, PlantVision, CandyComp, and PromptNexus. Built with guardrails, speed, and measurable outcomes.',
    url: 'https://somnuslabs.ai',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Somnus Labs - AI products that ship faster and stay on-brand',
    description:
      'Explore Somnus-built products: MagicReply, PlantVision, CandyComp, and PromptNexus.',
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
