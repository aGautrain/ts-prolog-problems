import { assertEquals } from "@std/assert";
import { at } from "./P03_at.ts";

Deno.test(function atTest() {
  const testArray = [10, 20, 30, 40, 50];

  // Test valid indices
  assertEquals(at(testArray, 0), 10);
  assertEquals(at(testArray, 2), 30);
  assertEquals(at(testArray, 4), 50);

  // Test negative index
  assertEquals(at(testArray, -1), undefined);

  // Test index out of bounds
  assertEquals(at(testArray, 5), undefined);
  assertEquals(at(testArray, 10), undefined);

  // Test with empty array
  assertEquals(at([], 0), undefined);

  // Test with string array
  const stringArray = ["a", "b", "c"];
  assertEquals(at(stringArray, 1), "b");
  assertEquals(at(stringArray, -1), undefined);
});
