import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { primeFactorsMult } from "./P36_primeFactorsMult.ts";

Deno.test("P36: primeFactorsMult - standard cases", () => {
  assertEquals(primeFactorsMult(315), [
    [3, 2],
    [5, 1],
    [7, 1],
  ]);
  assertEquals(primeFactorsMult(12), [
    [2, 2],
    [3, 1],
  ]);
  assertEquals(primeFactorsMult(7), [[7, 1]]);
  assertEquals(primeFactorsMult(1), []);
});

Deno.test("P36: primeFactorsMult - prime numbers", () => {
  assertEquals(primeFactorsMult(2), [[2, 1]]);
  assertEquals(primeFactorsMult(3), [[3, 1]]);
  assertEquals(primeFactorsMult(5), [[5, 1]]);
  assertEquals(primeFactorsMult(7), [[7, 1]]);
  assertEquals(primeFactorsMult(11), [[11, 1]]);
  assertEquals(primeFactorsMult(13), [[13, 1]]);
  assertEquals(primeFactorsMult(17), [[17, 1]]);
  assertEquals(primeFactorsMult(19), [[19, 1]]);
  assertEquals(primeFactorsMult(23), [[23, 1]]);
  assertEquals(primeFactorsMult(29), [[29, 1]]);
  assertEquals(primeFactorsMult(31), [[31, 1]]);
  assertEquals(primeFactorsMult(37), [[37, 1]]);
  assertEquals(primeFactorsMult(41), [[41, 1]]);
  assertEquals(primeFactorsMult(43), [[43, 1]]);
  assertEquals(primeFactorsMult(47), [[47, 1]]);
});

Deno.test("P36: primeFactorsMult - powers of 2", () => {
  assertEquals(primeFactorsMult(4), [[2, 2]]);
  assertEquals(primeFactorsMult(8), [[2, 3]]);
  assertEquals(primeFactorsMult(16), [[2, 4]]);
  assertEquals(primeFactorsMult(32), [[2, 5]]);
  assertEquals(primeFactorsMult(64), [[2, 6]]);
  assertEquals(primeFactorsMult(128), [[2, 7]]);
  assertEquals(primeFactorsMult(256), [[2, 8]]);
  assertEquals(primeFactorsMult(512), [[2, 9]]);
  assertEquals(primeFactorsMult(1024), [[2, 10]]);
});

Deno.test("P36: primeFactorsMult - powers of other primes", () => {
  assertEquals(primeFactorsMult(9), [[3, 2]]);
  assertEquals(primeFactorsMult(25), [[5, 2]]);
  assertEquals(primeFactorsMult(27), [[3, 3]]);
  assertEquals(primeFactorsMult(49), [[7, 2]]);
  assertEquals(primeFactorsMult(81), [[3, 4]]);
  assertEquals(primeFactorsMult(125), [[5, 3]]);
  assertEquals(primeFactorsMult(169), [[13, 2]]);
  assertEquals(primeFactorsMult(243), [[3, 5]]);
  assertEquals(primeFactorsMult(343), [[7, 3]]);
  assertEquals(primeFactorsMult(625), [[5, 4]]);
});

Deno.test("P36: primeFactorsMult - composite numbers", () => {
  assertEquals(primeFactorsMult(6), [
    [2, 1],
    [3, 1],
  ]);
  assertEquals(primeFactorsMult(10), [
    [2, 1],
    [5, 1],
  ]);
  assertEquals(primeFactorsMult(14), [
    [2, 1],
    [7, 1],
  ]);
  assertEquals(primeFactorsMult(15), [
    [3, 1],
    [5, 1],
  ]);
  assertEquals(primeFactorsMult(18), [
    [2, 1],
    [3, 2],
  ]);
  assertEquals(primeFactorsMult(20), [
    [2, 2],
    [5, 1],
  ]);
  assertEquals(primeFactorsMult(21), [
    [3, 1],
    [7, 1],
  ]);
  assertEquals(primeFactorsMult(22), [
    [2, 1],
    [11, 1],
  ]);
  assertEquals(primeFactorsMult(24), [
    [2, 3],
    [3, 1],
  ]);
  assertEquals(primeFactorsMult(26), [
    [2, 1],
    [13, 1],
  ]);
  assertEquals(primeFactorsMult(28), [
    [2, 2],
    [7, 1],
  ]);
  assertEquals(primeFactorsMult(30), [
    [2, 1],
    [3, 1],
    [5, 1],
  ]);
  assertEquals(primeFactorsMult(36), [
    [2, 2],
    [3, 2],
  ]);
  assertEquals(primeFactorsMult(42), [
    [2, 1],
    [3, 1],
    [7, 1],
  ]);
  assertEquals(primeFactorsMult(45), [
    [3, 2],
    [5, 1],
  ]);
  assertEquals(primeFactorsMult(48), [
    [2, 4],
    [3, 1],
  ]);
  assertEquals(primeFactorsMult(50), [
    [2, 1],
    [5, 2],
  ]);
  assertEquals(primeFactorsMult(54), [
    [2, 1],
    [3, 3],
  ]);
  assertEquals(primeFactorsMult(56), [
    [2, 3],
    [7, 1],
  ]);
  assertEquals(primeFactorsMult(60), [
    [2, 2],
    [3, 1],
    [5, 1],
  ]);
  assertEquals(primeFactorsMult(72), [
    [2, 3],
    [3, 2],
  ]);
  assertEquals(primeFactorsMult(84), [
    [2, 2],
    [3, 1],
    [7, 1],
  ]);
  assertEquals(primeFactorsMult(90), [
    [2, 1],
    [3, 2],
    [5, 1],
  ]);
  assertEquals(primeFactorsMult(96), [
    [2, 5],
    [3, 1],
  ]);
  assertEquals(primeFactorsMult(100), [
    [2, 2],
    [5, 2],
  ]);
});

Deno.test("P36: primeFactorsMult - edge cases", () => {
  assertEquals(primeFactorsMult(1), []);
  assertEquals(primeFactorsMult(0), []);
  assertEquals(primeFactorsMult(-1), []);
  assertEquals(primeFactorsMult(-12), []);
});

Deno.test("P36: primeFactorsMult - larger numbers", () => {
  assertEquals(primeFactorsMult(1000), [
    [2, 3],
    [5, 3],
  ]);
  assertEquals(primeFactorsMult(1001), [
    [7, 1],
    [11, 1],
    [13, 1],
  ]);
  assertEquals(primeFactorsMult(1024), [[2, 10]]);
  assertEquals(primeFactorsMult(1080), [
    [2, 3],
    [3, 3],
    [5, 1],
  ]);
  assertEquals(primeFactorsMult(1155), [
    [3, 1],
    [5, 1],
    [7, 1],
    [11, 1],
  ]);
  assertEquals(primeFactorsMult(1200), [
    [2, 4],
    [3, 1],
    [5, 2],
  ]);
  assertEquals(primeFactorsMult(1260), [
    [2, 2],
    [3, 2],
    [5, 1],
    [7, 1],
  ]);
  assertEquals(primeFactorsMult(1320), [
    [2, 3],
    [3, 1],
    [5, 1],
    [11, 1],
  ]);
  assertEquals(primeFactorsMult(1386), [
    [2, 1],
    [3, 2],
    [7, 1],
    [11, 1],
  ]);
  assertEquals(primeFactorsMult(1440), [
    [2, 5],
    [3, 2],
    [5, 1],
  ]);
  assertEquals(primeFactorsMult(1500), [
    [2, 2],
    [3, 1],
    [5, 3],
  ]);
  assertEquals(primeFactorsMult(1800), [
    [2, 3],
    [3, 2],
    [5, 2],
  ]);
  assertEquals(primeFactorsMult(2100), [
    [2, 2],
    [3, 1],
    [5, 2],
    [7, 1],
  ]);
  assertEquals(primeFactorsMult(2310), [
    [2, 1],
    [3, 1],
    [5, 1],
    [7, 1],
    [11, 1],
  ]);
  assertEquals(primeFactorsMult(2520), [
    [2, 3],
    [3, 2],
    [5, 1],
    [7, 1],
  ]);
  assertEquals(primeFactorsMult(3000), [
    [2, 3],
    [3, 1],
    [5, 3],
  ]);
});
