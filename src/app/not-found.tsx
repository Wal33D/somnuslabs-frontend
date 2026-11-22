import Link from 'next/link';
import { SiteFrame } from '@/components/site/SiteFrame';

export default function NotFound() {
  return (
    <SiteFrame>
      <article className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
          Somnus Labs
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-zinc-900">
          Page not found
        </h1>
        <p className="mt-4 text-lg text-muted-foreground">
          That page is not on this site.{' '}
          <Link href="/">Go to the home page</Link>.
        </p>
      </article>
    </SiteFrame>
  );
}
