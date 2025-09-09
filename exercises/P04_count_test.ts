import { assertEquals } from "@std/assert";
import { count } from "./P04_count.ts";

Deno.test(function countTest() {
  // Test with various array lengths
  assertEquals(count([1, 2, 3, 4, 5]), 5);
  assertEquals(count(["a", "b", "c"]), 3);
  assertEquals(count([true, false]), 2);
  assertEquals(count([42]), 1);

  // Test with empty array
  assertEquals(count([]), 0);

  // Test with different data types
  assertEquals(count([1, "hello", true, null, undefined]), 5);

  // Test with large array
  const largeArray = new Array(1000).fill(0);
  assertEquals(count(largeArray), 1000);
});
