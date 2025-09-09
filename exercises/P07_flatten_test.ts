import { assertEquals } from "@std/assert";
import { flatten } from "./P07_flatten.ts";

Deno.test(function flattenTest() {
  // Test with empty array
  assertEquals(flatten([]), []);

  // Test with flat array (no nesting)
  assertEquals(flatten([1, 2, 3]), [1, 2, 3]);

  // Test with one level of nesting
  assertEquals(flatten([1, [2, 3], 4]), [1, 2, 3, 4]);

  // Test with multiple levels of nesting
  assertEquals(flatten([1, [2, [3, 4]], 5]), [1, 2, 3, 4, 5]);

  // Test with deeply nested arrays
  assertEquals(flatten([1, [2, [3, [4, [5]]]]]), [1, 2, 3, 4, 5]);

  // Test with mixed nesting levels
  assertEquals(flatten([1, [2, 3], [4, [5, 6]], 7]), [1, 2, 3, 4, 5, 6, 7]);

  // Test with strings
  assertEquals(flatten(["a", ["b", "c"], "d"]), ["a", "b", "c", "d"]);

  // Test with all nested arrays
  assertEquals(
    flatten([
      [1, 2],
      [3, 4],
      [5, 6],
    ]),
    [1, 2, 3, 4, 5, 6]
  );

  // Test with single element array
  assertEquals(flatten([[42]]), [42]);

  // Test with complex nested structure
  const input = [1, [2, [3, [4, 5]]], [6, 7], 8, [9, [10, [11, 12]]]];
  const expected = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  assertEquals(flatten(input), expected);
});
