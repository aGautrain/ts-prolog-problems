import { assertEquals } from "@std/assert";
import {
  add,
  construct,
  testSymmetric,
  isValidBST,
  inorder,
  search,
} from "./P57_binarySearchTree.ts";
import { leaf, node } from "./types.ts";

Deno.test("P57: add - add to empty tree", () => {
  const tree = add(5, null, (a, b) => a - b);
  assertEquals(tree?.value, 5);
  assertEquals(tree?.left, null);
  assertEquals(tree?.right, null);
});

Deno.test("P57: add - add smaller value", () => {
  const tree = add(3, leaf(5), (a, b) => a - b);
  assertEquals(tree?.value, 5);
  assertEquals(tree?.left?.value, 3);
  assertEquals(tree?.right, null);
});

Deno.test("P57: add - add larger value", () => {
  const tree = add(7, leaf(5), (a, b) => a - b);
  assertEquals(tree?.value, 5);
  assertEquals(tree?.left, null);
  assertEquals(tree?.right?.value, 7);
});

Deno.test("P57: add - add existing value", () => {
  const original = node(5, leaf(3), leaf(7));
  const result = add(5, original, (a, b) => a - b);
  assertEquals(result, original); // Should return unchanged
});

Deno.test("P57: add - complex tree construction", () => {
  let tree: any = null;
  tree = add(3, tree, (a, b) => a - b);
  tree = add(2, tree, (a, b) => a - b);
  tree = add(5, tree, (a, b) => a - b);
  tree = add(7, tree, (a, b) => a - b);
  tree = add(1, tree, (a, b) => a - b);

  // Should be: 3(2(1,),5(,7))
  assertEquals(tree.value, 3);
  assertEquals(tree.left.value, 2);
  assertEquals(tree.left.left.value, 1);
  assertEquals(tree.right.value, 5);
  assertEquals(tree.right.right.value, 7);
});

Deno.test("P57: construct - example from problem", () => {
  const tree = construct([3, 2, 5, 7, 1]);

  // Verify structure matches example
  assertEquals(tree?.value, 3);
  assertEquals(tree?.left?.value, 2);
  assertEquals(tree?.left?.left?.value, 1);
  assertEquals(tree?.right?.value, 5);
  assertEquals(tree?.right?.right?.value, 7);

  // Verify it's a valid BST
  assertEquals(
    isValidBST(tree, (a, b) => a - b),
    true
  );
});

Deno.test("P57: construct - empty list", () => {
  const tree = construct([]);
  assertEquals(tree, null);
});

Deno.test("P57: construct - single element", () => {
  const tree = construct([42]);
  assertEquals(tree?.value, 42);
  assertEquals(tree?.left, null);
  assertEquals(tree?.right, null);
});

Deno.test("P57: construct - duplicate elements", () => {
  const tree = construct([3, 2, 3, 5, 2]);

  // Should only have unique elements
  const values = inorder(tree);
  assertEquals(values, [2, 3, 5]);
});

Deno.test("P57: testSymmetric - symmetric case", () => {
  // This should create a symmetric tree
  assertEquals(testSymmetric([5, 3, 18, 1, 4, 12, 21]), true);
});

Deno.test("P57: testSymmetric - asymmetric case", () => {
  // This should create an asymmetric tree
  assertEquals(testSymmetric([3, 2, 5, 7, 4]), false);
});

Deno.test("P57: testSymmetric - edge cases", () => {
  assertEquals(testSymmetric([]), true); // Empty tree is symmetric
  assertEquals(testSymmetric([1]), true); // Single node is symmetric
  assertEquals(testSymmetric([1, 2]), false); // Two nodes, not symmetric
  assertEquals(testSymmetric([2, 1, 3]), true); // Three nodes, symmetric
});

Deno.test("P57: isValidBST - valid BSTs", () => {
  const valid1 = node(5, leaf(3), leaf(7));
  assertEquals(
    isValidBST(valid1, (a, b) => a - b),
    true
  );

  const valid2 = node(5, node(3, leaf(1), leaf(4)), node(7, leaf(6), leaf(8)));
  assertEquals(
    isValidBST(valid2, (a, b) => a - b),
    true
  );

  const valid3 = null;
  assertEquals(
    isValidBST(valid3, (a: number, b: number) => {
      return a - b;
    }),
    true
  );
});

Deno.test("P57: isValidBST - invalid BSTs", () => {
  const invalid1 = node(5, leaf(7), leaf(3)); // Wrong order
  assertEquals(
    isValidBST(invalid1, (a, b) => a - b),
    false
  );

  const invalid2 = node(
    5,
    node(3, leaf(4), leaf(2)), // 4 > 3, but 4 is in left subtree of 5
    leaf(7)
  );
  assertEquals(
    isValidBST(invalid2, (a, b) => a - b),
    false
  );
});

Deno.test("P57: inorder - traversal order", () => {
  const tree = construct([3, 2, 5, 7, 1]);
  const values = inorder(tree);
  assertEquals(values, [1, 2, 3, 5, 7]); // Should be sorted
});

Deno.test("P57: search - find existing values", () => {
  const tree = construct([3, 2, 5, 7, 1]);

  assertEquals(
    search(3, tree, (a, b) => a - b),
    true
  );
  assertEquals(
    search(2, tree, (a, b) => a - b),
    true
  );
  assertEquals(
    search(5, tree, (a, b) => a - b),
    true
  );
  assertEquals(
    search(7, tree, (a, b) => a - b),
    true
  );
  assertEquals(
    search(1, tree, (a, b) => a - b),
    true
  );
});

Deno.test("P57: search - find non-existing values", () => {
  const tree = construct([3, 2, 5, 7, 1]);

  assertEquals(
    search(4, tree, (a, b) => a - b),
    false
  );
  assertEquals(
    search(0, tree, (a, b) => a - b),
    false
  );
  assertEquals(
    search(8, tree, (a, b) => a - b),
    false
  );
});

Deno.test("P57: search - empty tree", () => {
  assertEquals(
    search(5, null, (a, b) => a - b),
    false
  );
});
