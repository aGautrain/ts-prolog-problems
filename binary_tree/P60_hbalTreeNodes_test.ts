import { assertEquals } from "@std/assert";
import {
  minNodes,
  maxNodes,
  maxHeight,
  minHeight,
  hbalTreeNodes,
  countHbalTreeNodes,
  canFormHbalTree,
} from "./P60_hbalTreeNodes.ts";
import { height, isHeightBalanced } from "./P59_hbalTree.ts";

Deno.test("P60: minNodes - test minimum nodes calculation", () => {
  assertEquals(minNodes(0), 0);
  assertEquals(minNodes(1), 1);
  assertEquals(minNodes(2), 2);
  assertEquals(minNodes(3), 4);
  assertEquals(minNodes(4), 7);
  assertEquals(minNodes(5), 12);
});

Deno.test("P60: maxNodes - test maximum nodes calculation", () => {
  assertEquals(maxNodes(0), 0);
  assertEquals(maxNodes(1), 1);
  assertEquals(maxNodes(2), 3);
  assertEquals(maxNodes(3), 7);
  assertEquals(maxNodes(4), 15);
  assertEquals(maxNodes(5), 31);
});

Deno.test("P60: maxHeight - test maximum height calculation", () => {
  assertEquals(maxHeight(0), 0);
  assertEquals(maxHeight(1), 1);
  assertEquals(maxHeight(2), 2);
  assertEquals(maxHeight(3), 2);
  assertEquals(maxHeight(4), 3);
  assertEquals(maxHeight(5), 3);
  assertEquals(maxHeight(6), 3);
  assertEquals(maxHeight(7), 3);
  assertEquals(maxHeight(8), 4);
});

Deno.test("P60: minHeight - test minimum height calculation", () => {
  assertEquals(minHeight(0), 0);
  assertEquals(minHeight(1), 1);
  assertEquals(minHeight(2), 2);
  assertEquals(minHeight(3), 2);
  assertEquals(minHeight(4), 3);
  assertEquals(minHeight(5), 3);
  assertEquals(minHeight(6), 3);
  assertEquals(minHeight(7), 3);
  assertEquals(minHeight(8), 4);
});

Deno.test("P60: hbalTreeNodes - edge cases", () => {
  // n = 0
  const trees0 = hbalTreeNodes(0);
  assertEquals(trees0.length, 1);
  assertEquals(trees0[0], null);

  // n = 1
  const trees1 = hbalTreeNodes(1);
  assertEquals(trees1.length, 1);
  assertEquals(trees1[0]?.value, "x");
  assertEquals(height(trees1[0]), 1);
  assertEquals(isHeightBalanced(trees1[0]), true);

  // n < 0
  assertEquals(hbalTreeNodes(-1), []);
});

Deno.test("P60: hbalTreeNodes - small trees", () => {
  // n = 2
  const trees2 = hbalTreeNodes(2);
  assertEquals(trees2.length, 1);
  assertEquals(height(trees2[0]), 2);
  assertEquals(isHeightBalanced(trees2[0]), true);

  // n = 3
  const trees3 = hbalTreeNodes(3);
  assertEquals(trees3.length, 1);
  assertEquals(height(trees3[0]), 2);
  assertEquals(isHeightBalanced(trees3[0]), true);

  // n = 4
  const trees4 = hbalTreeNodes(4);
  assertEquals(trees4.length, 4);

  for (const tree of trees4) {
    assertEquals(height(tree), 3);
    assertEquals(isHeightBalanced(tree), true);
  }
});

Deno.test("P60: hbalTreeNodes - verify all trees are height-balanced", () => {
  for (let n = 0; n <= 8; n++) {
    const trees = hbalTreeNodes(n);

    for (const tree of trees) {
      assertEquals(isHeightBalanced(tree), true);
    }
  }
});

Deno.test("P60: countHbalTreeNodes - test counting", () => {
  assertEquals(countHbalTreeNodes(0), 1);
  assertEquals(countHbalTreeNodes(1), 1);
  assertEquals(countHbalTreeNodes(2), 1);
  assertEquals(countHbalTreeNodes(3), 1);
  assertEquals(countHbalTreeNodes(4), 4);
  assertEquals(countHbalTreeNodes(5), 4);
  assertEquals(countHbalTreeNodes(6), 4);
  assertEquals(countHbalTreeNodes(7), 1);
  assertEquals(countHbalTreeNodes(8), 8);
});

Deno.test("P60: canFormHbalTree - test feasibility", () => {
  assertEquals(canFormHbalTree(0), true);
  assertEquals(canFormHbalTree(1), true);
  assertEquals(canFormHbalTree(2), true);
  assertEquals(canFormHbalTree(3), true);
  assertEquals(canFormHbalTree(4), true);
  assertEquals(canFormHbalTree(5), true);
  assertEquals(canFormHbalTree(6), true);
  assertEquals(canFormHbalTree(7), true);
  assertEquals(canFormHbalTree(8), true);
  assertEquals(canFormHbalTree(-1), false);
});

Deno.test("P60: specific example from problem", () => {
  // Find out how many height-balanced trees exist for N = 15
  const count15 = countHbalTreeNodes(15);
  assertEquals(count15 > 0, true);

  // Verify that all trees with 15 nodes are height-balanced
  const trees15 = hbalTreeNodes(15);
  for (const tree of trees15) {
    assertEquals(isHeightBalanced(tree), true);
  }
});

Deno.test("P60: height and node count relationship", () => {
  for (let n = 1; n <= 10; n++) {
    const trees = hbalTreeNodes(n);

    for (const tree of trees) {
      const treeHeight = height(tree);
      const minH = minHeight(n);
      const maxH = maxHeight(n);

      assertEquals(treeHeight >= minH, true);
      assertEquals(treeHeight <= maxH, true);
    }
  }
});

Deno.test("P60: minNodes and maxNodes relationship", () => {
  for (let h = 0; h <= 10; h++) {
    const min = minNodes(h);
    const max = maxNodes(h);

    assertEquals(min <= max, true);

    if (h > 0) {
      assertEquals(min > 0, true);
      assertEquals(max > 0, true);
    }
  }
});
