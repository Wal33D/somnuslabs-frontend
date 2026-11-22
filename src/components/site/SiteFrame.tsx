import type { ReactNode } from 'react';
import Link from 'next/link';
import { Header } from '@/components/site/Header';
import { Footer } from '@/components/site/Footer';
import {
  CONSENT_SENTENCE,
  LEGAL_ADDRESS_LINES,
  LEGAL_EMAIL,
  LEGAL_NAME,
  LEGAL_UPDATED_LABEL,
} from '@/lib/legal';

const SiteFrame = ({ children }: { children: ReactNode }) => (
  <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-[#f6f7ff] via-white to-indigo-50">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />
    </div>
    <Header />
    <main id="main" className="relative flex-1">
      {children}
    </main>
    <Footer />
  </div>
);

const CompanyContact = () => (
  <address className="not-italic">
    {LEGAL_NAME}
    <br />
    {LEGAL_ADDRESS_LINES[0]}
    <br />
    {LEGAL_ADDRESS_LINES[1]}
    <br />
    United States
    <br />
    <a href={`mailto:${LEGAL_EMAIL}`}>{LEGAL_EMAIL}</a>
  </address>
);

const ConsentSentence = () => {
  const [before, after] = CONSENT_SENTENCE.split('Privacy Policy and Terms');

  return (
    <blockquote className="not-prose my-4 border-l-4 border-indigo-300 pl-4 text-base not-italic text-zinc-800">
      <p>
        {before}
        <Link href="/privacy">Privacy Policy</Link>
        {' and '}
        <Link href="/terms">Terms</Link>
        {after}
      </p>
    </blockquote>
  );
};

const LegalArticle = ({
  title,
  lede,
  children,
}: {
  title: string;
  lede: string;
  children: ReactNode;
}) => (
  <article className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
    <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
      Somnus Labs
    </p>
    <h1 className="mt-3 font-display text-4xl font-semibold text-zinc-900">
      {title}
    </h1>
    <p className="mt-3 text-sm text-muted-foreground">
      Updated {LEGAL_UPDATED_LABEL}
    </p>
    <p className="mt-6 text-lg text-muted-foreground">{lede}</p>
    <div className="prose prose-zinc mt-8 max-w-none prose-headings:font-display prose-headings:text-zinc-900 prose-a:text-indigo-700">
      {children}
    </div>
  </article>
);

export { CompanyContact, ConsentSentence, LegalArticle, SiteFrame };
