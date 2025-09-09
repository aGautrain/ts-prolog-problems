import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { lengthEncoding } from "./P10_lengthEncoding.ts";

Deno.test("lengthEncoding", () => {
  // Empty array
  assertEquals(lengthEncoding([]), []);

  // Single element
  assertEquals(lengthEncoding([1]), [[1, 1]]);
  assertEquals(lengthEncoding(["a"]), [[1, "a"]]);

  // All identical elements
  assertEquals(lengthEncoding([1, 1, 1, 1]), [[4, 1]]);
  assertEquals(lengthEncoding(["x", "x", "x"]), [[3, "x"]]);

  // All different elements
  assertEquals(lengthEncoding([1, 2, 3, 4]), [
    [1, 1],
    [1, 2],
    [1, 3],
    [1, 4],
  ]);
  assertEquals(lengthEncoding(["a", "b", "c"]), [
    [1, "a"],
    [1, "b"],
    [1, "c"],
  ]);

  // Mixed consecutive and non-consecutive
  assertEquals(lengthEncoding([1, 1, 2, 3, 3, 3, 1]), [
    [2, 1],
    [1, 2],
    [3, 3],
    [1, 1],
  ]);
  assertEquals(lengthEncoding(["a", "a", "b", "c", "c", "a"]), [
    [2, "a"],
    [1, "b"],
    [2, "c"],
    [1, "a"],
  ]);

  // Alternating pattern
  assertEquals(lengthEncoding([1, 2, 1, 2, 1, 2]), [
    [1, 1],
    [1, 2],
    [1, 1],
    [1, 2],
    [1, 1],
    [1, 2],
  ]);
  assertEquals(lengthEncoding(["a", "b", "a", "b"]), [
    [1, "a"],
    [1, "b"],
    [1, "a"],
    [1, "b"],
  ]);

  // Complex pattern
  assertEquals(lengthEncoding([1, 1, 1, 2, 2, 3, 1, 1, 2, 2, 2, 2]), [
    [3, 1],
    [2, 2],
    [1, 3],
    [2, 1],
    [4, 2],
  ]);

  // Different data types
  assertEquals(lengthEncoding([true, true, false, true]), [
    [2, true],
    [1, false],
    [1, true],
  ]);
  assertEquals(lengthEncoding([null, null, undefined, null]), [
    [2, null],
    [1, undefined],
    [1, null],
  ]);

  // Objects (reference equality)
  const obj1 = { id: 1 };
  const obj2 = { id: 2 };
  const obj3 = { id: 1 };

  assertEquals(lengthEncoding([obj1, obj1, obj2, obj3]), [
    [2, obj1],
    [1, obj2],
    [1, obj3],
  ]);

  // Arrays
  const arr1 = [1, 2];
  const arr2 = [3, 4];

  assertEquals(lengthEncoding([arr1, arr1, arr2, arr1]), [
    [2, arr1],
    [1, arr2],
    [1, arr1],
  ]);

  // Edge cases with zeros and negative numbers
  assertEquals(lengthEncoding([0, 0, 0, 1, 1, -1, -1, -1, -1]), [
    [3, 0],
    [2, 1],
    [4, -1],
  ]);

  // Large sequences
  const largeSequence = new Array(5).fill("x");
  assertEquals(lengthEncoding(largeSequence), [[5, "x"]]);

  // Mixed types in same array
  assertEquals(lengthEncoding([1, "a", "a", 2, 2, 2]), [
    [1, 1],
    [2, "a"],
    [3, 2],
  ]);
});
