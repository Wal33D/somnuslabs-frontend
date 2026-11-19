import Image from 'next/image';
import Link from 'next/link';
import { ButtonLink } from '@/components/ui';

const navLinks = [
  { href: '/#products', label: 'Products' },
  { href: '/#why', label: 'Why Somnus' },
  { href: '/#about', label: 'About' },
  { href: '/#contact', label: 'Contact' },
  { href: '/blog', label: 'Blog' },
];

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-white/60 bg-white/90 backdrop-blur-md">
    <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-3 px-4 py-3 sm:px-6 lg:px-8">
      <Link
        href="/"
        aria-label="Somnus Labs home"
        className="shrink-0 transition-opacity hover:opacity-80">
        <Image
          width={140}
          height={63}
          alt="Somnus Labs"
          src="/images/somnuslabs-header-logo.png"
          priority
          className="h-9 w-auto sm:h-10"
        />
      </Link>
      <nav
        aria-label="Main"
        className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
        {navLinks.map(link => (
          <Link
            key={link.href}
            href={link.href}
            className="font-medium text-zinc-700 hover:text-indigo-700">
            {link.label}
          </Link>
        ))}
      </nav>
      <div className="flex items-center gap-2">
        <ButtonLink href="/#products" size="sm" className="whitespace-nowrap">
          See the products
        </ButtonLink>
        <details className="relative md:hidden">
          <summary
            aria-label="Menu"
            className="flex h-9 w-9 cursor-pointer list-none items-center justify-center rounded-lg border-2 border-indigo-600 text-indigo-700 [&::-webkit-details-marker]:hidden">
            <svg
              aria-hidden="true"
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </summary>
          <nav
            aria-label="Mobile"
            className="absolute right-0 mt-2 flex w-48 flex-col rounded-xl border border-zinc-200 bg-white p-2 shadow-hover">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="rounded-lg px-3 py-2 font-medium text-zinc-800 hover:bg-indigo-50">
                {link.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </div>
  </header>
);

export { Header };
