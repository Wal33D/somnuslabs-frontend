import Image from 'next/image';
import Link from 'next/link';
import { CONTACT_EMAIL, siteProducts } from '@/lib/site';
import { LEGAL_NAV } from '@/lib/legal';

const footerProducts = [
  ...siteProducts.map(product => ({
    name: product.name,
    href: product.href,
  })),
  {
    name: 'OBD-Droid',
    href: 'https://github.com/Wal33D/OBD-Droid',
  },
];

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
          <a key={product.name} href={product.href} rel="noopener">
            {product.name}
          </a>
        ))}
        <Link href="/blog">Blog</Link>
        <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
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
