import Link from 'next/link';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { posts, getPostBySlug } from '@/lib/posts';
import { Button } from '@/components/ui';

type PageProps = {
  params: { slug: string };
};

export function generateStaticParams() {
  return posts.map(post => ({ slug: post.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const post = getPostBySlug(params.slug);
  if (!post) return {};
  const url = `https://somnuslabs.ai${post.canonicalPath}`;

  return {
    title: post.ogTitle || post.title,
    description: post.ogDescription || post.description,
    alternates: { canonical: url },
    openGraph: {
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.description,
      url,
      type: 'article',
    },
    twitter: {
      card: 'summary_large_image',
      title: post.ogTitle || post.title,
      description: post.ogDescription || post.description,
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
  <section className={`w-full max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 ${className || ''}`}>
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

  return (
    <main className="relative flex min-h-screen flex-col bg-gradient-to-b from-[#f6f7ff] via-white to-indigo-50 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.08),transparent_30%)]" />
      </div>

      <Section className="relative pt-14 space-y-8">
        <div className="space-y-4">
          <Link href="/blog" className="text-sm font-semibold text-indigo-700 hover:underline">
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
              <span key={tag} className="rounded-full bg-indigo-50 px-3 py-1 font-semibold">
                {tag}
              </span>
            ))}
          </div>
        </div>

        <article className="prose prose-zinc max-w-none">
          {post.sections.map((section, idx) => (
            <div key={section.heading || idx} className="mb-8">
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
          ))}
        </article>

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
