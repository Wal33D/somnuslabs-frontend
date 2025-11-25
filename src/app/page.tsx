import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';
import { SubscribeForm } from 'src/components/molecules/SignupForm';

type Product = {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  badge: 'Live' | 'Beta' | 'New';
  description: string;
  bullets: string[];
  primaryCta: string;
  secondaryCta?: { label: string; href: string };
};

type Stat = { label: string; value: string };
type Pillar = { title: string; copy: string; icon: string };
type SneakPeek = { title: string; copy: string; tag: string };

const products: Product[] = [
  {
    name: 'MagicReply.ai',
    href: 'https://magicreply.ai',
    imageSrc: '/images/magicreply-logo.png',
    imageAlt: 'MagicReply Logo',
    badge: 'Live',
    description: 'Autonomous review responses that stay on-brand.',
    bullets: [
      'Reply in your tone across Google reviews',
      'Human-in-the-loop approvals when you want them',
      'Analytics on CSAT impact and response time',
    ],
    primaryCta: 'Visit MagicReply',
    secondaryCta: { label: 'See how it works', href: '#contact' },
  },
  {
    name: 'PlantVision.ai',
    href: 'https://plantvision.ai',
    imageSrc: '/images/plantvision-logo.webp',
    imageAlt: 'PlantVision.ai Logo',
    badge: 'Live',
    description: 'WhatsApp plant expert on demand.',
    bullets: [
      'Snap a photo, get instant identification',
      'Ask follow-ups about care, pests, and growth',
      'Designed for gardeners, nurseries, and hobbyists',
    ],
    primaryCta: 'Visit PlantVision',
    secondaryCta: { label: 'Talk to us', href: '#contact' },
  },
  {
    name: 'CandyComp',
    href: 'https://candycomp.com',
    imageSrc: '/images/candycomp-logo.png',
    imageAlt: 'CandyComp Logo',
    badge: 'Beta',
    description: 'Sweet, defensible CMAs in seconds.',
    bullets: [
      'Instant comparative market analysis for real estate',
      'Agent-grade outputs with tweakable assumptions',
      'Shareable reports with your branding',
    ],
    primaryCta: 'Visit CandyComp',
    secondaryCta: { label: 'Request a demo', href: '#contact' },
  },
  {
    name: 'PromptNexus.ai',
    href: 'https://promptnexus.ai',
    imageSrc: '/images/promptnexus-logo.webp',
    imageAlt: 'PromptNexus Logo',
    badge: 'New',
    description: 'No-code AI workflows with monitoring built in.',
    bullets: [
      'Design, deploy, and observe AI-powered automations',
      'Versioning and guardrails for your prompts',
      'Ship faster with prebuilt building blocks',
    ],
    primaryCta: 'Visit PromptNexus',
    secondaryCta: { label: 'Explore workflows', href: '#contact' },
  },
];

const stats: Stat[] = [
  { label: 'Automated replies delivered', value: '1.2M+' },
  { label: 'Plant IDs answered', value: '840k' },
  { label: 'CMAs generated', value: '62k' },
];

const pillars: Pillar[] = [
  {
    title: 'Automation with control',
    copy: 'Guardrails, approvals, and human fallback so AI stays on-brand.',
    icon: 'Shield',
  },
  {
    title: 'Data you can trust',
    copy: 'Quality signals, observability, and feedback loops baked in.',
    icon: 'Data',
  },
  {
    title: 'Ship faster',
    copy: 'Reusable components across Somnus products accelerate every launch.',
    icon: 'Launch',
  },
];

const sneakPeeks: SneakPeek[] = [
  {
    title: 'Conversational reviews',
    copy: 'Tone-adaptive replies that sound like your team - without the wait.',
    tag: 'MagicReply.ai',
  },
  {
    title: 'Guided CMAs',
    copy: 'Adjust assumptions, regenerate comps, and share polished reports.',
    tag: 'CandyComp',
  },
  {
    title: 'AI workflow canvas',
    copy: 'Chain tools, prompts, and checks with observability out of the box.',
    tag: 'PromptNexus',
  },
];

const cn = (...classes: Array<string | undefined | false>) =>
  classes.filter(Boolean).join(' ');

const Badge = ({ children }: { children: ReactNode }) => (
  <span className="inline-flex items-center rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
    {children}
  </span>
);

const Eyebrow = ({ children }: { children: ReactNode }) => (
  <div className="text-xs uppercase tracking-[0.3em] text-indigo-600 font-semibold">
    {children}
  </div>
);

const Section = ({
  id,
  className,
  children,
}: {
  id?: string;
  className?: string;
  children: ReactNode;
}) => (
  <section
    id={id}
    className={cn('w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8', className)}>
    {children}
  </section>
);

const StatCard = ({ stat }: { stat: Stat }) => (
  <div className="rounded-xl border border-white/70 bg-white/80 p-4 shadow-card backdrop-blur-md text-center">
    <div className="text-3xl font-bold text-zinc-900 font-display">
      {stat.value}
    </div>
    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
  </div>
);

const ProductCard = ({ product }: { product: Product }) => (
  <div className="flex flex-col rounded-2xl bg-white/90 p-6 shadow-card backdrop-blur border border-white/60 ring-1 ring-indigo-50 card-hover">
    <div className="flex items-center justify-between gap-3">
      <h3 className="text-xl font-semibold text-zinc-900 font-display">
        {product.name}
      </h3>
      <Badge>{product.badge}</Badge>
    </div>
    <div className="mt-4 flex items-center gap-4">
      <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-indigo-50">
        <Image
          src={product.imageSrc}
          alt={product.imageAlt}
          width={64}
          height={64}
          className="h-12 w-12 object-contain"
        />
      </div>
      <p className="text-sm text-muted-foreground">{product.description}</p>
    </div>
    <ul className="mt-4 space-y-2 text-sm text-zinc-700">
      {product.bullets.map(point => (
        <li key={point} className="flex gap-2">
          <span className="text-indigo-500">-</span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
    <div className="mt-6 flex flex-wrap gap-3">
      <Link href={product.href} className="inline-block" rel="noreferrer">
        <Button>{product.primaryCta}</Button>
      </Link>
      {product.secondaryCta && (
        <Link href={product.secondaryCta.href} className="inline-block">
          <Button variant="outline">{product.secondaryCta.label}</Button>
        </Link>
      )}
    </div>
  </div>
);

const SneakCard = ({ peek }: { peek: SneakPeek }) => (
  <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-indigo-500/10 via-white to-purple-200/30 p-5 shadow-card backdrop-blur">
    <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-to-br from-indigo-400/30 to-purple-500/30 blur-3xl" />
    <div className="relative flex flex-col gap-2">
      <span className="inline-flex w-fit rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-indigo-700">
        {peek.tag}
      </span>
      <div className="text-lg font-semibold text-zinc-900 font-display">
        {peek.title}
      </div>
      <p className="text-sm text-muted-foreground">{peek.copy}</p>
    </div>
  </div>
);

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-white/60 bg-white/80 backdrop-blur-md">
    <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <Image
          width={140}
          height={48}
          alt="Somnus Labs Logo"
          src="/images/somnuslabs-header-logo.png"
          priority
          className="h-10 w-auto"
        />
      </div>
      <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
        <Link href="#products" className="hover:text-indigo-600">
          Products
        </Link>
        <Link href="#why" className="hover:text-indigo-600">
          Why Somnus
        </Link>
        <Link href="#proof" className="hover:text-indigo-600">
          Proof
        </Link>
        <Link href="#contact" className="hover:text-indigo-600">
          Contact
        </Link>
      </nav>
      <div className="flex items-center gap-3">
        <Link href="#contact" className="hidden md:inline-block">
          <Button variant="ghost">Join waitlist</Button>
        </Link>
        <Link href="#products" className="inline-block">
          <Button>See the products</Button>
        </Link>
      </div>
    </div>
  </header>
);

const Home: React.FC = () => (
  <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-[#f6f7ff] via-white to-indigo-50">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.08),transparent_30%)]" />
    </div>

    <Header />

    <main className="relative flex flex-col gap-16 pb-20">
      <Section className="pt-10" id="hero">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Eyebrow>Somnus Labs</Eyebrow>
            <h1 className="text-4xl sm:text-5xl leading-tight font-display text-zinc-900">
              AI products that ship faster, learn faster, and stay on-brand.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              We build automation you can trust - reviews that sound like you,
              plant answers that feel human, CMAs that clients can act on, and
              workflows you can monitor.
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href="#products">
                <Button size="lg">Explore products</Button>
              </Link>
              <Link href="#contact">
                <Button size="lg" variant="outline">
                  Book a call
                </Button>
              </Link>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-card backdrop-blur">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Trusted in production
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {products.map(product => (
                  <span
                    key={product.name}
                    className="inline-flex items-center gap-2 rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700">
                    <Image
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      width={20}
                      height={20}
                      className="h-5 w-5 object-contain"
                    />
                    {product.name}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-indigo-500/10 via-white to-purple-300/30 blur-2xl" />
            <div className="relative rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-card backdrop-blur">
              <Image
                width={420}
                height={240}
                alt="Somnus Labs Logo"
                src="/images/logo-with-text.png"
                priority
                className="mx-auto h-auto w-[320px] max-w-full animate-float"
                sizes="(max-width: 1024px) 100vw, 420px"
              />
              <div className="mt-6 grid gap-3 sm:grid-cols-3">
                {stats.map(stat => (
                  <StatCard key={stat.label} stat={stat} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="products" className="space-y-8 scroll-mt-32">
        <div className="text-center space-y-3">
          <Eyebrow>Products</Eyebrow>
          <h2 className="text-3xl sm:text-4xl font-display font-semibold text-zinc-900">
            One company, four focused apps
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each product solves a real workflow and shares the same Somnus-grade
            observability, guardrails, and polish.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {products.map(product => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Section>

      <Section id="why" className="space-y-8 scroll-mt-32">
        <div className="text-center space-y-2">
          <Eyebrow>Why Somnus</Eyebrow>
          <h2 className="text-3xl font-display font-semibold text-zinc-900">
            Built for reliability and speed
          </h2>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {pillars.map(pillar => (
            <div
              key={pillar.title}
              className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-card backdrop-blur">
              <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                <span className="h-2 w-2 rounded-sm bg-indigo-500" />
                {pillar.icon}
              </div>
              <div className="text-lg font-semibold text-zinc-900 font-display">
                {pillar.title}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                {pillar.copy}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="proof" className="space-y-8 scroll-mt-32">
        <div className="rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-card backdrop-blur">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-3">
              <Eyebrow>Proof</Eyebrow>
              <h3 className="text-2xl font-display font-semibold text-zinc-900">
                Metrics that compound
              </h3>
              <p className="text-sm text-muted-foreground">
                From customer response times to plant identifications, we obsess
                over measurable wins and ship iteratively to keep improving
                them.
              </p>
              <div className="grid gap-3 sm:grid-cols-3">
                {stats.map(stat => (
                  <StatCard key={`proof-${stat.label}`} stat={stat} />
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-[1px]">
              <div className="h-full rounded-2xl bg-white/90 p-6 text-left shadow-hover">
                <p className="text-sm text-indigo-800 font-semibold">
                  Founder note
                </p>
                <p className="mt-3 text-lg text-zinc-900 font-display leading-snug">
                  &quot;We ship products that feel handcrafted, but they scale
                  like software. Safety, observability, and polish are
                  non-negotiable across every Somnus product.&quot;
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  - Somnus Labs Team
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="space-y-6">
        <div className="text-center space-y-2">
          <Eyebrow>In the works</Eyebrow>
          <h2 className="text-3xl font-display font-semibold text-zinc-900">
            Sneak peeks
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Lightweight previews of the experiences we obsess over - without
            spoiling the full UI.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-3">
          {sneakPeeks.map(peek => (
            <SneakCard key={peek.title} peek={peek} />
          ))}
        </div>
      </Section>

      <Section id="contact" className="scroll-mt-32">
        <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/90 p-8 shadow-card backdrop-blur">
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-indigo-500/10 blur-3xl" />
          <div className="absolute -left-16 -bottom-16 h-48 w-48 rounded-full bg-purple-400/10 blur-3xl" />
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-3">
              <Eyebrow>Stay in the loop</Eyebrow>
              <h2 className="text-3xl font-display font-semibold text-zinc-900">
                Get Somnus updates, invites, and early access
              </h2>
              <p className="text-muted-foreground">
                Tell us where to send product news, beta invites, and demos. No
                spam - just the signal.
              </p>
              <div className="flex flex-wrap gap-2 text-xs text-indigo-700">
                <span className="rounded-full bg-indigo-50 px-3 py-1 font-semibold">
                  Early feature previews
                </span>
                <span className="rounded-full bg-indigo-50 px-3 py-1 font-semibold">
                  Private demo slots
                </span>
                <span className="rounded-full bg-indigo-50 px-3 py-1 font-semibold">
                  Product changelog
                </span>
              </div>
            </div>
            <div className="relative">
              <SubscribeForm />
            </div>
          </div>
        </div>
      </Section>
    </main>

    <footer className="relative mt-12 w-full border-t border-white/70 bg-gradient-to-t from-indigo-100/70 to-white/40">
      <Section className="flex flex-col items-center gap-3 py-8 text-center">
        <Image
          width={150}
          height={50}
          alt="Somnus Labs Footer Logo"
          src="/images/somnuslabs-header-logo.png"
          className="h-10 w-auto"
        />
        <p className="text-muted-foreground">
          &copy; 2023 - {new Date().getFullYear()} Somnus Labs. All rights
          reserved.
        </p>
        <p className="text-sm text-muted-foreground">
          Building the future with AI
        </p>
      </Section>
    </footer>
  </div>
);

export default Home;
