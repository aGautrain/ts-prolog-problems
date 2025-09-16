/**
 * P56 (**) Symmetric binary trees
 *
 * Let us call a binary tree symmetric if you can draw a vertical line through the
 * root node and then the right subtree is the mirror image of the left subtree.
 * Write a predicate symmetric/1 to check whether a given binary tree is symmetric.
 * Hint: Write a predicate mirror/2 first to check whether one tree is the mirror
 * image of another. We are only interested in the structure, not in the contents
 * of the nodes.
 */

import { BinaryTree } from "./types.ts";

/**
 * Check whether one tree is the mirror image of another
 */
export function mirror<T>(tree1: BinaryTree<T>, tree2: BinaryTree<T>): boolean {
  return false;
}

/**
 * Check whether a given binary tree is symmetric
 */
export function symmetric<T>(tree: BinaryTree<T>): boolean {
  return false;
}

/**
 * Helper function to create a mirror of a tree
 */
export function createMirror<T>(tree: BinaryTree<T>): BinaryTree<T> {
  return null;
}
