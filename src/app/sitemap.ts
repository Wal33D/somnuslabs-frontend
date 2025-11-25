import type { MetadataRoute } from 'next';
import { posts } from '@/lib/posts';

const baseUrl = 'https://somnuslabs.ai';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes: MetadataRoute.Sitemap = [
    { url: `${baseUrl}/`, lastModified: new Date() },
    { url: `${baseUrl}/blog`, lastModified: new Date() },
  ];

  posts.forEach(post => {
    routes.push({
      url: `${baseUrl}${post.canonicalPath}`,
      lastModified: new Date(),
    });
  });

  return routes;
}
