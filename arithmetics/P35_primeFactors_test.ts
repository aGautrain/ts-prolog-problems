import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { primeFactors } from "./P35_primeFactors.ts";

Deno.test("P35: primeFactors - standard cases", () => {
  assertEquals(primeFactors(315), [3, 3, 5, 7]);
  assertEquals(primeFactors(12), [2, 2, 3]);
  assertEquals(primeFactors(7), [7]);
  assertEquals(primeFactors(1), []);
});

Deno.test("P35: primeFactors - prime numbers", () => {
  assertEquals(primeFactors(2), [2]);
  assertEquals(primeFactors(3), [3]);
  assertEquals(primeFactors(5), [5]);
  assertEquals(primeFactors(7), [7]);
  assertEquals(primeFactors(11), [11]);
  assertEquals(primeFactors(13), [13]);
  assertEquals(primeFactors(17), [17]);
  assertEquals(primeFactors(19), [19]);
  assertEquals(primeFactors(23), [23]);
  assertEquals(primeFactors(29), [29]);
  assertEquals(primeFactors(31), [31]);
  assertEquals(primeFactors(37), [37]);
  assertEquals(primeFactors(41), [41]);
  assertEquals(primeFactors(43), [43]);
  assertEquals(primeFactors(47), [47]);
});

Deno.test("P35: primeFactors - powers of 2", () => {
  assertEquals(primeFactors(4), [2, 2]);
  assertEquals(primeFactors(8), [2, 2, 2]);
  assertEquals(primeFactors(16), [2, 2, 2, 2]);
  assertEquals(primeFactors(32), [2, 2, 2, 2, 2]);
  assertEquals(primeFactors(64), [2, 2, 2, 2, 2, 2]);
});

Deno.test("P35: primeFactors - powers of other primes", () => {
  assertEquals(primeFactors(9), [3, 3]);
  assertEquals(primeFactors(25), [5, 5]);
  assertEquals(primeFactors(27), [3, 3, 3]);
  assertEquals(primeFactors(49), [7, 7]);
  assertEquals(primeFactors(81), [3, 3, 3, 3]);
  assertEquals(primeFactors(125), [5, 5, 5]);
});

Deno.test("P35: primeFactors - composite numbers", () => {
  assertEquals(primeFactors(6), [2, 3]);
  assertEquals(primeFactors(10), [2, 5]);
  assertEquals(primeFactors(14), [2, 7]);
  assertEquals(primeFactors(15), [3, 5]);
  assertEquals(primeFactors(18), [2, 3, 3]);
  assertEquals(primeFactors(20), [2, 2, 5]);
  assertEquals(primeFactors(21), [3, 7]);
  assertEquals(primeFactors(22), [2, 11]);
  assertEquals(primeFactors(24), [2, 2, 2, 3]);
  assertEquals(primeFactors(26), [2, 13]);
  assertEquals(primeFactors(28), [2, 2, 7]);
  assertEquals(primeFactors(30), [2, 3, 5]);
  assertEquals(primeFactors(36), [2, 2, 3, 3]);
  assertEquals(primeFactors(42), [2, 3, 7]);
  assertEquals(primeFactors(45), [3, 3, 5]);
  assertEquals(primeFactors(48), [2, 2, 2, 2, 3]);
  assertEquals(primeFactors(50), [2, 5, 5]);
  assertEquals(primeFactors(54), [2, 3, 3, 3]);
  assertEquals(primeFactors(56), [2, 2, 2, 7]);
  assertEquals(primeFactors(60), [2, 2, 3, 5]);
  assertEquals(primeFactors(72), [2, 2, 2, 3, 3]);
  assertEquals(primeFactors(84), [2, 2, 3, 7]);
  assertEquals(primeFactors(90), [2, 3, 3, 5]);
  assertEquals(primeFactors(96), [2, 2, 2, 2, 2, 3]);
  assertEquals(primeFactors(100), [2, 2, 5, 5]);
});

Deno.test("P35: primeFactors - edge cases", () => {
  assertEquals(primeFactors(1), []);
  assertEquals(primeFactors(0), []);
  assertEquals(primeFactors(-1), []);
  assertEquals(primeFactors(-12), []);
});

Deno.test("P35: primeFactors - larger numbers", () => {
  assertEquals(primeFactors(1000), [2, 2, 2, 5, 5, 5]);
  assertEquals(primeFactors(1001), [7, 11, 13]);
  assertEquals(primeFactors(1024), [2, 2, 2, 2, 2, 2, 2, 2, 2, 2]);
  assertEquals(primeFactors(1080), [2, 2, 2, 3, 3, 3, 5]);
  assertEquals(primeFactors(1155), [3, 5, 7, 11]);
  assertEquals(primeFactors(1200), [2, 2, 2, 2, 3, 5, 5]);
  assertEquals(primeFactors(1260), [2, 2, 3, 3, 5, 7]);
  assertEquals(primeFactors(1320), [2, 2, 2, 3, 5, 11]);
  assertEquals(primeFactors(1386), [2, 3, 3, 7, 11]);
  assertEquals(primeFactors(1440), [2, 2, 2, 2, 2, 3, 3, 5]);
  assertEquals(primeFactors(1500), [2, 2, 3, 5, 5, 5]);
});
