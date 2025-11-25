export type PostSection = {
  heading?: string;
  paragraphs?: string[];
  bullets?: string[];
};

export type Post = {
  slug: string;
  title: string;
  description: string;
  date: string;
  tags: string[];
  excerpt: string;
  author: string;
  readTimeMinutes: number;
  productUrl: string;
  productLabel: string;
  heroImage?: string;
  canonicalPath: string;
  ogTitle: string;
  ogDescription: string;
  sections: PostSection[];
  cta?: {
    label: string;
    href: string;
  };
};

export const posts: Post[] = [
  {
    slug: 'magicreply-ai-automated-review-responses',
    title: 'MagicReply.ai: AI-powered review responses that stay on-brand',
    description:
      'How MagicReply.ai automates Google review responses with tone control, approvals, and analytics.',
    date: '2024-11-01',
    tags: ['AI', 'Customer Experience', 'Automation'],
    excerpt:
      'MagicReply.ai keeps your review responses fast, on-brand, and measurable with approvals and analytics out of the box.',
    author: 'Somnus Labs Team',
    readTimeMinutes: 4,
    productUrl: 'https://magicreply.ai',
    productLabel: 'MagicReply.ai',
    heroImage: 'https://magicreply.ai/images/magicReplyHeadOpenGraphImage.png',
    canonicalPath: '/blog/magicreply-ai-automated-review-responses',
    ogTitle: 'MagicReply.ai: AI-powered review responses that stay on-brand',
    ogDescription:
      'Automate Google review replies with tone-matching, guardrails, and analytics from Somnus Labs.',
    sections: [
      {
        paragraphs: [
          'Customers notice how quickly and thoughtfully you respond to reviews. MagicReply.ai makes every response instant, on-brand, and observable.',
        ],
      },
      {
        heading: 'What MagicReply.ai solves',
        bullets: [
          'Slow response times that hurt trust and rankings.',
          'Off-tone replies that do not sound like your brand.',
          'No visibility into how AI responses impact CSAT.',
        ],
      },
      {
        heading: 'Key capabilities',
        bullets: [
          'Tone-matching replies across Google reviews so every response sounds like you.',
          'Human-in-the-loop approvals when you need control; full auto when you need speed.',
          'Guardrails and safety checks to avoid risky responses.',
          'Analytics on response times and sentiment lift.',
        ],
      },
      {
        heading: 'Getting started',
        paragraphs: [
          'Connect your review source, set tone and guardrail preferences, and choose your approval mode. You will start seeing on-brand replies in minutes.',
        ],
      },
    ],
    cta: { label: 'Visit MagicReply.ai', href: 'https://magicreply.ai' },
  },
  {
    slug: 'plantvision-ai-plant-identification-companion',
    title: 'PlantVision.ai: Your AI plant identification companion',
    description:
      'Identify plants and get care guidance instantly with PlantVision.ai on WhatsApp.',
    date: '2024-11-03',
    tags: ['AI', 'Computer Vision', 'WhatsApp'],
    excerpt:
      'PlantVision.ai identifies plants from photos and answers follow-up care questions right in WhatsApp.',
    author: 'Somnus Labs Team',
    readTimeMinutes: 4,
    productUrl: 'https://plantvision.ai',
    productLabel: 'PlantVision.ai',
    heroImage: 'https://res.cloudinary.com/dkfrhzkaf/image/upload/plantvision.ai/pv.webp',
    canonicalPath: '/blog/plantvision-ai-plant-identification-companion',
    ogTitle: 'PlantVision.ai: AI plant identification companion',
    ogDescription:
      'Snap a plant photo, get instant ID and care tips with PlantVision.ai from Somnus Labs.',
    sections: [
      {
        paragraphs: [
          'Plant lovers, gardeners, and nurseries need fast answers when they see an unfamiliar plant or spot an issue. PlantVision.ai lives in WhatsApp so you can get plant IDs and care guidance without new logins.',
        ],
      },
      {
        heading: 'What PlantVision.ai solves',
        bullets: [
          'Uncertainty about plant species and care requirements.',
          'Time-consuming research across forums and sites.',
          'No easy way to ask follow-up questions after an ID.',
        ],
      },
      {
        heading: 'Key capabilities',
        bullets: [
          'Snap a photo to get instant identification with confidence cues.',
          'Ask follow-up questions about care, pests, watering, and growth.',
          'Works directly in WhatsApp—no new apps or accounts to manage.',
          'Great for home gardeners and nursery teams alike.',
        ],
      },
      {
        heading: 'Getting started',
        paragraphs: [
          'Add PlantVision.ai on WhatsApp, send a photo, and start asking questions. Save your favorites and share results with teammates or friends.',
        ],
      },
    ],
    cta: { label: 'Visit PlantVision.ai', href: 'https://plantvision.ai' },
  },
  {
    slug: 'candycomp-instant-real-estate-cma',
    title: 'CandyComp: Instant real estate CMAs that clients can trust',
    description:
      'Generate agent-grade comparative market analyses in seconds with CandyComp.',
    date: '2024-11-05',
    tags: ['Real Estate', 'AI', 'Analytics'],
    excerpt:
      'CandyComp lets agents generate CMAs in seconds, tweak assumptions, and share polished reports with their branding.',
    author: 'Somnus Labs Team',
    readTimeMinutes: 4,
    productUrl: 'https://candycomp.com',
    productLabel: 'CandyComp',
    heroImage:
      'https://storage.googleapis.com/gpt-engineer-file-uploads/rwScSRzEyPVYN49nxhrDmw5TcbS2/social-images/social-1763714112466-og-image.png',
    canonicalPath: '/blog/candycomp-instant-real-estate-cma',
    ogTitle: 'CandyComp: Instant real estate CMAs that clients can trust',
    ogDescription:
      'Build defensible CMAs in seconds with CandyComp from Somnus Labs—agent-grade outputs, tweakable assumptions, shareable reports.',
    sections: [
      {
        paragraphs: [
          'Agents and brokers need defensible CMAs quickly, without sacrificing quality. CandyComp makes comps sweet and simple, while keeping pro-level controls.',
        ],
      },
      {
        heading: 'What CandyComp solves',
        bullets: [
          'Manual CMA creation that takes hours and delays client follow-up.',
          'Generic outputs that are hard to defend with clients.',
          'Reports that do not match the agent’s brand.',
        ],
      },
      {
        heading: 'Key capabilities',
        bullets: [
          'Instant comparative market analyses with solid defaults.',
          'Tweak assumptions (filters, weightings) and regenerate quickly.',
          'Shareable, branded reports clients can understand.',
        ],
      },
      {
        heading: 'Getting started',
        paragraphs: [
          'Enter a property, review the generated comps, adjust assumptions if needed, and export or share the branded report—all in minutes.',
        ],
      },
    ],
    cta: { label: 'Visit CandyComp', href: 'https://candycomp.com' },
  },
  {
    slug: 'promptnexus-build-ai-workflows-with-guardrails',
    title: 'PromptNexus: Build and monitor AI workflows with guardrails',
    description:
      'Design, deploy, and observe AI-powered workflows faster with PromptNexus.',
    date: '2024-11-07',
    tags: ['AI', 'Workflows', 'Observability'],
    excerpt:
      'PromptNexus is a no-code canvas to design, deploy, and observe AI workflows with versioning and guardrails.',
    author: 'Somnus Labs Team',
    readTimeMinutes: 4,
    productUrl: 'https://promptnexus.ai',
    productLabel: 'PromptNexus.ai',
    heroImage: '/images/promptnexus-logo.webp',
    canonicalPath: '/blog/promptnexus-build-ai-workflows-with-guardrails',
    ogTitle: 'PromptNexus: Build and monitor AI workflows with guardrails',
    ogDescription:
      'Ship AI workflows faster with PromptNexus—no-code canvas, versioned prompts, guardrails, and observability.',
    sections: [
      {
        paragraphs: [
          'Teams shipping AI features need to move quickly without losing safety. PromptNexus gives you a no-code canvas to design workflows, plus versioning and monitoring to keep quality high.',
        ],
      },
      {
        heading: 'What PromptNexus solves',
        bullets: [
          'Slow iterations when prompts and tools live in code only.',
          'No visibility into workflow performance or failures.',
          'Risk of regressions without versioning and guardrails.',
        ],
      },
      {
        heading: 'Key capabilities',
        bullets: [
          'No-code workflow canvas with reusable blocks.',
          'Versioned prompts and change history for safe rollbacks.',
          'Guardrails and checks to keep workflows on-brand and safe.',
          'Observability to see what is running and where to improve.',
        ],
      },
      {
        heading: 'Getting started',
        paragraphs: [
          'Drag in the building blocks you need, connect tools, set guardrails, and ship. Monitor runs and iterate quickly with change tracking.',
        ],
      },
    ],
    cta: { label: 'Visit PromptNexus', href: 'https://promptnexus.ai' },
  },
];

export const getPostBySlug = (slug: string) =>
  posts.find(post => post.slug === slug);
