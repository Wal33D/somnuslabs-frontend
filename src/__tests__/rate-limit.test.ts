import { createRateLimiter } from '@/lib/rateLimit';

describe('rate limiter', () => {
  test('allows the limit, refuses the next, and forgets after the window', () => {
    const limiter = createRateLimiter(2, 1000);

    expect(limiter.isLimited('a', 0)).toBe(false);
    expect(limiter.isLimited('a', 10)).toBe(false);
    expect(limiter.isLimited('a', 20)).toBe(true);
    expect(limiter.isLimited('b', 20)).toBe(false);
    expect(limiter.isLimited('a', 1011)).toBe(false);
  });

  test('refused hits do not extend the window', () => {
    const limiter = createRateLimiter(1, 1000);

    expect(limiter.isLimited('a', 0)).toBe(false);
    expect(limiter.isLimited('a', 500)).toBe(true);
    expect(limiter.isLimited('a', 1000)).toBe(false);
  });

  test('keeps at most maxTracked keys, dropping the least recent', () => {
    const limiter = createRateLimiter(1, 1000, 2);

    limiter.isLimited('a', 0);
    limiter.isLimited('b', 0);
    limiter.isLimited('c', 0);

    // 'a' was dropped, so it starts fresh; 'c' is still counted.
    expect(limiter.isLimited('a', 1)).toBe(false);
    expect(limiter.isLimited('c', 1)).toBe(true);
  });

  test('reset forgets everyone', () => {
    const limiter = createRateLimiter(1, 1000);
    limiter.isLimited('a', 0);
    limiter.reset();
    expect(limiter.isLimited('a', 1)).toBe(false);
  });
});
