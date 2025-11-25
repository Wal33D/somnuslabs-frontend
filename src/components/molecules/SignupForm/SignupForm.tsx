'use client';
import { FC, FormEvent, useCallback, useState } from 'react';
import { Button } from '@/components/ui';

const SubscribeForm: FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const [pending, setPending] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = useCallback((event: FormEvent<HTMLFormElement>) => {
    const submitForm = async () => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      const formattedFormData: { [key: string]: FormDataEntryValue } = {};

      data.forEach((entry, key) => {
        formattedFormData[key] = entry;
      });

      const emailValue = formattedFormData.email?.toString().trim();
      const nameValue = formattedFormData.name?.toString().trim();

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
          body: JSON.stringify({ email: emailValue, name: nameValue }),
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
      } catch (err: any) {
        setStatus('error');
        setError(err?.message || 'Something went wrong. Please try again.');
      } finally {
        setPending(false);
      }
    };

    submitForm();
  }, []);

  return (
    <div className="flex flex-col items-center justify-center pt-4 w-full max-w-xl">
      <div className="w-full rounded-2xl border border-white/80 bg-white/90 p-6 shadow-card backdrop-blur">
        <form onSubmit={handleSubmit} className="space-y-4">
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
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
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
              type="text"
              placeholder="Your name"
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>

          <div className="flex items-center justify-between gap-3">
            <Button pending={pending} type="submit" className="w-full">
              Subscribe
            </Button>
          </div>
        </form>
        {message && status === 'success' && (
          <p className="mt-3 text-center text-sm font-semibold text-green-600">
            {message}
          </p>
        )}
        {error && status === 'error' && (
          <p className="mt-3 text-center text-sm font-semibold text-red-600">
            {error}
          </p>
        )}
      </div>
    </div>
  );
};

export { SubscribeForm };
