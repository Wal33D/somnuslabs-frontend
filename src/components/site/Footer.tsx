import Image from 'next/image';
import Link from 'next/link';
import { catalog, productPath } from '@/lib/products';
import { LEGAL_NAV } from '@/lib/legal';

const footerProducts = catalog.map(product => ({
  name: product.name,
  href: productPath(product),
}));

const Footer = () => (
  <footer className="relative mt-12 w-full border-t border-white/70 bg-gradient-to-t from-indigo-100/70 to-white/40">
    <div className="mx-auto flex w-full max-w-6xl flex-col items-center gap-4 px-4 py-8 text-center sm:px-6 lg:px-8">
      <Image
        width={150}
        height={67}
        alt="Somnus Labs"
        src="/images/somnuslabs-header-logo.png"
        className="h-10 w-auto"
      />
      <nav
        aria-label="Products"
        className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
        {footerProducts.map(product => (
          <Link key={product.name} href={product.href}>
            {product.name}
          </Link>
        ))}
        <Link href="/blog">Blog</Link>
        <Link href="/contact">Contact</Link>
      </nav>
      <nav
        aria-label="Legal"
        className="flex flex-wrap justify-center gap-x-5 gap-y-2 text-sm">
        {LEGAL_NAV.map(link => (
          <Link key={link.href} href={link.href}>
            {link.label}
          </Link>
        ))}
      </nav>
      <p className="text-muted-foreground">
        &copy; 2023 - {new Date().getFullYear()} Somnus Labs. All rights
        reserved.
      </p>
    </div>
  </footer>
);

export { Footer };
