import { assertEquals } from "https://deno.land/std@0.208.0/assert/mod.ts";
import { cbalTree, countNodes, isCompletelyBalanced } from "./P55_cbalTree.ts";
import { BinaryTree } from "./types.ts";
import { isTree } from "./P54_isTree.ts";

Deno.test("countNodes - single node", () => {
  const tree = new BinaryTree("x", null, null);
  assertEquals(countNodes(tree), 1);
});

Deno.test("countNodes - tree with left child only", () => {
  const leftChild = new BinaryTree("x", null, null);
  const tree = new BinaryTree("x", leftChild, null);
  assertEquals(countNodes(tree), 2);
});

Deno.test("countNodes - tree with right child only", () => {
  const rightChild = new BinaryTree("x", null, null);
  const tree = new BinaryTree("x", null, rightChild);
  assertEquals(countNodes(tree), 2);
});

Deno.test("countNodes - tree with both children", () => {
  const leftChild = new BinaryTree("x", null, null);
  const rightChild = new BinaryTree("x", null, null);
  const tree = new BinaryTree("x", leftChild, rightChild);
  assertEquals(countNodes(tree), 3);
});

Deno.test("countNodes - complex tree", () => {
  // Create a tree: root -> (left -> (left.left, left.right), right)
  const leftLeft = new BinaryTree("x", null, null);
  const leftRight = new BinaryTree("x", null, null);
  const left = new BinaryTree("x", leftLeft, leftRight);
  const right = new BinaryTree("x", null, null);
  const tree = new BinaryTree("x", left, right);
  assertEquals(countNodes(tree), 5);
});

Deno.test("countNodes - deep tree", () => {
  // Create a deep tree: root -> left -> left.left -> left.left.left
  const leftLeftLeft = new BinaryTree("x", null, null);
  const leftLeft = new BinaryTree("x", leftLeftLeft, null);
  const left = new BinaryTree("x", leftLeft, null);
  const tree = new BinaryTree("x", left, null);
  assertEquals(countNodes(tree), 4);
});

Deno.test("isCompletelyBalanced - single node", () => {
  const tree = new BinaryTree("x", null, null);
  assertEquals(isCompletelyBalanced(tree), true);
});

Deno.test("isCompletelyBalanced - tree with left child only", () => {
  const leftChild = new BinaryTree("x", null, null);
  const tree = new BinaryTree("x", leftChild, null);
  assertEquals(isCompletelyBalanced(tree), true);
});

Deno.test("isCompletelyBalanced - tree with right child only", () => {
  const rightChild = new BinaryTree("x", null, null);
  const tree = new BinaryTree("x", null, rightChild);
  assertEquals(isCompletelyBalanced(tree), true);
});

Deno.test("isCompletelyBalanced - tree with both children (balanced)", () => {
  const leftChild = new BinaryTree("x", null, null);
  const rightChild = new BinaryTree("x", null, null);
  const tree = new BinaryTree("x", leftChild, rightChild);
  assertEquals(isCompletelyBalanced(tree), true);
});

Deno.test("isCompletelyBalanced - tree with both children (unbalanced)", () => {
  // Left subtree has 2 nodes, right subtree has 0 nodes
  const leftLeft = new BinaryTree("x", null, null);
  const left = new BinaryTree("x", leftLeft, null);
  const tree = new BinaryTree("x", left, null);
  assertEquals(isCompletelyBalanced(tree), false);
});

Deno.test("isCompletelyBalanced - complex balanced tree", () => {
  // Left subtree: 2 nodes, Right subtree: 2 nodes
  const leftLeft = new BinaryTree("x", null, null);
  const left = new BinaryTree("x", leftLeft, null);
  const rightRight = new BinaryTree("x", null, null);
  const right = new BinaryTree("x", null, rightRight);
  const tree = new BinaryTree("x", left, right);
  assertEquals(isCompletelyBalanced(tree), true);
});

Deno.test("isCompletelyBalanced - complex unbalanced tree", () => {
  // Left subtree: 3 nodes, Right subtree: 1 node
  const leftLeft = new BinaryTree("x", null, null);
  const leftRight = new BinaryTree("x", null, null);
  const left = new BinaryTree("x", leftLeft, leftRight);
  const right = new BinaryTree("x", null, null);
  const tree = new BinaryTree("x", left, right);
  assertEquals(isCompletelyBalanced(tree), false);
});

Deno.test("isCompletelyBalanced - edge case with difference of 1", () => {
  // Left subtree: 2 nodes, Right subtree: 1 node (difference = 1, should be balanced)
  const leftLeft = new BinaryTree("x", null, null);
  const left = new BinaryTree("x", leftLeft, null);
  const right = new BinaryTree("x", null, null);
  const tree = new BinaryTree("x", left, right);
  assertEquals(isCompletelyBalanced(tree), true);
});

Deno.test("isCompletelyBalanced - edge case with difference of 2", () => {
  // Left subtree: 3 nodes, Right subtree: 1 node (difference = 2, should be unbalanced)
  const leftLeft = new BinaryTree("x", null, null);
  const leftRight = new BinaryTree("x", null, null);
  const left = new BinaryTree("x", leftLeft, leftRight);
  const right = new BinaryTree("x", null, null);
  const tree = new BinaryTree("x", left, right);
  assertEquals(isCompletelyBalanced(tree), false);
});

// Tests for cbalTree function
Deno.test("cbalTree - n = 0 (edge case)", () => {
  const trees = cbalTree(0).filter((_) => isTree(_));
  assertEquals(trees.length, 0);
});

Deno.test("cbalTree - n = 1", () => {
  const trees = cbalTree(1);
  assertEquals(trees.length, 1);

  const tree = trees[0];
  assertEquals(countNodes(tree), 1);
  assertEquals(isCompletelyBalanced(tree), true);
  assertEquals(tree.value, "x");
  assertEquals(tree.left, null);
  assertEquals(tree.right, null);
});

Deno.test("cbalTree - n = 2", () => {
  const trees = cbalTree(2);
  assertEquals(trees.length, 2);

  // All generated trees should have exactly 2 nodes
  trees.forEach((tree) => {
    assertEquals(countNodes(tree), 2);
    assertEquals(isCompletelyBalanced(tree), true);
    assertEquals(tree.value, "x");
  });
});

Deno.test("cbalTree - n = 3", () => {
  const trees = cbalTree(3);
  assertEquals(trees.length, 1);

  const tree = trees[0];
  assertEquals(countNodes(tree), 3);
  assertEquals(isCompletelyBalanced(tree), true);
  assertEquals(tree.value, "x");
  assertEquals(tree.left !== null, true);
  assertEquals(tree.right !== null, true);
});

Deno.test("cbalTree - n = 4", () => {
  const trees = cbalTree(4);
  assertEquals(trees.length, 4);

  // each dot could be a x, keeeping tree balanced
  //    x
  //  x   x
  // . .  . .

  // All generated trees should have exactly 4 nodes
  trees.forEach((tree) => {
    assertEquals(countNodes(tree), 4);
    assertEquals(isCompletelyBalanced(tree), true);
    assertEquals(tree.value, "x");
  });
});

Deno.test("cbalTree - n = 5", () => {
  const trees = cbalTree(5);

  trees.forEach((tree) => {
    assertEquals(countNodes(tree), 5);
    assertEquals(isCompletelyBalanced(tree), true);
    assertEquals(tree.value, "x");
  });
});

Deno.test("cbalTree - n = 6", () => {
  const trees = cbalTree(6);

  trees.forEach((tree) => {
    assertEquals(countNodes(tree), 6);
    assertEquals(isCompletelyBalanced(tree), true);
    assertEquals(tree.value, "x");
  });
});

Deno.test("cbalTree - n = 7", () => {
  const trees = cbalTree(7);

  trees.forEach((tree) => {
    assertEquals(countNodes(tree), 7);
    assertEquals(isCompletelyBalanced(tree), true);
    assertEquals(tree.value, "x");
  });
});

Deno.test("cbalTree - n = 8", () => {
  const trees = cbalTree(8);

  trees.forEach((tree) => {
    assertEquals(countNodes(tree), 8);
    assertEquals(isCompletelyBalanced(tree), true);
    assertEquals(tree.value, "x");
  });
});

Deno.test("cbalTree - all trees are completely balanced", () => {
  // Test for various values of n that all generated trees are completely balanced
  for (let n = 1; n <= 10; n++) {
    const trees = cbalTree(n);

    trees.forEach((tree) => {
      assertEquals(
        countNodes(tree),
        n,
        `Tree with ${n} nodes should have exactly ${n} nodes`
      );
      assertEquals(
        isCompletelyBalanced(tree),
        true,
        `Tree with ${n} nodes should be completely balanced`
      );
      assertEquals(tree.value, "x", `All nodes should have value 'x'`);
    });
  }
});

Deno.test("cbalTree - all nodes have value 'x'", () => {
  const trees = cbalTree(5);
  const tree = trees[0];

  function checkAllNodesHaveX<T>(tree: BinaryTree<T>): boolean {
    if (tree.value !== "x") return false;
    if (tree.left && !checkAllNodesHaveX(tree.left)) return false;
    if (tree.right && !checkAllNodesHaveX(tree.right)) return false;
    return true;
  }

  assertEquals(checkAllNodesHaveX(tree), true);
});
