/**
 * P32 (**) Determine the greatest common divisor of two positive integer numbers.
 * Use Euclid's algorithm.
 * Example:
 * ?- gcd(36, 63, G).
 * G = 9
 * Define gcd as an arithmetic function; so you can use it like this:
 * ?- G is gcd(36,63).
 * G = 9
 */

export function gcd(a: number, b: number): number {
  if (a === 0) return b;
  if (b === 0) return a;

  const n = Math.min(a, b);
  let g = 0;

  for (let i = 1; i <= n; i++) {
    if (a % i === 0 && b % i === 0) g = i;
  }

  return g;
}
