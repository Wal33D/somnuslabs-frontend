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
  /** ISO date of the last substantive edit; used for sitemap lastmod. */
  updated?: string;
  tags: string[];
  excerpt: string;
  author: string;
  readTimeMinutes: number;
  productUrl: string;
  productLabel: string;
  heroImage?: string;
  /** 1200x630-ish image for Open Graph/Twitter; the site default is used when absent. */
  shareImage?: { url: string; width: number; height: number };
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
    slug: 'cmaforge-ai-powered-real-estate-analysis',
    title:
      'CMAForge: AI-Powered Comparative Market Analysis for Real Estate Professionals',
    description:
      'CMAForge transforms how real estate agents research and price properties with AI-powered market analysis, real-time data, and professional branded reports.',
    date: '2024-12-15',
    tags: ['Real Estate', 'AI', 'SaaS', 'Market Analysis'],
    excerpt:
      'CMAForge combines fresh Zillow, Redfin, and Realtor.com data with AI-powered strategy recommendations to generate professional CMAs in seconds—complete with shareable links, PDF exports, and custom branding.',
    author: 'Waleed Judah',
    readTimeMinutes: 5,
    productUrl: 'https://cmaforge.com',
    productLabel: 'CMAForge',
    heroImage: 'https://cmaforge.com/og-image.png',
    shareImage: {
      url: 'https://cmaforge.com/og-image.png',
      width: 1200,
      height: 630,
    },
    canonicalPath: '/blog/cmaforge-ai-powered-real-estate-analysis',
    ogTitle: 'CMAForge: AI-Powered CMAs for Real Estate Agents',
    ogDescription:
      'How CMAForge turns an address into a client-ready comparative market analysis with AI pricing guidance, shareable links and PDF reports.',
    sections: [
      {
        paragraphs: [
          'Real estate professionals know the pain of creating comparative market analyses. Hours spent pulling comps, adjusting values, and formatting reports—all while clients wait. CMAForge changes the game by combining real-time property data with AI-powered insights to generate professional CMAs in seconds, not hours.',
        ],
      },
      {
        heading: 'What CMAForge solves',
        bullets: [
          'Time-consuming manual CMA creation that delays client follow-up and costs deals.',
          'Outdated market data from stale MLS exports that erode client trust.',
          'Generic reports that lack defensibility and professional polish.',
          'No strategic guidance on pricing—just raw numbers without context.',
          'Difficulty sharing analyses with clients in a professional, branded format.',
        ],
      },
      {
        heading: 'Key capabilities',
        bullets: [
          'Real-time data from Zillow, Redfin, and Realtor.com APIs for always-current comps.',
          'AI-powered market briefs and strategy recommendations from multi-provider AI.',
          'Dual workflow modes: Seller CMA for listing agents and Buyer CMA for offer strategy.',
          'Professional PDF reports and secure shareable links with custom branding.',
          'Condition assessment with AI-assisted photo analysis for accurate adjustments.',
          'Market trends and rental signals with 7+ years of historical data.',
          'Chrome extension to run CMAs while browsing listing sites.',
        ],
      },
      {
        heading: 'How it works',
        paragraphs: [
          'Enter a property address and CMAForge pulls subject property details with Street View verification. Select your workflow—seller or buyer—and the platform fetches relevant sold, pending, and active listings.',
          'Review AI-generated comparable scoring, adjust conditions if needed, and receive strategic pricing recommendations with risk assessment. Export a branded PDF or share a secure link with your client.',
        ],
      },
      {
        heading: 'Who it is for',
        bullets: [
          'Listing agents who need client-ready CMAs with defensible pricing strategy.',
          'Buyer agents analyzing offer positions and appraisal risk.',
          'Brokerages seeking consistent, branded market analysis across teams.',
          'Investors evaluating multiple properties with repeatable methodology.',
        ],
      },
      {
        heading: 'Getting started',
        paragraphs: [
          'Sign up with Google, run your first CMA, and see the difference AI-powered analysis makes. Current plans and trial details are on cmaforge.com.',
        ],
      },
    ],
    cta: { label: 'Visit CMAForge', href: 'https://cmaforge.com' },
  },
  {
    slug: 'magicreply-ai-automated-review-responses',
    title: 'MagicReply.ai: AI-powered review responses that stay on-brand',
    description:
      'How MagicReply.ai automates Google review responses with tone control, approvals, and analytics.',
    date: '2024-11-01',
    tags: ['AI', 'Customer Experience', 'Automation'],
    excerpt:
      'MagicReply.ai keeps your review responses fast, on-brand, and measurable with approvals and analytics out of the box.',
    author: 'Waleed Judah',
    readTimeMinutes: 4,
    productUrl: 'https://magicreply.ai',
    productLabel: 'MagicReply.ai',
    heroImage: '/images/magicReplyHeadOpenGraphImage.png',
    shareImage: {
      url: '/images/magicReplyHeadOpenGraphImage.png',
      width: 1201,
      height: 627,
    },
    canonicalPath: '/blog/magicreply-ai-automated-review-responses',
    ogTitle: 'MagicReply: AI replies to reviews that stay on-brand',
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
    slug: 'plantvision-identify-plants-from-a-photo',
    title: 'PlantVision: identify any plant from a photo',
    description:
      'PlantVision names a plant from a photo and explains how to care for it, in your browser or on WhatsApp. Free to start, no sign-up.',
    date: '2024-11-03',
    updated: '2026-11-19',
    tags: ['AI', 'Computer Vision', 'WhatsApp'],
    excerpt:
      'Upload a photo of a leaf, a flower or the whole plant, and PlantVision tells you what it is and how to look after it. Keep asking follow-up questions in the chat.',
    author: 'Waleed Judah',
    readTimeMinutes: 3,
    productUrl: 'https://plantvisionapp.com',
    productLabel: 'PlantVision',
    heroImage: '/images/plantvision-logo.webp',
    canonicalPath: '/blog/plantvision-identify-plants-from-a-photo',
    ogTitle: 'PlantVision: identify any plant from a photo',
    ogDescription:
      'Identify a plant from a photo in your browser or on WhatsApp, then ask care questions in the chat. A product of Somnus Labs.',
    sections: [
      {
        paragraphs: [
          'PlantVision identifies a plant from a photo and tells you how to care for it. It works in your browser at plantvisionapp.com, and on WhatsApp when you want to keep asking questions in a chat.',
          'This post was first written in 2024 for an earlier version of PlantVision. It has been updated for the current product at plantvisionapp.com.',
        ],
      },
      {
        heading: 'What PlantVision solves',
        bullets: [
          'Not knowing what a plant is, or how to look after it.',
          'Hunting through forums and sites for care advice.',
          'No easy way to ask a follow-up question after you get a name.',
        ],
      },
      {
        heading: 'How it works',
        bullets: [
          'Open Identify in your browser and add a clear photo of a leaf, a flower or the whole plant. No account and no sign-up.',
          'PlantVision gives the common and scientific names and the basics of care.',
          'Prefer a chat? Send the photo on WhatsApp and ask about watering, light, pests or yellowing leaves by text or voice note.',
        ],
      },
      {
        heading: 'Plant care notes',
        paragraphs: [
          'The PlantVision plant library has notes on light, water, soil, temperature, pet safety and common problems for 40 houseplants and garden plants.',
        ],
      },
      {
        heading: 'Pricing',
        paragraphs: [
          'PlantVision is free while it is in early access. Your first few messages are free, and there are no paid plans yet.',
        ],
      },
    ],
    cta: {
      label: 'Identify a plant',
      href: 'https://plantvisionapp.com/identify',
    },
  },
  {
    slug: 'promptnexus-build-ai-workflows-with-guardrails',
    title:
      'Unlocking AI Potential with PromptNexus: A No-Code Solution Builder',
    description:
      'PromptNexus is a revolutionary platform enabling both technical and non-technical personnel to incorporate AI into their systems without friction.',
    date: '2024-11-07',
    tags: ['AI', 'No-Code', 'Workflows', 'Automation', 'Observability'],
    excerpt:
      "In today's rapidly evolving digital landscape, businesses must continually adapt to emerging technologies. PromptNexus addresses the AI integration challenge through a no-code platform that empowers teams across departments.",
    author: 'Bilal Itani',
    readTimeMinutes: 6,
    productUrl: 'https://promptnexus.ai',
    productLabel: 'PromptNexus.ai',
    heroImage: '/images/promptnexus-logo.webp',
    canonicalPath: '/blog/promptnexus-build-ai-workflows-with-guardrails',
    ogTitle: 'PromptNexus: A No-Code Builder for AI Workflows',
    ogDescription:
      'Design, deploy, and observe AI-powered workflows without code. How PromptNexus brings AI to teams across an organization.',
    sections: [
      {
        paragraphs: [
          "In today's rapidly evolving digital landscape, businesses must continually adapt to emerging technologies to maintain competitiveness. AI integration into business processes has become an accelerating trend reshaping operations across industries.",
          'However, AI implementation often appears intimidating and technically demanding. PromptNexus addresses this challenge through a revolutionary platform enabling both technical and non-technical personnel to incorporate AI into their systems without friction.',
        ],
      },
      {
        heading: 'The Rising Impact of Artificial Intelligence',
        paragraphs: [
          "AI has become ubiquitous in daily life—from personalized e-commerce recommendations to smartphone virtual assistants. Organizations of all sizes recognize AI's transformative potential for driving operational efficiency, improving customer experiences, and generating actionable business intelligence for strategic decision-making.",
        ],
      },
      {
        heading: 'The Integration Challenge',
        paragraphs: [
          'Despite clear advantages, many organizations struggle to leverage AI due to perceived technical complexity and internal skill gaps. Designing, developing, and deploying AI solutions overwhelms many teams, particularly non-technical departments.',
        ],
        bullets: [
          'Slow iterations when prompts and tools live in code only.',
          'No visibility into workflow performance or failures.',
          'Risk of regressions without versioning and guardrails.',
          'Steep learning curve for AI implementation across teams.',
        ],
      },
      {
        heading: 'Why PromptNexus Stands Out',
        paragraphs: [
          'PromptNexus provides a no-code AI solution platform specifically designed to overcome these barriers. It empowers organizational personnel across departments to seamlessly integrate AI capabilities without requiring coding expertise.',
        ],
        bullets: [
          'User-Friendly Interface: Intuitive design requiring no coding or data science background, enabling marketing, HR, and other departments to implement AI solutions independently.',
          'Wide Range of Applications: Build diverse AI solutions including chatbots, recommendation engines, data analysis tools, and process automation systems.',
          'Time and Cost Efficient: A pragmatic, budget-conscious alternative that redirects resources previously allocated to expert hiring toward core business priorities.',
          'Seamless Integration: Enable AI solution integration within existing systems smoothly, enhancing rather than disrupting established workflows.',
          'Real-Time Updates: Continuously monitor implemented AI solution performance with real-time insights and optimization recommendations.',
        ],
      },
      {
        heading: 'Key Capabilities',
        bullets: [
          'No-code workflow canvas with reusable blocks for rapid prototyping.',
          'Versioned prompts and change history for safe rollbacks.',
          'Guardrails and safety checks to keep workflows on-brand and avoid risky responses.',
          'Observability dashboards to see what is running and where to improve.',
          'Human-in-the-loop approvals when you need control; full auto when you need speed.',
        ],
      },
      {
        heading: 'Getting Started',
        paragraphs: [
          'Drag in the building blocks you need, connect tools, set guardrails, and ship. Monitor runs and iterate quickly with change tracking.',
          'For organizations hesitant about AI adoption due to perceived complexity, PromptNexus serves as the ideal entry point. This platform democratizes AI across organizational roles and departments, substantially boosting productivity.',
        ],
      },
      {
        heading: 'Who It Is For',
        bullets: [
          'Product teams shipping AI features who need speed without sacrificing safety.',
          'Developers who want to iterate on prompts without redeploying code.',
          'Operations teams who need visibility into AI workflow performance and failures.',
          'Non-technical departments like marketing and HR looking to implement AI independently.',
          'Organizations seeking a budget-conscious path to AI adoption.',
        ],
      },
      {
        heading: 'The Way Forward',
        paragraphs: [
          "Organizations can embrace AI confidently through PromptNexus, unlocking possibilities and gaining competitive advantages in today's technology-driven marketplace. The platform represents your key to unlocking AI's transformative potential—no coding required.",
        ],
      },
    ],
    cta: { label: 'Visit PromptNexus', href: 'https://promptnexus.ai' },
  },
];

export const getPostBySlug = (slug: string) =>
  posts.find(post => post.slug === slug);
