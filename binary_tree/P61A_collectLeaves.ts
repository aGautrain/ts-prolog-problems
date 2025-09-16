/**
 * P61A (*) Collect the leaves of a binary tree in a list
 *
 * A leaf is a node with no successors. Write a predicate leaves/2 to collect them in a list.
 *
 * % leaves(T,S) :- S is the list of all leaves of the binary tree T
 */

import { BinaryTree } from "./types.ts";

/**
 * Collect all leaves of a binary tree in a list
 */
export function leaves<T>(tree: BinaryTree<T>): T[] {
  return [];
}

/**
 * Collect all internal nodes (non-leaves) of a binary tree in a list
 */
export function internals<T>(tree: BinaryTree<T>): T[] {
  return [];
}

/**
 * Collect all nodes of a binary tree in a list (inorder traversal)
 */
export function nodes<T>(tree: BinaryTree<T>): T[] {
  return [];
}

/**
 * Collect all nodes of a binary tree in a list (preorder traversal)
 */
export function preorder<T>(tree: BinaryTree<T>): T[] {
  return [];
}

/**
 * Collect all nodes of a binary tree in a list (postorder traversal)
 */
export function postorder<T>(tree: BinaryTree<T>): T[] {
  return [];
}
