export type CatalogProduct = {
  slug: string;
  name: string;
  href: string;
  appHref?: string;
  /** Schema and footer summary. May lag the card until copy is aligned. */
  summary: string;
  /** The line shown on the home card and the product page. */
  description: string;
  category: string;
  imageSrc: string;
  imageAlt: string;
  badge: 'Live' | 'Beta' | 'New' | 'Open source';
  bullets: string[];
  primaryCta: string;
  secondaryCta?: { label: string; href: string };
  kind: 'live' | 'open-source';
};

export const catalog: CatalogProduct[] = [
  {
    slug: 'deskwork',
    name: 'Deskwork',
    href: 'https://deskworkapp.com',
    appHref: 'https://app.deskworkapp.com',
    summary:
      'One back office for independent real estate brokerages: transactions, documents, deadlines, commissions, payouts and reporting.',
    description:
      'One back office for independent real estate brokerages: transactions, documents, deadlines, commissions, payouts and reporting.',
    category: 'BusinessApplication',
    imageSrc: '/images/deskwork-logo.png',
    imageAlt: 'Deskwork logo',
    badge: 'Live',
    bullets: [
      'One screen to open a file: agent, address, price',
      'Agent statements with the split, fees and cap, emailed to each agent',
      "Sign up with your brokerage's Google Workspace or a Gmail address",
    ],
    primaryCta: 'Visit Deskwork',
    secondaryCta: { label: 'Sign in', href: 'https://app.deskworkapp.com' },
    kind: 'live',
  },
  {
    slug: 'magicreply',
    name: 'MagicReply',
    href: 'https://magicreply.ai',
    appHref: 'https://app.magicreply.ai',
    summary:
      'Drafts a reply to each Google review in your brand voice; you edit it, approve it, and post it to Google.',
    description:
      'Drafts a reply to each Google review in your brand voice; you edit it, approve it, and post it to Google.',
    category: 'BusinessApplication',
    imageSrc: '/images/magicreply-logo.png',
    imageAlt: 'MagicReply logo',
    badge: 'Live',
    bullets: [
      'A reply drafted for every review, in your brand voice',
      'You stay in control: edit and approve before anything posts',
      'Start free',
    ],
    primaryCta: 'Visit MagicReply',
    secondaryCta: { label: 'Sign in', href: 'https://app.magicreply.ai' },
    kind: 'live',
  },
  {
    slug: 'cmaforge',
    name: 'CMAForge',
    href: 'https://cmaforge.com',
    appHref: 'https://app.cmaforge.com',
    summary:
      'Chat with AI that knows your market: instant CMAs, comps, offer analysis, and client-ready reports for real estate agents.',
    description:
      'Chat with AI that knows your market: instant CMAs, comps, offer analysis, and client-ready reports for real estate agents.',
    category: 'BusinessApplication',
    imageSrc: '/images/cmaforge-logo.png',
    imageAlt: 'CMAForge logo',
    badge: 'Live',
    bullets: [
      'Seller CMAs with sold, pending and active comps',
      'Appraisal-risk flags, pricing scenarios, and a VA Ready Check',
      'PDF reports and shareable web links; free to start, no card',
    ],
    primaryCta: 'Visit CMAForge',
    secondaryCta: { label: 'Open the app', href: 'https://app.cmaforge.com' },
    kind: 'live',
  },
  {
    slug: 'arv-analyzer',
    name: 'ARV Analyzer',
    href: 'https://arvanalyzer.com',
    summary:
      'AI deal underwriting for real estate investors: ARV, rehab estimate, MAO, deal score, risk flags and exit strategies.',
    description:
      'AI deal underwriting for real estate investors: ARV, rehab estimate, MAO, deal score, risk flags and exit strategies.',
    category: 'BusinessApplication',
    imageSrc: '/images/arvanalyzer-logo.png',
    imageAlt: 'ARV Analyzer logo',
    badge: 'New',
    bullets: [
      'A full deal analysis from an address in under 60 seconds',
      'ARV, rehab estimate, and maximum allowable offer',
      'Start free',
    ],
    primaryCta: 'Visit ARV Analyzer',
    kind: 'live',
  },
  {
    slug: 'plantvision',
    name: 'PlantVision',
    href: 'https://plantvisionapp.com',
    summary:
      'Identify any plant from a photo in your browser, then ask care questions in the chat.',
    description:
      'Identify any plant from a photo in your browser, then ask care questions in the chat.',
    category: 'LifestyleApplication',
    imageSrc: '/images/plantvision-logo.webp',
    imageAlt: 'PlantVision logo',
    badge: 'New',
    bullets: [
      'Upload a photo in your browser: free, no sign-up',
      'Get the name and care basics, then ask follow-up care questions',
      'A library of care notes for 40 houseplants and garden plants',
    ],
    primaryCta: 'Visit PlantVision',
    secondaryCta: {
      label: 'Identify a plant',
      href: 'https://plantvisionapp.com/identify',
    },
    kind: 'live',
  },
  {
    slug: 'promptnexus',
    name: 'PromptNexus',
    href: 'https://promptnexus.ai',
    summary:
      'A no-code builder for AI workflows: design a workflow that prompts AI, then run it from a button or an API call.',
    description:
      'A no-code builder for AI workflows: design a workflow that prompts AI, then run it from a button or an API call.',
    category: 'BusinessApplication',
    imageSrc: '/images/promptnexus-logo.webp',
    imageAlt: 'PromptNexus logo',
    badge: 'Beta',
    bullets: [
      'Design an AI workflow without writing code',
      'Run it from a button or from the PromptNexus API',
      'Open beta: create an account, no payment yet',
    ],
    primaryCta: 'Visit PromptNexus',
    secondaryCta: {
      label: 'Try it',
      href: 'https://promptnexus.ai/workflows',
    },
    kind: 'live',
  },
  {
    slug: 'obd-droid',
    name: 'OBD-Droid',
    href: 'https://github.com/Wal33D/OBD-Droid',
    summary:
      'An Android car diagnostics app: plug in any ELM327 adapter and read live data, trouble codes and emissions readiness, with an AI copilot.',
    description:
      'An Android car diagnostics app: plug in any ELM327 adapter and read live data, trouble codes and emissions readiness, with an AI copilot.',
    category: 'UtilitiesApplication',
    imageSrc: '/images/obd-droid-logo.png',
    imageAlt: 'OBD-Droid logo',
    badge: 'Open source',
    bullets: [
      'Live data, HUD mode, and CSV + GPS logging',
      'Fault codes with freeze frames and fix hints',
      'VIN decode and NHTSA safety recalls, MIT licensed',
    ],
    primaryCta: 'View on GitHub',
    kind: 'open-source',
  },
];

export const liveProducts = catalog.filter(product => product.kind === 'live');

export const openSourceProducts = catalog.filter(
  product => product.kind === 'open-source',
);

export const getProduct = (slug: string) =>
  catalog.find(product => product.slug === slug);

export const productPath = (product: CatalogProduct) =>
  `/products/${product.slug}`;

export const productTitle = (product: CatalogProduct) =>
  `${product.name}: Somnus Labs`;

export const productDescription = (product: CatalogProduct) =>
  product.description;
