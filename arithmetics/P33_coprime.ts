/**
 * P33 (*) Determine whether two positive integer numbers are coprime.
 * Two numbers are coprime if their greatest common divisor equals 1.
 * Example:
 * ?- coprime(35, 64).
 * Yes
 */

import { gcd } from "./P32_gcd.ts";

export function coprime(a: number, b: number): boolean {
  return gcd(a, b) === 1;
}
