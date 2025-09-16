/**
 * P55 (**) Construct completely balanced binary trees
 *
 * In a completely balanced binary tree, the following property holds for every node:
 * The number of nodes in its left subtree and the number of nodes in its right subtree
 * are almost equal, which means their difference is not greater than one.
 *
 * Write a predicate cbal_tree/2 to construct completely balanced binary trees for a
 * given number of nodes. The predicate should generate all solutions via backtracking.
 * Put the letter 'x' as information into all nodes of the tree.
 *
 * Example:
 * ?- cbal_tree(4,T).
 * T = t(x, t(x, nil, nil), t(x, nil, t(x, nil, nil))) ;
 * T = t(x, t(x, nil, nil), t(x, t(x, nil, nil), nil)) ;
 * etc......No
 */

import { BinaryTree } from "./types.ts";

export function cbalTree(n: number): BinaryTree<string>[] {
  if (n === 0) return [null as any];

  if (n === 1) return [new BinaryTree("x", null, null)];

  const balancedTrees: BinaryTree<string>[] = [];

  let rightNodes, leftSubTrees, rightSubTrees;
  for (let leftNodes = 0; leftNodes <= n - 1; leftNodes++) {
    rightNodes = n - 1 - leftNodes;

    // ignoring split leading to unbalanced trees
    // for example if we have 10 nodes to place, 2 nodes to left + 8 nodes to right => unbalanced
    if (Math.abs(leftNodes - rightNodes) <= 1) {
      leftSubTrees = cbalTree(leftNodes);
      rightSubTrees = cbalTree(rightNodes);

      for (const leftTree of leftSubTrees) {
        for (const rightTree of rightSubTrees) {
          const tree = new BinaryTree("x", leftTree, rightTree);
          balancedTrees.push(tree);
        }
      }
    }
  }

  return balancedTrees;
}

/**
 * Helper function to count nodes in a tree
 */
export function countNodes<T>(tree: BinaryTree<T>): number {
  return (
    1 +
    (tree.left ? countNodes(tree.left) : 0) +
    (tree.right ? countNodes(tree.right) : 0)
  );
}

/**
 * Helper function to check if a tree is completely balanced
 */
export function isCompletelyBalanced<T>(tree: BinaryTree<T>): boolean {
  const leftNodes = tree.left ? countNodes(tree.left) : 0;
  const rightNodes = tree.right ? countNodes(tree.right) : 0;

  return leftNodes - rightNodes <= 1;
}
