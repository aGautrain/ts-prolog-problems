import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { gcd } from "./P32_gcd.ts";

Deno.test("P32: gcd - standard cases", () => {
  assertEquals(gcd(36, 63), 9);
  assertEquals(gcd(48, 18), 6);
  assertEquals(gcd(17, 13), 1);
  assertEquals(gcd(100, 25), 25);
  assertEquals(gcd(56, 42), 14);
  assertEquals(gcd(84, 18), 6);
  assertEquals(gcd(15, 25), 5);
  assertEquals(gcd(30, 45), 15);
});

Deno.test("P32: gcd - coprime numbers", () => {
  assertEquals(gcd(35, 64), 1);
  assertEquals(gcd(8, 9), 1);
  assertEquals(gcd(5, 7), 1);
  assertEquals(gcd(11, 13), 1);
  assertEquals(gcd(17, 19), 1);
  assertEquals(gcd(23, 29), 1);
});

Deno.test("P32: gcd - same numbers", () => {
  assertEquals(gcd(5, 5), 5);
  assertEquals(gcd(12, 12), 12);
  assertEquals(gcd(100, 100), 100);
});

Deno.test("P32: gcd - multiples", () => {
  assertEquals(gcd(10, 5), 5);
  assertEquals(gcd(5, 10), 5);
  assertEquals(gcd(21, 7), 7);
  assertEquals(gcd(7, 21), 7);
  assertEquals(gcd(50, 10), 10);
  assertEquals(gcd(10, 50), 10);
});

Deno.test("P32: gcd - edge cases", () => {
  assertEquals(gcd(1, 1), 1);
  assertEquals(gcd(1, 100), 1);
  assertEquals(gcd(100, 1), 1);
  assertEquals(gcd(0, 5), 5);
  assertEquals(gcd(5, 0), 5);
  assertEquals(gcd(0, 0), 0);
});

Deno.test("P32: gcd - larger numbers", () => {
  assertEquals(gcd(144, 60), 12);
  assertEquals(gcd(180, 48), 12);
  assertEquals(gcd(210, 45), 15);
  assertEquals(gcd(252, 105), 21);
  assertEquals(gcd(300, 90), 30);
});
