import { assertEquals } from "@std/assert";
import { reverse } from "./P05_reverse.ts";

Deno.test(function reverseTest() {
  // Test with numbers
  assertEquals(reverse([1, 2, 3, 4, 5]), [5, 4, 3, 2, 1]);
  assertEquals(reverse([10, 20, 30]), [30, 20, 10]);

  // Test with strings
  assertEquals(reverse(["a", "b", "c"]), ["c", "b", "a"]);
  assertEquals(reverse(["hello", "world"]), ["world", "hello"]);

  // Test with booleans
  assertEquals(reverse([true, false, true]), [true, false, true]);

  // Test with mixed types
  assertEquals(reverse([1, "hello", true]), [true, "hello", 1]);

  // Test with single element
  assertEquals(reverse([42]), [42]);
  assertEquals(reverse(["single"]), ["single"]);

  // Test with empty array
  assertEquals(reverse([]), []);

  // Test that original array is not modified
  const original = [1, 2, 3];
  const reversed = reverse(original);
  assertEquals(original, [1, 2, 3]); // Original should be unchanged
  assertEquals(reversed, [3, 2, 1]);

  // Test with duplicate elements
  assertEquals(reverse([1, 1, 2, 2]), [2, 2, 1, 1]);
});
