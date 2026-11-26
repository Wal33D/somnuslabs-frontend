import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';
import { LEGAL_PAGES, LEGAL_UPDATED } from '@/lib/legal';
import { catalog, productPath } from '@/lib/products';
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
    {
      url: `${SITE_URL}/contact`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'yearly',
      priority: 0.6,
    },
    ...LEGAL_PAGES.map(page => ({
      url: `${SITE_URL}${page.path}`,
      lastModified: LEGAL_UPDATED,
      changeFrequency: 'yearly' as const,
      priority: 0.4,
    })),
    ...catalog.map(product => ({
      url: `${SITE_URL}${productPath(product)}`,
      lastModified: SITE_UPDATED,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
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
