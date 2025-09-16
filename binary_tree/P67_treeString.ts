/**
 * P67 (**) A string representation of binary trees
 *
 * Somebody represents binary trees as strings of the following type (see example opposite):
 *
 * a(b(d,e),c(,f(g,)))
 *
 * a) Write a Prolog predicate which generates this string representation, if the tree is
 *    given as usual (as nil or t(X,L,R) term). Then write a predicate which does this
 *    inverse; i.e. given the string representation, construct the tree in the usual form.
 *    Finally, combine the two predicates in a single predicate tree_string/2 which can
 *    be used in both directions.
 *
 * b) Write the same predicate tree_string/2 using difference lists and a single predicate
 *    tree_dlist/2 which does the conversion between a tree and a difference list in both
 *    directions.
 *
 * For simplicity, suppose the information in the nodes is a single letter and there are
 * no spaces in the string.
 */

import { BinaryTree } from "./types.ts";

/**
 * Convert a binary tree to string representation
 */
export function treeToString<T>(tree: BinaryTree<T>): string {
  return "";
}

/**
 * Parse a string representation to binary tree
 */
export function stringToTree(str: string): BinaryTree<string> {
  return null;
}

/**
 * Combined predicate that works in both directions
 */
export function treeString<T>(tree: BinaryTree<T>): string;
export function treeString(str: string): BinaryTree<string>;
export function treeString<T>(
  input: BinaryTree<T> | string
): string | BinaryTree<string> {
  return typeof input === "string" ? null : "";
}

/**
 * Convert tree to difference list representation
 */
export function treeToDifferenceList<T>(tree: BinaryTree<T>): string[] {
  return [];
}

/**
 * Convert difference list to tree
 */
export function differenceListToTree<T>(list: string[]): BinaryTree<string> {
  return null;
}

/**
 * Combined predicate using difference lists
 */
export function treeDlist<T>(tree: BinaryTree<T>): string[];
export function treeDlist(list: string[]): BinaryTree<string>;
export function treeDlist<T>(
  input: BinaryTree<T> | string[]
): string[] | BinaryTree<string> {
  return Array.isArray(input) ? null : [];
}

/**
 * Validate string representation format
 */
export function isValidTreeString(str: string): boolean {
  return false;
}

/**
 * Get the depth of a tree from its string representation
 */
export function getStringTreeDepth(str: string): number {
  return 0;
}
