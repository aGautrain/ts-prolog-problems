/**
 * P35 (**) Determine the prime factors of a given positive integer.
 * Construct a flat list containing the prime factors in ascending order.
 * Example:
 * ?- prime_factors(315, L).
 * L = [3,3,5,7]
 */

// Asked for a textual hint on how to proceed :)

// Hint: Start with the smallest prime (2) and divide n by it as many times as possible.
// Then move to the next potential prime factor (3, then 5, 7, 9, 11, etc.)
// Continue until n becomes 1 or you've checked all factors up to sqrt(n).
//
// Algorithm outline:
// 1. Handle edge case: if n <= 1, return empty array
// 2. Start with factor = 2
// 3. While factor * factor <= n:
//    - While n is divisible by factor, add factor to result and divide n by factor
//    - Increment factor to next potential prime
// 4. If n > 1 after the loop, n itself is a prime factor
//
// Example: 315 = 3 × 3 × 5 × 7
// - Start with 2: 315 not divisible by 2
// - Try 3: 315 ÷ 3 = 105, add 3 to result
// - Try 3 again: 105 ÷ 3 = 35, add 3 to result
// - Try 3 again: 35 not divisible by 3
// - Try 4: skip (not prime)
// - Try 5: 35 ÷ 5 = 7, add 5 to result
// - Try 6: 7 not divisible by 6, and 6² > 7, so stop
// - 7 > 1, so add 7 to result
// Result: [3, 3, 5, 7]

import { isPrime } from "./P31_isPrime.ts";

export function primeFactors(n: number): number[] {
  if (n <= 1) return [];

  let factorProgress = n;
  const factors = [];

  for (let i = 0; i <= Math.ceil(Math.sqrt(n)); i++) {
    if (isPrime(i)) {
      while (factorProgress % i == 0) {
        factorProgress /= i;
        factors.push(i);
      }
    }
  }

  if (factorProgress > 1) factors.push(factorProgress);

  return factors;
}
