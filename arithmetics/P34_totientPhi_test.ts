import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { totientPhi } from "./P34_totientPhi.ts";

Deno.test("P34: totientPhi - standard cases", () => {
  assertEquals(totientPhi(1), 1);
  assertEquals(totientPhi(2), 1);
  assertEquals(totientPhi(3), 2);
  assertEquals(totientPhi(4), 2);
  assertEquals(totientPhi(5), 4);
  assertEquals(totientPhi(6), 2);
  assertEquals(totientPhi(7), 6);
  assertEquals(totientPhi(8), 4);
  assertEquals(totientPhi(9), 6);
  assertEquals(totientPhi(10), 4);
  assertEquals(totientPhi(11), 10);
  assertEquals(totientPhi(12), 4);
  assertEquals(totientPhi(13), 12);
  assertEquals(totientPhi(14), 6);
  assertEquals(totientPhi(15), 8);
  assertEquals(totientPhi(16), 8);
  assertEquals(totientPhi(17), 16);
  assertEquals(totientPhi(18), 6);
  assertEquals(totientPhi(19), 18);
  assertEquals(totientPhi(20), 8);
});

Deno.test("P34: totientPhi - prime numbers", () => {
  assertEquals(totientPhi(2), 1); // 2-1 = 1
  assertEquals(totientPhi(3), 2); // 3-1 = 2
  assertEquals(totientPhi(5), 4); // 5-1 = 4
  assertEquals(totientPhi(7), 6); // 7-1 = 6
  assertEquals(totientPhi(11), 10); // 11-1 = 10
  assertEquals(totientPhi(13), 12); // 13-1 = 12
  assertEquals(totientPhi(17), 16); // 17-1 = 16
  assertEquals(totientPhi(19), 18); // 19-1 = 18
  assertEquals(totientPhi(23), 22); // 23-1 = 22
  assertEquals(totientPhi(29), 28); // 29-1 = 28
  assertEquals(totientPhi(31), 30); // 31-1 = 30
  assertEquals(totientPhi(37), 36); // 37-1 = 36
  assertEquals(totientPhi(41), 40); // 41-1 = 40
  assertEquals(totientPhi(43), 42); // 43-1 = 42
  assertEquals(totientPhi(47), 46); // 47-1 = 46
});

Deno.test("P34: totientPhi - powers of 2", () => {
  assertEquals(totientPhi(2), 1); // 2^1, phi = 2^0 = 1
  assertEquals(totientPhi(4), 2); // 2^2, phi = 2^1 = 2
  assertEquals(totientPhi(8), 4); // 2^3, phi = 2^2 = 4
  assertEquals(totientPhi(16), 8); // 2^4, phi = 2^3 = 8
  assertEquals(totientPhi(32), 16); // 2^5, phi = 2^4 = 16
  assertEquals(totientPhi(64), 32); // 2^6, phi = 2^5 = 32
});

Deno.test("P34: totientPhi - powers of primes", () => {
  assertEquals(totientPhi(9), 6); // 3^2, phi = 3 * (3-1) = 6
  assertEquals(totientPhi(25), 20); // 5^2, phi = 5 * (5-1) = 20
  assertEquals(totientPhi(27), 18); // 3^3, phi = 3^2 * (3-1) = 18
  assertEquals(totientPhi(49), 42); // 7^2, phi = 7 * (7-1) = 42
});

Deno.test("P34: totientPhi - composite numbers", () => {
  assertEquals(totientPhi(6), 2); // 2*3, phi = (2-1)*(3-1) = 1*2 = 2
  assertEquals(totientPhi(10), 4); // 2*5, phi = (2-1)*(5-1) = 1*4 = 4
  assertEquals(totientPhi(12), 4); // 2^2*3, phi = 2*(2-1)*(3-1) = 2*1*2 = 4
  assertEquals(totientPhi(14), 6); // 2*7, phi = (2-1)*(7-1) = 1*6 = 6
  assertEquals(totientPhi(15), 8); // 3*5, phi = (3-1)*(5-1) = 2*4 = 8
  assertEquals(totientPhi(18), 6); // 2*3^2, phi = (2-1)*3*(3-1) = 1*3*2 = 6
  assertEquals(totientPhi(20), 8); // 2^2*5, phi = 2*(2-1)*(5-1) = 2*1*4 = 8
  assertEquals(totientPhi(21), 12); // 3*7, phi = (3-1)*(7-1) = 2*6 = 12
  assertEquals(totientPhi(22), 10); // 2*11, phi = (2-1)*(11-1) = 1*10 = 10
  assertEquals(totientPhi(24), 8); // 2^3*3, phi = 2^2*(2-1)*(3-1) = 4*1*2 = 8
  assertEquals(totientPhi(26), 12); // 2*13, phi = (2-1)*(13-1) = 1*12 = 12
  assertEquals(totientPhi(28), 12); // 2^2*7, phi = 2*(2-1)*(7-1) = 2*1*6 = 12
  assertEquals(totientPhi(30), 8); // 2*3*5, phi = (2-1)*(3-1)*(5-1) = 1*2*4 = 8
});

Deno.test("P34: totientPhi - edge cases", () => {
  assertEquals(totientPhi(1), 1);
  assertEquals(totientPhi(0), 0); // Edge case: phi(0) = 0
  assertEquals(totientPhi(-1), 0); // Edge case: phi(negative) = 0
});
