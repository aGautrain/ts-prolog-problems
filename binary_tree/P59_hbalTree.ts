/**
 * P59 (**) Construct height-balanced binary trees
 *
 * In a height-balanced binary tree, the following property holds for every node:
 * The height of its left subtree and the height of its right subtree are almost
 * equal, which means their difference is not greater than one.
 *
 * Write a predicate hbal_tree/2 to construct height-balanced binary trees for a
 * given height. The predicate should generate all solutions via backtracking.
 * Put the letter 'x' as information into all nodes of the tree.
 *
 * Example:
 * ?- hbal_tree(3,T).
 * T = t(x, t(x, t(x, nil, nil), t(x, nil, nil)), t(x, t(x, nil, nil), t(x, nil, nil))) ;
 * T = t(x, t(x, t(x, nil, nil), t(x, nil, nil)), t(x, t(x, nil, nil), nil)) ;
 * etc......No
 */

import { BinaryTree, leaf, node } from "./types.ts";

/**
 * Calculate the height of a binary tree
 */
export function height<T>(tree: BinaryTree<T>): number {
  return 0;
}

/**
 * Check if a tree is height-balanced
 */
export function isHeightBalanced<T>(tree: BinaryTree<T>): boolean {
  return false;
}

/**
 * Construct all height-balanced binary trees of a given height
 */
export function hbalTree(h: number): BinaryTree<string>[] {
  return [];
}

/**
 * Alternative implementation that's more efficient
 */
export function hbalTreeEfficient(h: number): BinaryTree<string>[] {
  return [];
}

/**
 * Count the number of height-balanced trees of a given height
 */
export function countHbalTrees(h: number): number {
  return 0;
}
