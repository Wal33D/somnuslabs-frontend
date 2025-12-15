import { posts } from '@/lib/posts';

const baseUrl = 'https://somnuslabs.ai';

export async function GET() {
  const feed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Somnus Labs Blog</title>
    <link>${baseUrl}</link>
    <description>AI products that ship faster, learn faster, and stay on-brand. Insights from the team behind MagicReply, PlantVision, CMAForge, CandyComp, and PromptNexus.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${baseUrl}/rss.xml" rel="self" type="application/rss+xml"/>
    <image>
      <url>${baseUrl}/images/logo-with-text.png</url>
      <title>Somnus Labs Blog</title>
      <link>${baseUrl}</link>
    </image>
    ${posts
      .map(
        post => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <link>${baseUrl}${post.canonicalPath}</link>
      <guid isPermaLink="true">${baseUrl}${post.canonicalPath}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description><![CDATA[${post.description}]]></description>
      <author>hello@somnuslabs.ai (${post.author})</author>
      ${post.tags.map(tag => `<category>${tag}</category>`).join('\n      ')}
      ${
        post.heroImage
          ? `<enclosure url="${post.heroImage}" type="image/png"/>`
          : ''
      }
    </item>`,
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(feed, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
