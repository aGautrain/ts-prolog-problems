import { assertEquals } from "@std/assert";
import { penultimate } from "./P02_penultimate.ts";

Deno.test(function penultimateTest() {
  // Test with array of 2 or more elements
  assertEquals(penultimate([1, 2, 3, 4, 5]), 4);
  assertEquals(penultimate(["a", "b", "c"]), "b");
  assertEquals(penultimate([true, false, true]), false);

  // Test with exactly 2 elements
  assertEquals(penultimate([10, 20]), 10);

  // Test with single element
  assertEquals(penultimate([42]), undefined);

  // Test with empty array
  assertEquals(penultimate([]), undefined);
});
