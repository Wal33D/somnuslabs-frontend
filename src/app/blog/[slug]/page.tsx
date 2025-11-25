import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { posts, getPostBySlug } from '@/lib/posts';
import { Button } from '@/components/ui';
import { Header } from '@/components/site/Header';

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const base = 'https://somnuslabs.ai';
  const url = `${base}${post.canonicalPath}`;

  return {
    title: post.ogTitle || post.title,
    description: post.ogDescription || post.description,
    alternates: { canonical: url },
    keywords: [post.title, post.productLabel, 'Somnus Labs', ...post.tags],
    openGraph: {
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.description,
      url,
      type: 'article',
      images: post.heroImage
        ? [
            {
              url: post.heroImage,
              alt: post.title,
            },
          ]
        : undefined,
    },
    twitter: {
      card: 'summary_large_image',
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.description,
      images: post.heroImage ? [post.heroImage] : undefined,
    },
  };
}

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
    className={`w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${
      className || ''
    }`}>
    {children}
  </section>
);

const formatDate = (date: string) =>
  new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric',
  });

export default function BlogPostPage({ params }: PageProps) {
  const post = getPostBySlug(params.slug);
  if (!post) return notFound();

  const base = 'https://somnuslabs.ai';
  const url = `${base}${post.canonicalPath}`;

  const headings = post.sections
    .map(section => section.heading)
    .filter(Boolean) as string[];

  return (
    <main className="relative flex min-h-screen flex-col bg-gradient-to-b from-[#f6f7ff] via-white to-indigo-50 pb-16">
      <Header />
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.08),transparent_30%)]" />
      </div>

      <Section className="relative pt-14 space-y-8">
        <div className="space-y-4">
          <Link
            href="/blog"
            className="text-sm font-semibold text-indigo-700 hover:underline">
            ← Back to blog
          </Link>
          <Eyebrow>Somnus Labs</Eyebrow>
          <h1 className="text-3xl sm:text-4xl font-display font-semibold text-zinc-900 leading-tight">
            {post.title}
          </h1>
          <p className="text-lg text-muted-foreground">{post.description}</p>
          <div className="flex flex-wrap items-center gap-3 text-sm text-indigo-700">
            <span className="rounded-full bg-indigo-50 px-3 py-1 font-semibold">
              {formatDate(post.date)}
            </span>
            {post.tags.map(tag => (
              <span
                key={tag}
                className="rounded-full bg-indigo-50 px-3 py-1 font-semibold">
                {tag}
              </span>
            ))}
            <span className="rounded-full bg-indigo-50 px-3 py-1 font-semibold">
              {post.readTimeMinutes} min read
            </span>
            <span className="rounded-full bg-indigo-50 px-3 py-1 font-semibold">
              {post.author}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-3 text-sm text-indigo-700">
            <span className="font-semibold text-indigo-800">Learn more:</span>
            <Link href={post.productUrl} className="hover:underline">
              {post.productLabel}
            </Link>
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1fr_240px] lg:items-start">
          <article className="prose prose-zinc max-w-none">
            <script
              type="application/ld+json"
              dangerouslySetInnerHTML={{
                __html: JSON.stringify({
                  '@context': 'https://schema.org',
                  '@type': 'Article',
                  headline: post.title,
                  description: post.description,
                  author: { '@type': 'Organization', name: post.author },
                  publisher: {
                    '@type': 'Organization',
                    name: 'Somnus Labs',
                    logo: {
                      '@type': 'ImageObject',
                      url: 'https://somnuslabs.ai/images/logo-with-text.png',
                    },
                  },
                  mainEntityOfPage: url,
                  datePublished: post.date,
                  image: post.heroImage,
                }),
              }}
            />
            {post.sections.map((section, idx) => {
              const id =
                section.heading
                  ?.toLowerCase()
                  .replace(/[^a-z0-9]+/g, '-')
                  .replace(/(^-|-$)/g, '') || `section-${idx}`;
              return (
                <div key={id} className="mb-8 scroll-mt-24" id={id}>
                  {section.heading && <h2>{section.heading}</h2>}
                  {section.paragraphs?.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                  {section.bullets && (
                    <ul>
                      {section.bullets.map(bullet => (
                        <li key={bullet}>{bullet}</li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </article>

          {headings.length > 0 && (
            <aside className="sticky top-24 hidden rounded-2xl border border-white/70 bg-white/90 p-4 shadow-card backdrop-blur lg:block">
              <div className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-700">
                On this page
              </div>
              <ul className="mt-3 space-y-2 text-sm text-zinc-700">
                {headings.map(heading => {
                  const id = heading
                    .toLowerCase()
                    .replace(/[^a-z0-9]+/g, '-')
                    .replace(/(^-|-$)/g, '');
                  return (
                    <li key={heading}>
                      <a href={`#${id}`} className="hover:text-indigo-700">
                        {heading}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </aside>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-4">
          <Link href="/blog">
            <Button variant="outline">Back to all posts</Button>
          </Link>
          <Link href="/#products">
            <Button variant="ghost">Explore products</Button>
          </Link>
          {post.cta && (
            <Link href={post.cta.href}>
              <Button>{post.cta.label}</Button>
            </Link>
          )}
        </div>
      </Section>
    </main>
  );
}
