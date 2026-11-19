import Image from 'next/image';
import Link from 'next/link';
import type { Metadata } from 'next';
import { posts } from '@/lib/posts';
import { ButtonLink } from '@/components/ui';
import { buildMetadata } from '@/lib/site';
import { Header } from '@/components/site/Header';

export const metadata: Metadata = buildMetadata({
  title: 'Somnus Labs Blog: product notes and launches',
  description:
    'Notes and launch posts from Somnus Labs on CMAForge, MagicReply, PlantVision and PromptNexus: what each product does and who it is for.',
  path: '/blog',
  keywords: [
    'Somnus Labs blog',
    'CMAForge',
    'MagicReply',
    'PlantVision',
    'PromptNexus',
  ],
});

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <div className="text-xs uppercase tracking-[0.3em] text-indigo-600 font-semibold">
    {children}
  </div>
);

const Section = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <section
    className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${
      className || ''
    }`}>
    {children}
  </section>
);

const PostCard = ({
  slug,
  title,
  description,
  date,
  tags,
  excerpt,
  readTimeMinutes,
  author,
  heroImage,
  productUrl,
  productLabel,
}: {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  excerpt: string;
  readTimeMinutes: number;
  author: string;
  heroImage?: string;
  productUrl: string;
  productLabel: string;
}) => (
  <article className="group grid gap-4 overflow-hidden rounded-2xl border border-white/70 bg-white/90 p-6 shadow-card backdrop-blur transition hover:-translate-y-1 hover:shadow-hover md:grid-cols-[1.2fr_0.8fr] md:items-center">
    <div className="flex flex-col gap-3">
      <div className="flex items-center justify-between gap-4 text-xs text-indigo-700">
        <div className="flex flex-wrap gap-2">
          {tags.map(tag => (
            <span
              key={tag}
              className="rounded-full bg-indigo-50 px-3 py-1 font-semibold">
              {tag}
            </span>
          ))}
        </div>
        <span className="text-muted-foreground">{formatDate(date)}</span>
      </div>
      <div className="space-y-2">
        <h2 className="text-xl font-semibold text-zinc-900 font-display group-hover:text-indigo-700">
          {title}
        </h2>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <p className="text-sm text-zinc-700">{excerpt}</p>
      <div className="flex items-center gap-3 text-xs text-muted-foreground">
        <span>{author}</span>
        <span className="h-1 w-1 rounded-full bg-zinc-300" />
        <span>{readTimeMinutes} min read</span>
      </div>
      <div className="mt-auto flex items-center justify-between gap-3">
        <Link
          href={`/blog/${slug}`}
          aria-label={`Read more: ${title}`}
          className="text-indigo-700 font-semibold hover:underline">
          Read more
        </Link>
        <div className="flex gap-2">
          <ButtonLink href={productUrl} size="sm" variant="outline">
            Visit {productLabel}
          </ButtonLink>
          <ButtonLink href={`/blog/${slug}`} size="sm">
            Open post
          </ButtonLink>
        </div>
      </div>
    </div>

    {heroImage && (
      <div className="overflow-hidden rounded-xl bg-indigo-50/60 aspect-[16/10] w-full md:max-w-xs md:justify-self-end">
        <Image
          src={heroImage}
          alt=""
          width={400}
          height={250}
          sizes="(max-width: 768px) 100vw, 320px"
          className={`h-full w-full transition duration-300 ease-out ${
            heroImage.includes('plantvision') ||
            slug.includes('plantvision') ||
            heroImage.includes('promptnexus') ||
            slug.includes('promptnexus')
              ? 'object-contain p-4'
              : 'object-cover group-hover:scale-105'
          }`}
        />
      </div>
    )}
  </article>
);

export default function BlogIndex() {
  const sortedPosts = [...posts].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return (
    <div className="relative flex min-h-screen flex-col bg-gradient-to-b from-[#f6f7ff] via-white to-indigo-50 pb-16">
      <Header />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.08),transparent_30%)]" />
      </div>

      <main id="main">
        <Section className="relative pt-14 space-y-10">
          <div className="max-w-3xl space-y-4">
            <Eyebrow>Somnus Labs</Eyebrow>
            <h1 className="text-4xl sm:text-5xl font-display font-semibold text-zinc-900 leading-tight">
              Launch notes and thinking from the Somnus team
            </h1>
            <p className="text-lg text-muted-foreground">
              Posts about CMAForge, MagicReply, PlantVision, and PromptNexus:
              what each product does and who it is for.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="/#products">See products</ButtonLink>
              <ButtonLink href="/#contact" variant="outline">
                Get updates
              </ButtonLink>
            </div>
          </div>

          <div className="grid gap-6">
            {sortedPosts.map(post => (
              <div key={post.slug} className="w-full">
                <PostCard {...post} />
              </div>
            ))}
          </div>
        </Section>
      </main>
    </div>
  );
}
