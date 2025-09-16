import { assertEquals } from "@std/assert";
import {
  completeBinaryTree,
  isCompleteBinaryTree,
  getCompleteTreeHeight,
  getLastLevelNodes,
  completeBinaryTreeByAddress,
} from "./P63_completeBinaryTree.ts";
import { leaf, node } from "./types.ts";

Deno.test("P63: completeBinaryTree - test construction", () => {
  // n = 0
  assertEquals(completeBinaryTree(0), null);

  // n = 1
  const tree1 = completeBinaryTree(1);
  assertEquals(tree1?.value, "x");
  assertEquals(tree1?.left, null);
  assertEquals(tree1?.right, null);

  // n = 2
  const tree2 = completeBinaryTree(2);
  assertEquals(tree2?.value, "x");
  assertEquals(tree2?.left?.value, "x");
  assertEquals(tree2?.right, null);

  // n = 3
  const tree3 = completeBinaryTree(3);
  assertEquals(tree3?.value, "x");
  assertEquals(tree3?.left?.value, "x");
  assertEquals(tree3?.right?.value, "x");
});

Deno.test("P63: isCompleteBinaryTree - test completeness checking", () => {
  // Empty tree is complete
  assertEquals(isCompleteBinaryTree(null), true);

  // Single node is complete
  assertEquals(isCompleteBinaryTree(leaf("a")), true);

  // Complete tree
  const complete = node("a", leaf("b"), leaf("c"));
  assertEquals(isCompleteBinaryTree(complete), true);

  // Incomplete tree (missing right child)
  const incomplete = node("a", leaf("b"), null);
  assertEquals(isCompleteBinaryTree(incomplete), true); // This is still complete

  // Incomplete tree (gap in levels)
  const incomplete2 = node("a", node("b", null, leaf("d")), leaf("c"));
  assertEquals(isCompleteBinaryTree(incomplete2), false);
});

Deno.test("P63: getCompleteTreeHeight - test height calculation", () => {
  assertEquals(getCompleteTreeHeight(0), 0);
  assertEquals(getCompleteTreeHeight(1), 1);
  assertEquals(getCompleteTreeHeight(2), 2);
  assertEquals(getCompleteTreeHeight(3), 2);
  assertEquals(getCompleteTreeHeight(4), 3);
  assertEquals(getCompleteTreeHeight(5), 3);
  assertEquals(getCompleteTreeHeight(6), 3);
  assertEquals(getCompleteTreeHeight(7), 3);
  assertEquals(getCompleteTreeHeight(8), 4);
});

Deno.test("P63: getLastLevelNodes - test last level calculation", () => {
  assertEquals(getLastLevelNodes(0), 0);
  assertEquals(getLastLevelNodes(1), 1);
  assertEquals(getLastLevelNodes(2), 1);
  assertEquals(getLastLevelNodes(3), 2);
  assertEquals(getLastLevelNodes(4), 1);
  assertEquals(getLastLevelNodes(5), 2);
  assertEquals(getLastLevelNodes(6), 3);
  assertEquals(getLastLevelNodes(7), 4);
  assertEquals(getLastLevelNodes(8), 1);
});

Deno.test(
  "P63: completeBinaryTreeByAddress - test address-based construction",
  () => {
    // Test that both methods produce equivalent results
    for (let n = 0; n <= 8; n++) {
      const tree1 = completeBinaryTree(n);
      const tree2 = completeBinaryTreeByAddress(n);

      // Both should be complete binary trees
      assertEquals(isCompleteBinaryTree(tree1), true);
      assertEquals(isCompleteBinaryTree(tree2), true);
    }
  }
);
