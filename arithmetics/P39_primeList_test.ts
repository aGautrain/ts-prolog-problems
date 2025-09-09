import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { primeList } from "./P39_primeList.ts";

Deno.test("P39: primeList - standard ranges", () => {
  assertEquals(primeList(1, 10), [2, 3, 5, 7]);
  assertEquals(primeList(10, 20), [11, 13, 17, 19]);
  assertEquals(primeList(20, 30), [23, 29]);
  assertEquals(primeList(30, 40), [31, 37]);
  assertEquals(primeList(40, 50), [41, 43, 47]);
  assertEquals(primeList(50, 60), [53, 59]);
  assertEquals(primeList(60, 70), [61, 67]);
  assertEquals(primeList(70, 80), [71, 73, 79]);
  assertEquals(primeList(80, 90), [83, 89]);
  assertEquals(primeList(90, 100), [97]);
});

Deno.test("P39: primeList - single number ranges", () => {
  assertEquals(primeList(1, 1), []);
  assertEquals(primeList(2, 2), [2]);
  assertEquals(primeList(3, 3), [3]);
  assertEquals(primeList(4, 4), []);
  assertEquals(primeList(5, 5), [5]);
  assertEquals(primeList(6, 6), []);
  assertEquals(primeList(7, 7), [7]);
  assertEquals(primeList(8, 8), []);
  assertEquals(primeList(9, 9), []);
  assertEquals(primeList(10, 10), []);
  assertEquals(primeList(11, 11), [11]);
  assertEquals(primeList(12, 12), []);
  assertEquals(primeList(13, 13), [13]);
  assertEquals(primeList(14, 14), []);
  assertEquals(primeList(15, 15), []);
  assertEquals(primeList(16, 16), []);
  assertEquals(primeList(17, 17), [17]);
  assertEquals(primeList(18, 18), []);
  assertEquals(primeList(19, 19), [19]);
  assertEquals(primeList(20, 20), []);
});

Deno.test("P39: primeList - edge cases", () => {
  assertEquals(primeList(0, 0), []);
  assertEquals(primeList(-1, -1), []);
  assertEquals(primeList(-5, 5), [2, 3, 5]);
  assertEquals(primeList(-10, 10), [2, 3, 5, 7]);
});

Deno.test("P39: primeList - empty ranges", () => {
  assertEquals(primeList(10, 5), []); // upper < lower
  assertEquals(primeList(4, 4), []); // 4 is not prime
  assertEquals(primeList(6, 6), []); // 6 is not prime
  assertEquals(primeList(8, 8), []); // 8 is not prime
  assertEquals(primeList(9, 9), []); // 9 is not prime
  assertEquals(primeList(10, 10), []); // 10 is not prime
  assertEquals(primeList(12, 12), []); // 12 is not prime
  assertEquals(primeList(14, 14), []); // 14 is not prime
  assertEquals(primeList(15, 15), []); // 15 is not prime
  assertEquals(primeList(16, 16), []); // 16 is not prime
  assertEquals(primeList(18, 18), []); // 18 is not prime
  assertEquals(primeList(20, 20), []); // 20 is not prime
});

Deno.test("P39: primeList - larger ranges", () => {
  assertEquals(primeList(100, 110), [101, 103, 107, 109]);
  assertEquals(primeList(110, 120), [113]);
  assertEquals(primeList(120, 130), [127]);
  assertEquals(primeList(130, 140), [131, 137, 139]);
  assertEquals(primeList(140, 150), [149]);
  assertEquals(primeList(150, 160), [151, 157]);
  assertEquals(primeList(160, 170), [163, 167]);
  assertEquals(primeList(170, 180), [173, 179]);
  assertEquals(primeList(180, 190), [181]);
  assertEquals(primeList(190, 200), [191, 193, 197, 199]);
});

Deno.test("P39: primeList - very small ranges", () => {
  assertEquals(primeList(1, 2), [2]);
  assertEquals(primeList(1, 3), [2, 3]);
  assertEquals(primeList(1, 4), [2, 3]);
  assertEquals(primeList(1, 5), [2, 3, 5]);
  assertEquals(primeList(1, 6), [2, 3, 5]);
  assertEquals(primeList(1, 7), [2, 3, 5, 7]);
  assertEquals(primeList(1, 8), [2, 3, 5, 7]);
  assertEquals(primeList(1, 9), [2, 3, 5, 7]);
  assertEquals(primeList(1, 11), [2, 3, 5, 7, 11]);
  assertEquals(primeList(1, 12), [2, 3, 5, 7, 11]);
  assertEquals(primeList(1, 13), [2, 3, 5, 7, 11, 13]);
  assertEquals(primeList(1, 14), [2, 3, 5, 7, 11, 13]);
  assertEquals(primeList(1, 15), [2, 3, 5, 7, 11, 13]);
  assertEquals(primeList(1, 16), [2, 3, 5, 7, 11, 13]);
  assertEquals(primeList(1, 17), [2, 3, 5, 7, 11, 13, 17]);
  assertEquals(primeList(1, 18), [2, 3, 5, 7, 11, 13, 17]);
  assertEquals(primeList(1, 19), [2, 3, 5, 7, 11, 13, 17, 19]);
  assertEquals(primeList(1, 20), [2, 3, 5, 7, 11, 13, 17, 19]);
});

Deno.test("P39: primeList - ranges with no primes", () => {
  assertEquals(primeList(4, 4), []);
  assertEquals(primeList(6, 6), []);
  assertEquals(primeList(8, 8), []);
  assertEquals(primeList(9, 9), []);
  assertEquals(primeList(10, 10), []);
  assertEquals(primeList(12, 12), []);
  assertEquals(primeList(14, 14), []);
  assertEquals(primeList(15, 15), []);
  assertEquals(primeList(16, 16), []);
  assertEquals(primeList(18, 18), []);
  assertEquals(primeList(20, 20), []);
  assertEquals(primeList(21, 21), []);
  assertEquals(primeList(22, 22), []);
  assertEquals(primeList(24, 24), []);
  assertEquals(primeList(25, 25), []);
  assertEquals(primeList(26, 26), []);
  assertEquals(primeList(27, 27), []);
  assertEquals(primeList(28, 28), []);
  assertEquals(primeList(30, 30), []);
  assertEquals(primeList(32, 32), []);
  assertEquals(primeList(33, 33), []);
  assertEquals(primeList(34, 34), []);
  assertEquals(primeList(35, 35), []);
  assertEquals(primeList(36, 36), []);
  assertEquals(primeList(38, 38), []);
  assertEquals(primeList(39, 39), []);
  assertEquals(primeList(40, 40), []);
});
