import Link from 'next/link';
import type { Metadata } from 'next';
import { posts } from '@/lib/posts';
import { Button } from '@/components/ui';

export const metadata: Metadata = {
  title: 'Somnus Labs Blog - AI product notes and launches',
  description:
    'Stories and launch notes from Somnus Labs, covering MagicReply, PlantVision, CandyComp, and PromptNexus.',
};

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
  <section className={`w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 ${className || ''}`}>
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
}: {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  excerpt: string;
}) => (
  <div className="flex flex-col gap-3 rounded-2xl border border-white/70 bg-white/90 p-6 shadow-card backdrop-blur">
    <div className="flex items-center justify-between gap-4 text-xs text-indigo-700">
      <div className="flex flex-wrap gap-2">
        {tags.map(tag => (
          <span
            key={tag}
            className="rounded-full bg-indigo-50 px-3 py-1 font-semibold"
          >
            {tag}
          </span>
        ))}
      </div>
      <span className="text-muted-foreground">{formatDate(date)}</span>
    </div>
    <div className="space-y-2">
      <h3 className="text-xl font-semibold text-zinc-900 font-display">{title}</h3>
      <p className="text-sm text-muted-foreground">{description}</p>
    </div>
    <p className="text-sm text-zinc-700">{excerpt}</p>
    <div className="mt-auto flex items-center justify-between gap-3">
      <Link href={`/blog/${slug}`} className="text-indigo-700 font-semibold hover:underline">
        Read more
      </Link>
      <Link href={`/blog/${slug}`}>
        <Button size="sm">Open post</Button>
      </Link>
    </div>
  </div>
);

export default function BlogIndex() {
  return (
    <main className="relative flex min-h-screen flex-col bg-gradient-to-b from-[#f6f7ff] via-white to-indigo-50 pb-16">
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
        <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.08),transparent_30%)]" />
      </div>

      <Section className="relative pt-14 space-y-10">
        <div className="max-w-3xl space-y-4">
          <Eyebrow>Somnus Labs</Eyebrow>
          <h1 className="text-4xl sm:text-5xl font-display font-semibold text-zinc-900 leading-tight">
            Launch notes and thinking from the Somnus team
          </h1>
          <p className="text-lg text-muted-foreground">
            Deep dives into MagicReply, PlantVision, CandyComp, and PromptNexus—what we are
            building, why it matters, and how to get the most value from each product.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link href="/#products">
              <Button>See products</Button>
            </Link>
            <Link href="/#contact">
              <Button variant="outline">Join updates</Button>
            </Link>
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {posts.map(post => (
            <PostCard key={post.slug} {...post} />
          ))}
        </div>
      </Section>
    </main>
  );
}
