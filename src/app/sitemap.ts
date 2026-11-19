import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';
import { SITE_UPDATED, SITE_URL } from '@/lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const latestPost = posts
    .map(post => post.updated || post.date)
    .sort()
    .pop();

  const routes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}/`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: latestPost,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ];

  posts.forEach(post => {
    routes.push({
      url: `${SITE_URL}${post.canonicalPath}`,
      lastModified: post.updated || post.date,
      changeFrequency: 'yearly',
      priority: 0.5,
    });
  });

  return routes;
}
