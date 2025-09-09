/**
 * P37 (**) Calculate Euler's totient function phi(m) (improved).
 * See problem P34 for the definition of Euler's totient function. If the list of the prime factors of a number m is known in the form of problem P36 then the function phi(m) can be efficiently calculated as follows: Let [[p1,m1],[p2,m2],[p3,m3],...] be the list of prime factors (and their multiplicities) of a given number m. Then phi(m) can be calculated with the following formula:
 * phi(m) = (p1 - 1) * p1**(m1 - 1) * (p2 - 1) * p2**(m2 - 1) * (p3 - 1) * p3**(m3 - 1) * ...
 *
 * Note that a**b stands for the b'th power of a.
 *
 * TIME COMPLEXITY ANALYSIS:
 * - Overall: O(√n * log(n))
 * - primeFactorsMult: O(√n * log(n)) - dominates the complexity
 * - Main loop: O(k) where k = number of distinct prime factors (typically very small)
 *
 * Note: The log(log(n)) factor is omitted as it grows extremely slowly and is
 * typically absorbed into Big O notation for practical purposes.
 *
 * SPACE COMPLEXITY: O(k) where k = number of distinct prime factors
 */

import { primeFactorsMult } from "./P36_primeFactorsMult.ts";

export function totientPhiImproved(m: number): number {
  // O(1) - constant time edge case checks
  if (m <= 0) return 0; // edge case for 0 and negative numbers
  if (m === 1) return 1; // edge case for 1

  // O(√n * log(n)) - prime factorization dominates
  const factors = primeFactorsMult(m);
  let phi = 1;

  // O(k) where k = number of distinct prime factors
  // k is typically very small (e.g., for 2^32, k = 1; for 2*3*5*7*11*13*17*19, k = 8)
  for (let i = 0; i < factors.length; i++) {
    // O(1) - constant time arithmetic operations
    phi *= factors[i][0] - 1;
    phi *= Math.pow(factors[i][0], factors[i][1] - 1);
  }

  return phi;
}
