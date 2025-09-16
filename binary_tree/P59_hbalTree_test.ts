import { assertEquals } from "@std/assert";
import {
  height,
  isHeightBalanced,
  hbalTree,
  hbalTreeEfficient,
  countHbalTrees,
} from "./P59_hbalTree.ts";
import { leaf, node } from "./types.ts";

Deno.test("P59: height - test height calculation", () => {
  assertEquals(height(null), 0);
  assertEquals(height(leaf("a")), 1);
  assertEquals(height(node("a", leaf("b"), null)), 2);
  assertEquals(height(node("a", null, leaf("c"))), 2);
  assertEquals(height(node("a", leaf("b"), leaf("c"))), 2);

  // More complex tree
  const complex = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(height(complex), 3);
});

Deno.test("P59: isHeightBalanced - test balance checking", () => {
  // Empty tree is balanced
  assertEquals(isHeightBalanced(null), true);

  // Single node is balanced
  assertEquals(isHeightBalanced(leaf("a")), true);

  // Tree with height difference 0
  assertEquals(isHeightBalanced(node("a", leaf("b"), leaf("c"))), true);

  // Tree with height difference 1
  assertEquals(isHeightBalanced(node("a", leaf("b"), null)), true);
  assertEquals(isHeightBalanced(node("a", null, leaf("c"))), true);

  // Unbalanced tree
  const unbalanced = node(
    "a",
    node("b", node("c", leaf("d"), null), null),
    null
  );
  assertEquals(isHeightBalanced(unbalanced), false);
});

Deno.test("P59: hbalTree - edge cases", () => {
  // h < 0
  assertEquals(hbalTree(-1), []);

  // h = 0
  const trees0 = hbalTree(0);
  assertEquals(trees0.length, 1);
  assertEquals(trees0[0], null);

  // h = 1
  const trees1 = hbalTree(1);
  assertEquals(trees1.length, 1);
  assertEquals(trees1[0]?.value, "x");
  assertEquals(height(trees1[0]), 1);
});

Deno.test("P59: hbalTree - small heights", () => {
  // h = 2
  const trees2 = hbalTree(2);
  assertEquals(trees2.length, 2);

  for (const tree of trees2) {
    assertEquals(height(tree), 2);
    assertEquals(isHeightBalanced(tree), true);
  }

  // h = 3
  const trees3 = hbalTree(3);
  assertEquals(trees3.length, 4);

  for (const tree of trees3) {
    assertEquals(height(tree), 3);
    assertEquals(isHeightBalanced(tree), true);
  }
});

Deno.test("P59: hbalTree - verify all trees are height-balanced", () => {
  for (let h = 0; h <= 5; h++) {
    const trees = hbalTree(h);

    for (const tree of trees) {
      assertEquals(height(tree), h);
      assertEquals(isHeightBalanced(tree), true);
    }
  }
});

Deno.test(
  "P59: hbalTreeEfficient - compare with regular implementation",
  () => {
    for (let h = 0; h <= 4; h++) {
      const trees1 = hbalTree(h);
      const trees2 = hbalTreeEfficient(h);

      assertEquals(trees1.length, trees2.length);

      // Both should produce the same number of trees
      // (though the order might be different)
    }
  }
);

Deno.test("P59: countHbalTrees - test counting", () => {
  assertEquals(countHbalTrees(0), 1);
  assertEquals(countHbalTrees(1), 1);
  assertEquals(countHbalTrees(2), 2);
  assertEquals(countHbalTrees(3), 4);
  assertEquals(countHbalTrees(4), 8);
  assertEquals(countHbalTrees(5), 16);
});

Deno.test("P59: specific examples from problem", () => {
  // Test the specific example from the problem (h = 3)
  const trees3 = hbalTree(3);
  assertEquals(trees3.length, 4);

  // All trees should have height 3
  for (const tree of trees3) {
    assertEquals(height(tree), 3);
    assertEquals(isHeightBalanced(tree), true);
  }

  // All trees should have 'x' as values
  for (const tree of trees3) {
    if (tree !== null) {
      assertEquals(tree.value, "x");
    }
  }
});

Deno.test("P59: height-balanced vs completely balanced", () => {
  // A height-balanced tree is not necessarily completely balanced
  const heightBalanced = node(
    "a",
    node("b", leaf("c"), null),
    node("d", leaf("e"), leaf("f"))
  );

  assertEquals(isHeightBalanced(heightBalanced), true);
  assertEquals(height(heightBalanced), 3);

  // This tree is height-balanced but not completely balanced
  // (left subtree has 2 nodes, right subtree has 3 nodes)
});
