/** @jest-environment node */
import { posts } from '@/lib/posts';
import { HOME_DESCRIPTION, HOME_TITLE, siteProducts } from '@/lib/site';
import robots from '@/app/robots';
import sitemap from '@/app/sitemap';

const pages = [
  { name: 'home', title: HOME_TITLE, description: HOME_DESCRIPTION },
  ...posts.map(post => ({
    name: post.slug,
    title: post.ogTitle || post.title,
    description: post.ogDescription || post.description,
  })),
];

describe('titles and descriptions', () => {
  test.each(pages)('$name: title <= 60, description <= 160', page => {
    expect(page.title.length).toBeLessThanOrEqual(60);
    expect(page.description.length).toBeLessThanOrEqual(160);
    expect(page.description.length).toBeGreaterThan(50);
  });

  test('titles and descriptions are unique', () => {
    expect(new Set(pages.map(p => p.title)).size).toBe(pages.length);
    expect(new Set(pages.map(p => p.description)).size).toBe(pages.length);
  });
});

describe('robots.txt', () => {
  test('does not block /_next/ and names the sitemap', () => {
    const result = robots();
    const rules = Array.isArray(result.rules) ? result.rules : [result.rules];
    rules.forEach(rule => {
      expect([rule.disallow ?? []].flat()).not.toContain('/_next/');
    });
    expect(result.sitemap).toBe('https://www.somnuslabs.com/sitemap.xml');
  });
});

describe('sitemap.xml', () => {
  test('every entry has a real lastmod date, not the build time', () => {
    const entries = sitemap();
    expect(entries.length).toBe(posts.length + 2);
    entries.forEach(entry => {
      expect(String(entry.lastModified)).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });
  });
});

describe('content', () => {
  test('no post mentions the retired PlantVision.ai domain', () => {
    expect(JSON.stringify(posts)).not.toMatch(/plantvision\.ai/i);
  });

  test('the five products are listed with their own live sites', () => {
    expect(siteProducts.map(p => p.href)).toEqual([
      'https://deskworkapp.com',
      'https://magicreply.ai',
      'https://cmaforge.com',
      'https://arvanalyzer.com',
      'https://plantvisionapp.com',
    ]);
  });
});
