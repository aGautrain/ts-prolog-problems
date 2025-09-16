/**
 * P62 (*) Collect the internal nodes of a binary tree in a list
 *
 * An internal node of a binary tree has either one or two non-empty successors.
 * Write a predicate internals/2 to collect them in a list.
 *
 * % internals(T,S) :- S is the list of internal nodes of the binary tree T.
 */

import { BinaryTree } from "./types.ts";

/**
 * Collect all internal nodes of a binary tree in a list
 * An internal node has either one or two non-empty successors
 */
export function internals<T>(tree: BinaryTree<T>): T[] {
  return [];
}

/**
 * Check if a node is an internal node
 */
export function isInternalNode<T>(tree: BinaryTree<T>): boolean {
  return false;
}

/**
 * Collect all internal nodes at a specific depth level
 */
export function internalsAtLevel<T>(tree: BinaryTree<T>, level: number): T[] {
  return [];
}

/**
 * Get the depth of a node in the tree
 */
export function getNodeDepth<T>(tree: BinaryTree<T>, targetValue: T): number {
  return 0;
}
