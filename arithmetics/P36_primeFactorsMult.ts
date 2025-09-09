/**
 * P36 (**) Determine the prime factors of a given positive integer (2).
 * Construct a list containing the prime factors and their multiplicity.
 * Example:
 * ?- prime_factors_mult(315, L).
 * L = [[3,2],[5,1],[7,1]]
 * Hint: The problem is similar to problem P10.
 */

import { primeFactors } from "./P35_primeFactors.ts";
import { packConsecutives } from "../lists/P09_packConsecutives.ts";

export function primeFactorsMult(n: number): [number, number][] {
  const factors = primeFactors(n);
  const factorsPacked = packConsecutives(factors);

  return factorsPacked.map((factor: number[]) => [factor[0], factor.length]);
}
