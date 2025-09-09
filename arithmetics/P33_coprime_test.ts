import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { coprime } from "./P33_coprime.ts";

Deno.test("P33: coprime - coprime numbers", () => {
  assertEquals(coprime(35, 64), true);
  assertEquals(coprime(17, 13), true);
  assertEquals(coprime(8, 9), true);
  assertEquals(coprime(5, 7), true);
  assertEquals(coprime(11, 13), true);
  assertEquals(coprime(15, 16), true);
  assertEquals(coprime(21, 22), true);
  assertEquals(coprime(25, 26), true);
  assertEquals(coprime(27, 28), true);
  assertEquals(coprime(29, 30), true);
  assertEquals(coprime(31, 32), true);
  assertEquals(coprime(33, 34), true);
  assertEquals(coprime(35, 36), true);
  assertEquals(coprime(37, 38), true);
  assertEquals(coprime(39, 40), true);
  assertEquals(coprime(41, 42), true);
  assertEquals(coprime(43, 44), true);
  assertEquals(coprime(45, 46), true);
  assertEquals(coprime(47, 48), true);
  assertEquals(coprime(49, 50), true);
});

Deno.test("P33: coprime - non-coprime numbers", () => {
  assertEquals(coprime(36, 63), false);
  assertEquals(coprime(48, 18), false);
  assertEquals(coprime(100, 25), false);
  assertEquals(coprime(56, 42), false);
  assertEquals(coprime(84, 18), false);
  assertEquals(coprime(15, 25), false);
  assertEquals(coprime(30, 45), false);
  assertEquals(coprime(12, 8), false);
  assertEquals(coprime(20, 15), false);
  assertEquals(coprime(24, 18), false);
  assertEquals(coprime(28, 21), false);
  assertEquals(coprime(32, 24), false);
  assertEquals(coprime(40, 30), false);
  assertEquals(coprime(44, 33), false);
  assertEquals(coprime(48, 36), false);
  assertEquals(coprime(52, 39), false);
  assertEquals(coprime(56, 42), false);
  assertEquals(coprime(60, 45), false);
  assertEquals(coprime(64, 48), false);
  assertEquals(coprime(68, 51), false);
});

Deno.test("P33: coprime - edge cases", () => {
  assertEquals(coprime(1, 1), true);
  assertEquals(coprime(1, 100), true);
  assertEquals(coprime(100, 1), true);
  assertEquals(coprime(2, 2), false);
  assertEquals(coprime(3, 3), false);
  assertEquals(coprime(5, 5), false);
});

Deno.test("P33: coprime - same numbers", () => {
  assertEquals(coprime(1, 1), true);
  assertEquals(coprime(2, 2), false);
  assertEquals(coprime(3, 3), false);
  assertEquals(coprime(4, 4), false);
  assertEquals(coprime(5, 5), false);
  assertEquals(coprime(6, 6), false);
  assertEquals(coprime(7, 7), false);
  assertEquals(coprime(8, 8), false);
  assertEquals(coprime(9, 9), false);
  assertEquals(coprime(10, 10), false);
});
