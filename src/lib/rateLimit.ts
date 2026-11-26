// Best-effort sliding-window limit kept in memory. Each serverless instance has
// its own window, so this slows a script down; it is not a hard global cap.
export function createRateLimiter(
  limit: number,
  windowMs: number,
  maxTracked = 5_000,
) {
  const recentByKey = new Map<string, number[]>();

  return {
    // True when this key already used its `limit` hits in the window; a hit
    // that is allowed is counted.
    isLimited(key: string, now: number = Date.now()): boolean {
      const recent = (recentByKey.get(key) ?? []).filter(
        t => now - t < windowMs,
      );
      if (recent.length >= limit) {
        recentByKey.set(key, recent);
        return true;
      }
      recent.push(now);
      // Re-insert so the Map's order stays least-recently-used first.
      recentByKey.delete(key);
      recentByKey.set(key, recent);
      if (recentByKey.size > maxTracked) {
        const oldest = recentByKey.keys().next().value;
        if (oldest !== undefined) recentByKey.delete(oldest);
      }
      return false;
    },
    reset() {
      recentByKey.clear();
    },
  };
}
