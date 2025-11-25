import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui';

const Header = () => (
  <header className="sticky top-0 z-50 w-full border-b border-white/60 bg-white/80 backdrop-blur-md">
    <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
      <div className="flex items-center gap-3">
        <Link href="/">
          <Image
            width={140}
            height={48}
            alt="Somnus Labs Logo"
            src="/images/somnuslabs-header-logo.png"
            priority
            className="h-10 w-auto"
          />
        </Link>
      </div>
      <nav className="hidden items-center gap-6 text-sm text-zinc-700 md:flex">
        <Link href="/#products" className="hover:text-indigo-600">
          Products
        </Link>
        <Link href="/#why" className="hover:text-indigo-600">
          Why Somnus
        </Link>
        <Link href="/#proof" className="hover:text-indigo-600">
          Results
        </Link>
        <Link href="/#contact" className="hover:text-indigo-600">
          Contact
        </Link>
        <Link href="/blog" className="hover:text-indigo-600">
          Blog
        </Link>
      </nav>
      <div className="flex items-center gap-3">
        <Link href="/#contact" className="hidden md:inline-block">
          <Button variant="ghost">Join waitlist</Button>
        </Link>
        <Link href="/#products" className="inline-block">
          <Button>See the products</Button>
        </Link>
      </div>
    </div>
  </header>
);

export { Header };
