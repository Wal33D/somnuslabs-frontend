'use client';
import { FC, FormEvent, useCallback, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui';

const SubscribeForm: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = useCallback(
    async (event: FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const emailValue = data.get('email')?.toString().trim();
      const nameValue = data.get('name')?.toString().trim();
      const companyValue = data.get('company')?.toString() ?? '';

      if (!emailValue || !/\S+@\S+\.\S+/.test(emailValue)) {
        setError('Please enter a valid email address.');
        setStatus('error');
        return;
      }

      setPending(true);
      setError(null);
      setMessage(null);
      setStatus('idle');

      try {
        const response = await fetch('/api/subscribeUser', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            email: emailValue,
            name: nameValue,
            company: companyValue,
          }),
          cache: 'no-store',
        });

        if (!response.ok) {
          const err = await response.json();
          throw new Error(
            err?.error || 'Something went wrong. Please try again.',
          );
        }

        setMessage('Thank you for subscribing!');
        setStatus('success');
        setName('');
        setEmail('');
      } catch (err: unknown) {
        const message =
          err instanceof Error
            ? err.message
            : 'Something went wrong. Please try again.';
        setStatus('error');
        setError(message);
      } finally {
        setPending(false);
      }
    },
    [],
  );

  return (
    <div className="flex flex-col items-center justify-center pt-4 w-full max-w-xl">
      <div className="w-full rounded-2xl border border-white/80 bg-white/90 p-6 shadow-card backdrop-blur">
        <form onSubmit={handleSubmit} noValidate className="space-y-4">
          <div className="space-y-2">
            <label
              className="block text-sm font-semibold text-zinc-800"
              htmlFor="email">
              Email
            </label>
            <input
              disabled={pending}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-zinc-800 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:text-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              id="email"
              name="email"
              autoComplete="email"
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
              aria-invalid={status === 'error'}
              aria-describedby={
                status === 'error' ? 'subscribe-error' : undefined
              }
            />
          </div>

          <div className="space-y-2">
            <label
              className="block text-sm font-semibold text-zinc-800"
              htmlFor="name">
              Name (optional)
            </label>
            <input
              disabled={pending}
              className="w-full rounded-lg border border-zinc-200 bg-white px-3 py-2 text-zinc-800 shadow-sm outline-none transition focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 disabled:text-gray-500 disabled:bg-gray-100 disabled:cursor-not-allowed"
              id="name"
              name="name"
              autoComplete="name"
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          {/* Left empty by people; bots that fill every field are ignored. */}
          <div
            aria-hidden="true"
            className="absolute -left-[9999px] h-px w-px overflow-hidden">
            <label htmlFor="company">Company</label>
            <input
              id="company"
              name="company"
              type="text"
              tabIndex={-1}
              autoComplete="off"
              defaultValue=""
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <Button pending={pending} type="submit" className="w-full">
              Subscribe
            </Button>
          </div>
        </form>
        {message && status === 'success' && (
          <p
            role="status"
            className="mt-3 text-center text-sm font-semibold text-green-700">
            {message}
          </p>
        )}
        {error && status === 'error' && (
          <p
            id="subscribe-error"
            role="alert"
            className="mt-3 text-center text-sm font-semibold text-red-700">
            {error}
          </p>
        )}
        <p className="mt-3 text-center text-xs text-muted-foreground">
          We use your email only for the notes you asked for.{' '}
          <Link href="/privacy" className="font-semibold text-indigo-700">
            Privacy Policy
          </Link>
        </p>
      </div>
    </div>
  );
};

export { SubscribeForm };
