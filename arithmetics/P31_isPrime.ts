/**
 * P31 (**) Determine whether a given integer number is prime.
 * Example:
 * ?- is_prime(7).
 * Yes
 */

export function isPrime(n: number): boolean {
  if (n <= 1) return false; // excluding edge cases (1, 0, negative numbers)

  for (let i = 2; i < n; i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return true;
}
