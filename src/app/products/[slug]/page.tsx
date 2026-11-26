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
  params: { slug: string };
};

export function generateStaticParams() {
  return catalog.map(product => ({ slug: product.slug }));
}

export function generateMetadata({ params }: PageProps): Metadata {
  const product = getProduct(params.slug);
  if (!product) return {};

  return buildMetadata({
    title: productTitle(product),
    description: productDescription(product),
    path: productPath(product),
    keywords: [product.name, 'Somnus Labs'],
  });
}

export default function ProductPage({ params }: PageProps) {
  const product = getProduct(params.slug);
  if (!product) notFound();

  return <ProductArticle product={product} />;
}
