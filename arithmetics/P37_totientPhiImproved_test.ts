import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { totientPhiImproved } from "./P37_totientPhiImproved.ts";

Deno.test("P37: totientPhiImproved - standard cases", () => {
  assertEquals(totientPhiImproved(1), 1);
  assertEquals(totientPhiImproved(2), 1);
  assertEquals(totientPhiImproved(3), 2);
  assertEquals(totientPhiImproved(4), 2);
  assertEquals(totientPhiImproved(5), 4);
  assertEquals(totientPhiImproved(6), 2);
  assertEquals(totientPhiImproved(7), 6);
  assertEquals(totientPhiImproved(8), 4);
  assertEquals(totientPhiImproved(9), 6);
  assertEquals(totientPhiImproved(10), 4);
  assertEquals(totientPhiImproved(11), 10);
  assertEquals(totientPhiImproved(12), 4);
  assertEquals(totientPhiImproved(13), 12);
  assertEquals(totientPhiImproved(14), 6);
  assertEquals(totientPhiImproved(15), 8);
  assertEquals(totientPhiImproved(16), 8);
  assertEquals(totientPhiImproved(17), 16);
  assertEquals(totientPhiImproved(18), 6);
  assertEquals(totientPhiImproved(19), 18);
  assertEquals(totientPhiImproved(20), 8);
});

Deno.test("P37: totientPhiImproved - prime numbers", () => {
  assertEquals(totientPhiImproved(23), 22);
  assertEquals(totientPhiImproved(29), 28);
  assertEquals(totientPhiImproved(31), 30);
  assertEquals(totientPhiImproved(37), 36);
  assertEquals(totientPhiImproved(41), 40);
  assertEquals(totientPhiImproved(43), 42);
  assertEquals(totientPhiImproved(47), 46);
});

Deno.test("P37: totientPhiImproved - powers of 2", () => {
  assertEquals(totientPhiImproved(32), 16);
  assertEquals(totientPhiImproved(64), 32);
  assertEquals(totientPhiImproved(128), 64);
  assertEquals(totientPhiImproved(256), 128);
  assertEquals(totientPhiImproved(512), 256);
  assertEquals(totientPhiImproved(1024), 512);
});

Deno.test("P37: totientPhiImproved - powers of primes", () => {
  assertEquals(totientPhiImproved(25), 20); // 5^2, phi = 5 * (5-1) = 20
  assertEquals(totientPhiImproved(27), 18); // 3^3, phi = 3^2 * (3-1) = 18
  assertEquals(totientPhiImproved(49), 42); // 7^2, phi = 7 * (7-1) = 42
  assertEquals(totientPhiImproved(81), 54); // 3^4, phi = 3^3 * (3-1) = 54
  assertEquals(totientPhiImproved(125), 100); // 5^3, phi = 5^2 * (5-1) = 100
});

Deno.test("P37: totientPhiImproved - composite numbers", () => {
  assertEquals(totientPhiImproved(21), 12); // 3*7, phi = (3-1)*(7-1) = 2*6 = 12
  assertEquals(totientPhiImproved(24), 8); // 2^3*3, phi = 2^2*(2-1)*(3-1) = 4*1*2 = 8
  assertEquals(totientPhiImproved(30), 8); // 2*3*5, phi = (2-1)*(3-1)*(5-1) = 1*2*4 = 8
  assertEquals(totientPhiImproved(36), 12); // 2^2*3^2, phi = 2*(2-1)*3*(3-1) = 2*1*3*2 = 12
  assertEquals(totientPhiImproved(42), 12); // 2*3*7, phi = (2-1)*(3-1)*(7-1) = 1*2*6 = 12
  assertEquals(totientPhiImproved(60), 16); // 2^2*3*5, phi = 2*(2-1)*(3-1)*(5-1) = 2*1*2*4 = 16
  assertEquals(totientPhiImproved(72), 24); // 2^3*3^2, phi = 2^2*(2-1)*3*(3-1) = 4*1*3*2 = 24
  assertEquals(totientPhiImproved(84), 24); // 2^2*3*7, phi = 2*(2-1)*(3-1)*(7-1) = 2*1*2*6 = 24
  assertEquals(totientPhiImproved(90), 24); // 2*3^2*5, phi = (2-1)*3*(3-1)*(5-1) = 1*3*2*4 = 24
  assertEquals(totientPhiImproved(120), 32); // 2^3*3*5, phi = 2^2*(2-1)*(3-1)*(5-1) = 4*1*2*4 = 32
});

Deno.test("P37: totientPhiImproved - edge cases", () => {
  assertEquals(totientPhiImproved(1), 1);
  assertEquals(totientPhiImproved(0), 0);
  assertEquals(totientPhiImproved(-1), 0);
});

Deno.test("P37: totientPhiImproved - larger numbers", () => {
  assertEquals(totientPhiImproved(100), 40); // 2^2*5^2, phi = 2*(2-1)*5*(5-1) = 2*1*5*4 = 40
  assertEquals(totientPhiImproved(1000), 400); // 2^3*5^3, phi = 2^2*(2-1)*5^2*(5-1) = 4*1*25*4 = 400
  assertEquals(totientPhiImproved(10090), 4032); // 2*5*1009, phi = (2-1)*(5-1)*(1009-1) = 1*4*1008 = 4032
});
