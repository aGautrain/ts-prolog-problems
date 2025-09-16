import { assertEquals } from "@std/assert";
import { isTree } from "./P54_isTree.ts";
import { BinaryTree } from "./types.ts";

Deno.test("P54: isTree - valid binary trees", () => {
  // Empty tree
  assertEquals(isTree(new BinaryTree(1, null, null)), true);

  // Full tree
  assertEquals(
    isTree(
      new BinaryTree(
        1,
        new BinaryTree(2, null, null),
        new BinaryTree(3, null, null)
      )
    ),
    true
  );

  // Tree with left child
  assertEquals(
    isTree(new BinaryTree(1, new BinaryTree(2, null, null), null)),
    true
  );

  // Tree with right child
  assertEquals(
    isTree(new BinaryTree(1, null, new BinaryTree(3, null, null))),
    true
  );
});

Deno.test("P54: isTree - invalid structures", () => {
  // Not an object
  assertEquals(isTree(42), false);
  assertEquals(isTree("string"), false);
  assertEquals(isTree(true), false);

  // Object with required properties but not right instance
  assertEquals(isTree({}), false);
  assertEquals(isTree({ value: "a", left: null, right: null }), false);

  // Binary tree with invalid leaf
  assertEquals(isTree(new BinaryTree(0, null, JSON.parse("3"))), false);
});
