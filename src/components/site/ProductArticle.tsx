import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/ui';
import { SiteFrame } from '@/components/site/SiteFrame';
import type { CatalogProduct } from '@/lib/products';

const ProductArticle = ({ product }: { product: CatalogProduct }) => (
  <SiteFrame>
    <article className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
        <Link href="/#products">Products</Link>
      </p>
      <div className="mt-4 flex items-center gap-4">
        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-lg bg-indigo-50">
          <Image
            src={product.imageSrc}
            alt={product.imageAlt}
            width={48}
            height={48}
            sizes="48px"
            className="h-12 w-12 object-contain"
          />
        </div>
        <div>
          <h1 className="font-display text-4xl font-semibold text-zinc-900">
            {product.name}
          </h1>
          <p className="mt-2 text-sm font-semibold text-indigo-700">
            {product.badge}
          </p>
        </div>
      </div>
      <p className="mt-6 text-lg text-muted-foreground">
        {product.description}
      </p>
      <ul className="mt-6 list-disc space-y-2 pl-5 text-sm text-zinc-700">
        {product.bullets.map(point => (
          <li key={point}>{point}</li>
        ))}
      </ul>
      <div className="mt-8 flex flex-wrap gap-3">
        <ButtonLink href={product.href} external>
          {product.primaryCta}
        </ButtonLink>
        {product.secondaryCta && (
          <ButtonLink
            href={product.secondaryCta.href}
            variant="outline"
            external>
            {product.secondaryCta.label}
          </ButtonLink>
        )}
        <ButtonLink href="/#contact" variant="outline">
          Ask a question
        </ButtonLink>
      </div>
      <p className="mt-8 text-sm text-muted-foreground">
        The app lives on its own site. This page is the Somnus Labs summary, so
        you can decide before you leave.
      </p>
    </article>
  </SiteFrame>
);

export { ProductArticle };
