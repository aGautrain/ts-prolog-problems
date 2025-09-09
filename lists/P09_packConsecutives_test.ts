import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { packConsecutives } from "./P09_packConsecutives.ts";

Deno.test("packConsecutives", () => {
  // Empty array
  assertEquals(packConsecutives([]), []);

  // Single element
  assertEquals(packConsecutives([1]), [[1]]);
  assertEquals(packConsecutives(["a"]), [["a"]]);

  // All identical elements
  assertEquals(packConsecutives([1, 1, 1, 1]), [[1, 1, 1, 1]]);
  assertEquals(packConsecutives(["x", "x", "x"]), [["x", "x", "x"]]);

  // All different elements
  assertEquals(packConsecutives([1, 2, 3, 4]), [[1], [2], [3], [4]]);
  assertEquals(packConsecutives(["a", "b", "c"]), [["a"], ["b"], ["c"]]);

  // Mixed consecutive and non-consecutive
  assertEquals(packConsecutives([1, 1, 2, 3, 3, 3, 1]), [
    [1, 1],
    [2],
    [3, 3, 3],
    [1],
  ]);
  assertEquals(packConsecutives(["a", "a", "b", "c", "c", "a"]), [
    ["a", "a"],
    ["b"],
    ["c", "c"],
    ["a"],
  ]);

  // Alternating pattern
  assertEquals(packConsecutives([1, 2, 1, 2, 1, 2]), [
    [1],
    [2],
    [1],
    [2],
    [1],
    [2],
  ]);
  assertEquals(packConsecutives(["a", "b", "a", "b"]), [
    ["a"],
    ["b"],
    ["a"],
    ["b"],
  ]);

  // Complex pattern
  assertEquals(packConsecutives([1, 1, 1, 2, 2, 3, 1, 1, 2, 2, 2, 2]), [
    [1, 1, 1],
    [2, 2],
    [3],
    [1, 1],
    [2, 2, 2, 2],
  ]);

  // Different data types
  assertEquals(packConsecutives([true, true, false, true]), [
    [true, true],
    [false],
    [true],
  ]);
  assertEquals(packConsecutives([null, null, undefined, null]), [
    [null, null],
    [undefined],
    [null],
  ]);

  // Objects (reference equality)
  const obj1 = { id: 1 };
  const obj2 = { id: 2 };
  const obj3 = { id: 1 };

  assertEquals(packConsecutives([obj1, obj1, obj2, obj3]), [
    [obj1, obj1],
    [obj2],
    [obj3],
  ]);

  // Arrays
  const arr1 = [1, 2];
  const arr2 = [3, 4];

  assertEquals(packConsecutives([arr1, arr1, arr2, arr1]), [
    [arr1, arr1],
    [arr2],
    [arr1],
  ]);
});
