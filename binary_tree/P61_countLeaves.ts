/**
 * P61 (*) Count the leaves of a binary tree
 *
 * A leaf is a node with no successors. Write a predicate count_leaves/2 to count them.
 *
 * % count_leaves(T,N) :- the binary tree T has N leaves
 */

import { BinaryTree } from "./types.ts";

/**
 * Count the number of leaves in a binary tree
 */
export function countLeaves<T>(tree: BinaryTree<T>): number {
  return 0;
}

/**
 * Check if a node is a leaf
 */
export function isLeaf<T>(tree: BinaryTree<T>): boolean {
  return false;
}

/**
 * Count the number of internal nodes (non-leaves) in a binary tree
 */
export function countInternalNodes<T>(tree: BinaryTree<T>): number {
  return 0;
}

/**
 * Get the total number of nodes in a binary tree
 */
export function countNodes<T>(tree: BinaryTree<T>): number {
  return 0;
}
