import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { compareTotient } from "./P38_compareTotient.ts";

Deno.test("P38: compareTotient - example from problem", () => {
  const result = compareTotient(10090);
  assertEquals(result.primitiveResult, result.improvedResult);
  assertEquals(result.value, 10090);
  assertEquals(result.primitiveResult, 4032);
  assertEquals(result.improvedResult, 4032);
});

Deno.test("P38: compareTotient - small numbers", () => {
  const result = compareTotient(10);
  assertEquals(result.primitiveResult, result.improvedResult);
  assertEquals(result.value, 10);
  assertEquals(result.primitiveResult, 4);
  assertEquals(result.improvedResult, 4);
});

Deno.test("P38: compareTotient - prime numbers", () => {
  const result = compareTotient(17);
  assertEquals(result.primitiveResult, result.improvedResult);
  assertEquals(result.value, 17);
  assertEquals(result.primitiveResult, 16);
  assertEquals(result.improvedResult, 16);
});

Deno.test("P38: compareTotient - powers of 2", () => {
  const result = compareTotient(64);
  assertEquals(result.primitiveResult, result.improvedResult);
  assertEquals(result.value, 64);
  assertEquals(result.primitiveResult, 32);
  assertEquals(result.improvedResult, 32);
});

Deno.test("P38: compareTotient - composite numbers", () => {
  const result = compareTotient(100);
  assertEquals(result.primitiveResult, result.improvedResult);
  assertEquals(result.value, 100);
  assertEquals(result.primitiveResult, 40);
  assertEquals(result.improvedResult, 40);
});

Deno.test("P38: compareTotient - larger numbers", () => {
  const result = compareTotient(1000);
  assertEquals(result.primitiveResult, result.improvedResult);
  assertEquals(result.value, 1000);
  assertEquals(result.primitiveResult, 400);
  assertEquals(result.improvedResult, 400);
});

Deno.test("P38: compareTotient - edge cases", () => {
  const result = compareTotient(1);
  assertEquals(result.primitiveResult, result.improvedResult);
  assertEquals(result.value, 1);
  assertEquals(result.primitiveResult, 1);
  assertEquals(result.improvedResult, 1);
});

Deno.test("P38: compareTotient - many prime factors", () => {
  const result = compareTotient(2310); // 2*3*5*7*11
  assertEquals(result.primitiveResult, result.improvedResult);
  assertEquals(result.value, 2310);
  assertEquals(result.primitiveResult, 480); // (2-1)*(3-1)*(5-1)*(7-1)*(11-1) = 1*2*4*6*10 = 480
  assertEquals(result.improvedResult, 480);
});

Deno.test("P38: compareTotient - perfect squares", () => {
  const result = compareTotient(36); // 2^2*3^2
  assertEquals(result.primitiveResult, result.improvedResult);
  assertEquals(result.value, 36);
  assertEquals(result.primitiveResult, 12); // 2*(2-1)*3*(3-1) = 2*1*3*2 = 12
  assertEquals(result.improvedResult, 12);
});

Deno.test("P38: compareTotient - high powers", () => {
  const result = compareTotient(1008); // 2^4*3^2*7
  assertEquals(result.primitiveResult, result.improvedResult);
  assertEquals(result.value, 1008);
  assertEquals(result.primitiveResult, 288); // 2^3*(2-1)*3*(3-1)*(7-1) = 8*1*3*2*6 = 288
  assertEquals(result.improvedResult, 288);
});

Deno.test("P38: compareTotient - performance verification", () => {
  const result1 = compareTotient(10090);
  const result2 = compareTotient(2310);

  // Verify that timing values are non-negative
  assertEquals(result1.improvedTime >= 0, true);
  assertEquals(result1.primitiveTime >= 0, true);
  assertEquals(result2.improvedTime >= 0, true);
  assertEquals(result2.primitiveTime >= 0, true);
});
