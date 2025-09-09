import { assertEquals } from "@std/assert";
import { eliminateDuplicates } from "./P08_eliminateDuplicates.ts";

Deno.test(function eliminateDuplicatesTest() {
  // Test with numbers
  assertEquals(eliminateDuplicates([1, 2, 2, 3, 3, 3, 4]), [1, 2, 3, 4]);
  assertEquals(eliminateDuplicates([1, 1, 1, 1]), [1]);
  assertEquals(eliminateDuplicates([1, 2, 3, 4]), [1, 2, 3, 4]);

  // Test with strings
  assertEquals(eliminateDuplicates(["a", "b", "b", "c", "a"]), ["a", "b", "c"]);
  assertEquals(eliminateDuplicates(["hello", "world", "hello"]), [
    "hello",
    "world",
  ]);

  // Test with empty array
  assertEquals(eliminateDuplicates([]), []);

  // Test with single element
  assertEquals(eliminateDuplicates([42]), [42]);

  // Test with mixed types (should preserve first occurrence)
  assertEquals(eliminateDuplicates([1, "1", 1, "1"]), [1, "1"]);
});
