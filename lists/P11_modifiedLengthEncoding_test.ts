import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { modifiedLengthEncoding } from "./P11_modifiedLengthEncoding.ts";

Deno.test("modifiedLengthEncoding", () => {
  // Empty array
  assertEquals(modifiedLengthEncoding([]), []);

  // Single element
  assertEquals(modifiedLengthEncoding([1]), [1]);
  assertEquals(modifiedLengthEncoding(["a"]), ["a"]);

  // All identical elements
  assertEquals(modifiedLengthEncoding([1, 1, 1, 1]), [[4, 1]]);
  assertEquals(modifiedLengthEncoding(["x", "x", "x"]), [[3, "x"]]);

  // All different elements
  assertEquals(modifiedLengthEncoding([1, 2, 3, 4]), [1, 2, 3, 4]);
  assertEquals(modifiedLengthEncoding(["a", "b", "c"]), ["a", "b", "c"]);

  // Mixed consecutive and non-consecutive
  assertEquals(modifiedLengthEncoding([1, 1, 2, 3, 3, 3, 1]), [
    [2, 1],
    2,
    [3, 3],
    1,
  ]);
  assertEquals(modifiedLengthEncoding(["a", "a", "b", "c", "c", "a"]), [
    [2, "a"],
    "b",
    [2, "c"],
    "a",
  ]);

  // Example from problem statement
  assertEquals(
    modifiedLengthEncoding([
      "a",
      "a",
      "a",
      "a",
      "b",
      "c",
      "c",
      "a",
      "a",
      "d",
      "e",
      "e",
      "e",
      "e",
    ]),
    [[4, "a"], "b", [2, "c"], [2, "a"], "d", [4, "e"]]
  );

  // Alternating pattern
  assertEquals(modifiedLengthEncoding([1, 2, 1, 2, 1, 2]), [1, 2, 1, 2, 1, 2]);
  assertEquals(modifiedLengthEncoding(["a", "b", "a", "b"]), [
    "a",
    "b",
    "a",
    "b",
  ]);

  // Complex pattern
  assertEquals(modifiedLengthEncoding([1, 1, 1, 2, 2, 3, 1, 1, 2, 2, 2, 2]), [
    [3, 1],
    [2, 2],
    3,
    [2, 1],
    [4, 2],
  ]);

  // Different data types
  assertEquals(modifiedLengthEncoding([true, true, false, true]), [
    [2, true],
    false,
    true,
  ]);
  assertEquals(modifiedLengthEncoding([null, null, undefined, null]), [
    [2, null],
    undefined,
    null,
  ]);

  // Objects (reference equality)
  const obj1 = { id: 1 };
  const obj2 = { id: 2 };
  const obj3 = { id: 1 };

  assertEquals(modifiedLengthEncoding([obj1, obj1, obj2, obj3]), [
    [2, obj1],
    obj2,
    obj3,
  ]);

  // Arrays
  const arr1 = [1, 2];
  const arr2 = [3, 4];

  assertEquals(modifiedLengthEncoding([arr1, arr1, arr2, arr1]), [
    [2, arr1],
    arr2,
    arr1,
  ]);

  // Edge cases with zeros and negative numbers
  assertEquals(modifiedLengthEncoding([0, 0, 0, 1, 1, -1, -1, -1, -1]), [
    [3, 0],
    [2, 1],
    [4, -1],
  ]);

  // Large sequences
  const largeSequence = new Array(5).fill("x");
  assertEquals(modifiedLengthEncoding(largeSequence), [[5, "x"]]);

  // Mixed types in same array
  assertEquals(modifiedLengthEncoding([1, "a", "a", 2, 2, 2]), [
    1,
    [2, "a"],
    [3, 2],
  ]);

  // Single duplicates
  assertEquals(modifiedLengthEncoding([1, 1, 2, 2, 3, 3]), [
    [2, 1],
    [2, 2],
    [2, 3],
  ]);

  // No consecutive duplicates
  assertEquals(modifiedLengthEncoding([1, 2, 1, 3, 2, 4]), [1, 2, 1, 3, 2, 4]);
});
