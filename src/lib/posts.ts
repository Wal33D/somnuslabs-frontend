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
    author: 'Waleed Judah',
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
    author: 'Waleed Judah',
    readTimeMinutes: 4,
    productUrl: 'https://plantvision.ai',
    productLabel: 'PlantVision.ai',
    heroImage:
      'https://res.cloudinary.com/dkfrhzkaf/image/upload/plantvision.ai/pv.webp',
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
      'Generate agent-grade comparative market analyses in seconds with CandyComp—branded, defensible, and ready to share.',
    date: '2024-11-05',
    tags: ['Real Estate', 'AI', 'Analytics'],
    excerpt:
      'CandyComp lets agents, buyers, and sellers generate CMAs in seconds, tweak assumptions, and share polished branded reports with live market stats.',
    author: 'Waleed Judah',
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
          'Agents, buyers, and sellers need defensible CMAs quickly, without sacrificing quality. CandyComp makes comps sweet and simple, while keeping pro-level controls for the people who need them.',
        ],
      },
      {
        heading: 'What CandyComp solves',
        bullets: [
          'Manual CMA creation that takes hours and delays client follow-up.',
          'Generic outputs that are hard to defend with clients.',
          'Reports that do not match your brand or look polished.',
          'Out-of-date market data that erodes trust.',
        ],
      },
      {
        heading: 'Key capabilities',
        bullets: [
          'Instant comparative market analyses with solid defaults and live market stats.',
          'Tweak assumptions (filters, weighting, excluded comps) and regenerate quickly.',
          'Professional, branded PDF and link-based reports ready to share with clients.',
          'Real-time MLS and public record data refreshes so your comps stay current.',
          'Roadmap: native mobile app and Chrome extension to run comps from anywhere.',
        ],
      },
      {
        heading: 'Getting started',
        paragraphs: [
          'Enter a property, review the generated comps, adjust assumptions if needed, and export or share a branded report—all in minutes.',
          'Use the free tier for quick valuations; upgrade to Pro for unlimited CMAs, detailed market reports, and PDF exports.',
        ],
      },
      {
        heading: 'Who it is for',
        bullets: [
          'Agents and brokers who need client-ready CMAs fast.',
          'Buyers and sellers who want confident pricing guidance.',
          'Investors evaluating multiple properties with consistent, repeatable analysis.',
        ],
      },
    ],
    cta: { label: 'Visit CandyComp', href: 'https://candycomp.com' },
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
    ogTitle:
      'Unlocking AI Potential with PromptNexus: A No-Code Solution Builder',
    ogDescription:
      'Design, deploy, and observe AI-powered workflows without code. PromptNexus democratizes AI across organizational roles and departments.',
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
