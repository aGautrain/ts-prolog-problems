/**
 * P60 (**) Construct height-balanced binary trees with a given number of nodes
 *
 * Consider a height-balanced binary tree of height H. What is the maximum number
 * of nodes it can contain?
 * Clearly, MaxN = 2**H - 1. However, what is the minimum number MinN? This question
 * is more difficult. Try to find a recursive statement and turn it into a predicate
 * minNodes/2 defined as follows:
 *
 * % minNodes(H,N) :- N is the minimum number of nodes in a height-balanced binary tree of height H.
 * (integer,integer), (+,?)
 *
 * On the other hand, we might ask: what is the maximum height H a height-balanced
 * binary tree with N nodes can have?
 *
 * % maxHeight(N,H) :- H is the maximum height of a height-balanced binary tree with N nodes
 * (integer,integer), (+,?)
 *
 * Now, we can attack the main problem: construct all the height-balanced binary trees
 * with a given number of nodes.
 *
 * % hbal_tree_nodes(N,T) :- T is a height-balanced binary tree with N nodes.
 *
 * Find out how many height-balanced trees exist for N = 15.
 */

import { BinaryTree, leaf, node } from "./types.ts";
import { height, isHeightBalanced } from "./P59_hbalTree.ts";

/**
 * Calculate the minimum number of nodes in a height-balanced tree of height H
 */
export function minNodes(h: number): number {
  return 0;
}

/**
 * Calculate the maximum number of nodes in a height-balanced tree of height H
 */
export function maxNodes(h: number): number {
  return 0;
}

/**
 * Calculate the maximum height of a height-balanced tree with N nodes
 */
export function maxHeight(n: number): number {
  return 0;
}

/**
 * Calculate the minimum height of a height-balanced tree with N nodes
 */
export function minHeight(n: number): number {
  return 0;
}

/**
 * Construct all height-balanced binary trees with exactly N nodes
 */
export function hbalTreeNodes(n: number): BinaryTree<string>[] {
  return [];
}

/**
 * Generate all height-balanced trees of a specific height with a specific number of nodes
 */
function generateHbalTreesOfHeight(h: number, n: number): BinaryTree<string>[] {
  return [];
}

/**
 * Count the number of height-balanced trees with N nodes
 */
export function countHbalTreeNodes(n: number): number {
  return 0;
}

/**
 * Check if a given number of nodes can form a height-balanced tree
 */
export function canFormHbalTree(n: number): boolean {
  return false;
}
