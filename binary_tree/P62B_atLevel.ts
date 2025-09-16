/**
 * P62B (*) Collect the nodes at a given level in a list
 *
 * A node of a binary tree is at level N if the path from the root to the node has
 * length N-1. The root node is at level 1. Write a predicate atlevel/3 to collect
 * all nodes at a given level in a list.
 *
 * % atlevel(T,L,S) :- S is the list of nodes of the binary tree T at level L
 *
 * Using atlevel/3 it is easy to construct a predicate levelorder/2 which creates
 * the level-order sequence of the nodes. However, there are more efficient ways
 * to do that.
 */

import { BinaryTree } from "./types.ts";

/**
 * Collect all nodes at a given level in a list
 */
export function atLevel<T>(tree: BinaryTree<T>, level: number): T[] {
  return [];
}

/**
 * Create the level-order sequence of the nodes
 */
export function levelOrder<T>(tree: BinaryTree<T>): T[] {
  return [];
}

/**
 * Get the depth of a node in the tree
 */
export function getNodeDepth<T>(tree: BinaryTree<T>, targetValue: T): number {
  return 0;
}

/**
 * Get all nodes at a specific depth
 */
export function getNodesAtDepth<T>(tree: BinaryTree<T>, depth: number): T[] {
  return [];
}
