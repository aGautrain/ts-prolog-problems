import { assertEquals } from "@std/assert";
import { last } from "./P01_last.ts";

Deno.test(function lastTest() {
  // Test with non-empty array
  assertEquals(last([1, 2, 3, 4, 5]), 5);
  assertEquals(last(["a", "b", "c"]), "c");
  assertEquals(last([true, false]), false);

  // Test with single element
  assertEquals(last([42]), 42);

  // Test with empty array
  assertEquals(last([]), undefined);
});
