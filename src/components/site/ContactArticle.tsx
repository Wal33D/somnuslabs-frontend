import Link from 'next/link';
import { SiteFrame } from '@/components/site/SiteFrame';
import { SubscribeForm } from 'src/components/molecules/SignupForm';
import { catalog, getProduct } from '@/lib/products';
import { CONTACT_EMAIL } from '@/lib/site';

const ContactArticle = ({ productSlug }: { productSlug?: string }) => {
  const selected = productSlug ? getProduct(productSlug) : undefined;
  const subject = selected
    ? `Question about ${selected.name}`
    : 'Question for Somnus Labs';
  const mailto = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
    subject,
  )}`;

  return (
    <SiteFrame>
      <article className="mx-auto w-full max-w-3xl px-4 py-14 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.3em] text-indigo-600">
          Somnus Labs
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-zinc-900">
          Contact
        </h1>
        <p className="mt-6 text-lg text-muted-foreground">
          Questions about a product, or something you want built? Email{' '}
          <a href={mailto}>{CONTACT_EMAIL}</a>. That is the support address on
          the privacy, terms, and SMS pages.
        </p>
        {selected && (
          <p className="mt-4 text-sm font-semibold text-indigo-700">
            This note is about {selected.name}.
          </p>
        )}

        <h2 className="mt-10 font-display text-2xl font-semibold text-zinc-900">
          Which product?
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          Pick one and the email subject names it.
        </p>
        <ul className="mt-4 flex flex-wrap gap-2">
          {catalog.map(product => (
            <li key={product.slug}>
              <Link
                href={`/contact?product=${product.slug}`}
                className="inline-flex rounded-full bg-indigo-50 px-3 py-1 text-sm font-semibold text-indigo-700 hover:bg-indigo-100"
                aria-current={
                  selected?.slug === product.slug ? 'true' : undefined
                }>
                {product.name}
              </Link>
            </li>
          ))}
        </ul>

        <h2 className="mt-10 font-display text-2xl font-semibold text-zinc-900">
          Product news
        </h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The form below is only the mailing list: product news and the
          occasional beta invite. It does not book a demo.
        </p>
        <SubscribeForm />
      </article>
    </SiteFrame>
  );
};

export { ContactArticle };
