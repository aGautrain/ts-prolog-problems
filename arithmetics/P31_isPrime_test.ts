import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { isPrime } from "./P31_isPrime.ts";

Deno.test("P31: isPrime - small prime numbers", () => {
  assertEquals(isPrime(2), true);
  assertEquals(isPrime(3), true);
  assertEquals(isPrime(5), true);
  assertEquals(isPrime(7), true);
  assertEquals(isPrime(11), true);
  assertEquals(isPrime(13), true);
  assertEquals(isPrime(17), true);
  assertEquals(isPrime(19), true);
  assertEquals(isPrime(23), true);
  assertEquals(isPrime(29), true);
});

Deno.test("P31: isPrime - small composite numbers", () => {
  assertEquals(isPrime(4), false);
  assertEquals(isPrime(6), false);
  assertEquals(isPrime(8), false);
  assertEquals(isPrime(9), false);
  assertEquals(isPrime(10), false);
  assertEquals(isPrime(12), false);
  assertEquals(isPrime(14), false);
  assertEquals(isPrime(15), false);
  assertEquals(isPrime(16), false);
  assertEquals(isPrime(18), false);
  assertEquals(isPrime(20), false);
  assertEquals(isPrime(21), false);
  assertEquals(isPrime(22), false);
  assertEquals(isPrime(24), false);
  assertEquals(isPrime(25), false);
  assertEquals(isPrime(26), false);
  assertEquals(isPrime(27), false);
  assertEquals(isPrime(28), false);
});

Deno.test("P31: isPrime - edge cases", () => {
  assertEquals(isPrime(1), false);
  assertEquals(isPrime(0), false);
  assertEquals(isPrime(-1), false);
  assertEquals(isPrime(-2), false);
  assertEquals(isPrime(-3), false);
  assertEquals(isPrime(-4), false);
  assertEquals(isPrime(-5), false);
});

Deno.test("P31: isPrime - larger prime numbers", () => {
  assertEquals(isPrime(97), true);
  assertEquals(isPrime(101), true);
  assertEquals(isPrime(103), true);
  assertEquals(isPrime(107), true);
  assertEquals(isPrime(109), true);
  assertEquals(isPrime(113), true);
  assertEquals(isPrime(127), true);
  assertEquals(isPrime(131), true);
  assertEquals(isPrime(137), true);
  assertEquals(isPrime(139), true);
  assertEquals(isPrime(149), true);
  assertEquals(isPrime(151), true);
  assertEquals(isPrime(157), true);
  assertEquals(isPrime(163), true);
  assertEquals(isPrime(167), true);
  assertEquals(isPrime(173), true);
  assertEquals(isPrime(179), true);
  assertEquals(isPrime(181), true);
  assertEquals(isPrime(191), true);
  assertEquals(isPrime(193), true);
  assertEquals(isPrime(197), true);
  assertEquals(isPrime(199), true);
});

Deno.test("P31: isPrime - perfect squares", () => {
  assertEquals(isPrime(4), false); // 2^2
  assertEquals(isPrime(9), false); // 3^2
  assertEquals(isPrime(16), false); // 4^2
  assertEquals(isPrime(25), false); // 5^2
  assertEquals(isPrime(36), false); // 6^2
  assertEquals(isPrime(49), false); // 7^2
  assertEquals(isPrime(64), false); // 8^2
  assertEquals(isPrime(81), false); // 9^2
  assertEquals(isPrime(100), false); // 10^2
  assertEquals(isPrime(121), false); // 11^2
  assertEquals(isPrime(144), false); // 12^2
  assertEquals(isPrime(169), false); // 13^2
  assertEquals(isPrime(196), false); // 14^2
  assertEquals(isPrime(225), false); // 15^2
});
