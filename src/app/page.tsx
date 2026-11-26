import type { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/ui';
import { Footer } from '@/components/site/Footer';
import { Header } from '@/components/site/Header';
import { SubscribeForm } from 'src/components/molecules/SignupForm';
import { catalog, productPath, type CatalogProduct } from '@/lib/products';
import { CONTACT_EMAIL } from '@/lib/site';

type ClientWork = {
  name: string;
  client: string;
  description: string;
  bullets: string[];
};

type Stat = { label: string; value: string };
type Pillar = { title: string; copy: string; icon: string };
type SneakPeek = { title: string; copy: string; tag: string };

const clientWork: ClientWork = {
  name: 'Dealer assistant',
  client: 'Deals Unlimited Inc.',
  description: 'A WhatsApp assistant built for a used-car dealership.',
  bullets: [
    'Custom software built for Deals Unlimited Inc., not sold as a product',
    'Answers dealership staff questions about warranties and inventory',
    'Available to staff only today',
  ],
};

const stats: Stat[] = [
  { label: 'Products live', value: '5' },
  { label: 'Client builds', value: '1' },
  { label: 'Building since', value: '2023' },
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
    copy: 'Shared building blocks - sign-in, reporting, and multi-provider AI with automatic fallback - give every launch a head start.',
    icon: 'Launch',
  },
];

const sneakPeeks: SneakPeek[] = [
  {
    title: 'ListingPhoto',
    copy: 'Photo enhancement for real estate listings. Coming soon.',
    tag: 'In development',
  },
  {
    title: 'ListingReels',
    copy: 'Listing videos for real estate marketing. Coming soon.',
    tag: 'In development',
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
  <div className="rounded-xl border border-white/70 bg-white/80 p-3 sm:p-4 shadow-card text-center">
    <div className="text-2xl sm:text-3xl font-bold text-zinc-900 font-display">
      {stat.value}
    </div>
    <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
  </div>
);

const ProductCard = ({ product }: { product: CatalogProduct }) => (
  <article
    id={product.slug}
    className="flex scroll-mt-32 flex-col rounded-2xl bg-white/90 p-6 shadow-card border border-white/60 ring-1 ring-indigo-50 card-hover">
    <div className="flex items-center justify-between gap-3">
      <h3 className="text-xl font-semibold text-zinc-900 font-display">
        <Link href={productPath(product)} className="hover:text-indigo-700">
          {product.name}
        </Link>
      </h3>
      <Badge>{product.badge}</Badge>
    </div>
    <div className="mt-4 flex items-start gap-4">
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
      <p className="text-sm text-muted-foreground">{product.description}</p>
    </div>
    <ul className="mt-4 space-y-2 text-sm text-zinc-700">
      {product.bullets.map(point => (
        <li key={point} className="flex gap-2">
          <span aria-hidden="true" className="text-indigo-500">
            -
          </span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
    <div className="mt-6 flex flex-wrap gap-3">
      <ButtonLink href={product.href} external>
        {product.primaryCta}
      </ButtonLink>
      {product.secondaryCta && (
        <ButtonLink href={product.secondaryCta.href} variant="outline" external>
          {product.secondaryCta.label}
        </ButtonLink>
      )}
      <ButtonLink href={productPath(product)} variant="ghost">
        Details
      </ButtonLink>
    </div>
  </article>
);

const ClientWorkCard = ({ work }: { work: ClientWork }) => (
  <article className="rounded-2xl bg-white/90 p-6 shadow-card border border-white/60 ring-1 ring-indigo-50">
    <div className="flex items-center justify-between gap-3">
      <h3 className="text-xl font-semibold text-zinc-900 font-display">
        {work.name}
      </h3>
      <Badge>For {work.client}</Badge>
    </div>
    <p className="mt-4 text-sm text-muted-foreground">{work.description}</p>
    <ul className="mt-4 space-y-2 text-sm text-zinc-700">
      {work.bullets.map(point => (
        <li key={point} className="flex gap-2">
          <span aria-hidden="true" className="text-indigo-500">
            -
          </span>
          <span>{point}</span>
        </li>
      ))}
    </ul>
  </article>
);

const SneakCard = ({ peek }: { peek: SneakPeek }) => (
  <div className="relative overflow-hidden rounded-2xl border border-white/60 bg-gradient-to-br from-indigo-500/10 via-white to-purple-200/30 p-5 shadow-card">
    <div className="relative flex flex-col gap-2">
      <span className="inline-flex w-fit rounded-full bg-white/70 px-3 py-1 text-xs font-semibold text-indigo-700">
        {peek.tag}
      </span>
      <h3 className="text-lg font-semibold text-zinc-900 font-display">
        {peek.title}
      </h3>
      <p className="text-sm text-muted-foreground">{peek.copy}</p>
    </div>
  </div>
);

const Home: React.FC = () => (
  <div className="relative flex min-h-screen flex-col overflow-hidden bg-gradient-to-b from-[#f6f7ff] via-white to-indigo-50">
    <div className="pointer-events-none absolute inset-0">
      <div className="absolute -left-24 top-10 h-64 w-64 rounded-full bg-indigo-200/40 blur-3xl" />
      <div className="absolute right-0 top-40 h-64 w-64 rounded-full bg-purple-200/40 blur-3xl" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(79,70,229,0.08),transparent_35%),radial-gradient(circle_at_80%_10%,rgba(168,85,247,0.08),transparent_30%)]" />
    </div>

    <Header />

    <main id="main" className="relative flex flex-col gap-16 pb-20">
      <Section className="pt-10" id="hero">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
          <div className="space-y-6">
            <Eyebrow>Somnus Labs</Eyebrow>
            <h1 className="text-4xl sm:text-5xl leading-tight font-display text-zinc-900">
              AI products that ship faster, learn faster, and stay on-brand.
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Somnus Labs builds Deskwork, MagicReply, CMAForge, ARV Analyzer
              and PlantVision: a back office for real estate brokerages, replies
              to Google reviews, CMAs clients can follow, deal underwriting for
              investors, and plant identification from a photo.
            </p>
            <div className="flex flex-wrap gap-3">
              <ButtonLink href="#products" size="lg">
                Explore products
              </ButtonLink>
              <ButtonLink href="#contact" size="lg" variant="outline">
                Get updates
              </ButtonLink>
            </div>
            <div className="flex flex-wrap items-center gap-3 rounded-2xl border border-white/80 bg-white/80 p-4 shadow-card">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-indigo-600">
                Our products
              </span>
              <div className="flex flex-wrap items-center gap-3">
                {catalog.map(product => (
                  <Link
                    key={product.name}
                    href={productPath(product)}
                    className="inline-flex items-center rounded-full bg-indigo-50 px-3 py-1 text-xs font-semibold text-indigo-700 hover:bg-indigo-100">
                    {product.name}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="relative flex justify-center lg:justify-end">
            <div className="absolute -inset-6 rounded-[32px] bg-gradient-to-br from-indigo-500/10 via-white to-purple-300/30 blur-2xl" />
            <div className="relative rounded-[28px] border border-white/70 bg-white/90 p-6 shadow-card">
              <Image
                width={420}
                height={240}
                alt="Somnus Labs"
                src="/images/logo-with-text.png"
                priority
                className="mx-auto h-auto w-[320px] max-w-full animate-float"
                sizes="(max-width: 640px) 80vw, 320px"
              />
              <div className="mt-6 grid grid-cols-3 gap-2 sm:gap-3">
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
            One studio, five live products
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Each product solves one job and has its own site.
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          {catalog.map(product => (
            <ProductCard key={product.name} product={product} />
          ))}
        </div>
      </Section>

      <Section id="client-work" className="space-y-8 scroll-mt-32">
        <div className="text-center space-y-3">
          <Eyebrow>Client work</Eyebrow>
          <h2 className="text-3xl font-display font-semibold text-zinc-900">
            Custom software, built for clients
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Some of what we build is made for one business. It is under the same
            Somnus umbrella, but it is not a product you can sign up for.
          </p>
        </div>
        <div className="mx-auto max-w-2xl">
          <ClientWorkCard work={clientWork} />
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
              className="rounded-2xl border border-white/70 bg-white/80 p-5 shadow-card">
              <div className="mb-3 inline-flex items-center gap-2 rounded-lg bg-indigo-50 px-3 py-2 text-xs font-semibold uppercase tracking-wide text-indigo-700">
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-sm bg-indigo-500"
                />
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold text-zinc-900 font-display">
                {pillar.title}
              </h3>
              <p className="mt-2 text-sm text-muted-foreground">
                {pillar.copy}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <Section id="about" className="space-y-8 scroll-mt-32">
        <div className="rounded-[28px] border border-white/70 bg-white/85 p-6 shadow-card">
          <div className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <div className="space-y-3">
              <Eyebrow>About Somnus Labs</Eyebrow>
              <h2 className="text-2xl font-display font-semibold text-zinc-900">
                A small studio that builds and runs its own software
              </h2>
              <p className="text-sm text-muted-foreground">
                Somnus Labs has been building software since 2023. We make and
                run Deskwork, MagicReply, CMAForge, ARV Analyzer and
                PlantVision, and we build custom software for clients. We ship
                in small rounds and keep a person in the loop where money or
                reputation is on the line.
              </p>
              <div className="grid grid-cols-3 gap-2 sm:gap-3">
                {stats.map(stat => (
                  <StatCard key={`proof-${stat.label}`} stat={stat} />
                ))}
              </div>
            </div>
            <div className="rounded-2xl bg-gradient-to-br from-indigo-600 to-purple-600 p-[1px]">
              <div className="h-full rounded-2xl bg-white p-6 text-left shadow-hover">
                <h3 className="text-sm font-semibold text-indigo-800">
                  Get in touch
                </h3>
                <p className="mt-3 text-lg text-zinc-900 font-display leading-snug">
                  Questions about a product, or something you want built?
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  Email <a href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
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
            Coming soon
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Two more products are in development. Neither is open yet.
          </p>
        </div>
        <div className="grid gap-4 md:grid-cols-2">
          {sneakPeeks.map(peek => (
            <SneakCard key={peek.title} peek={peek} />
          ))}
        </div>
      </Section>

      <Section id="contact" className="scroll-mt-32">
        <div className="relative overflow-hidden rounded-[28px] border border-white/70 bg-white/90 p-8 shadow-card">
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

    <Footer />
  </div>
);

export default Home;
