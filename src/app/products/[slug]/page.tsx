import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ProductArticle } from '@/components/site/ProductArticle';
import {
  catalog,
  getProduct,
  productDescription,
  productPath,
  productTitle,
} from '@/lib/products';
import { buildMetadata } from '@/lib/site';

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return catalog.map(product => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};

  return buildMetadata({
    title: productTitle(product),
    description: productDescription(product),
    path: productPath(product),
    keywords: [product.name, 'Somnus Labs'],
  });
}

export default async function ProductPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  return <ProductArticle product={product} />;
}
