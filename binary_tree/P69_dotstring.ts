/**
 * P69 (**) Dotstring representation of binary trees
 *
 * We consider again binary trees with nodes that are identified by single lower-case
 * letters, as in the example of problem P67. Such a tree can be represented by the
 * preorder sequence of its nodes in which dots (.) are inserted where an empty subtree
 * (nil) is encountered during the tree traversal. For example, the tree shown in
 * problem P67 is represented as 'abd..e..c.fg...'. First, try to establish a syntax
 * (BNF or syntax diagrams) and then write a predicate tree_dotstring/2 which does the
 * conversion in both directions. Use difference lists.
 */

import { BinaryTree } from "./types.ts";

/**
 * Convert a binary tree to dotstring representation
 */
export function treeToDotstring<T>(tree: BinaryTree<T>): string {
  return "";
}

/**
 * Parse a dotstring representation to binary tree
 */
export function dotstringToTree(str: string): BinaryTree<string> {
  return null;
}

/**
 * Combined predicate that works in both directions
 */
export function treeDotstring<T>(tree: BinaryTree<T>): string;
export function treeDotstring(str: string): BinaryTree<string>;
export function treeDotstring<T>(
  input: BinaryTree<T> | string
): string | BinaryTree<string> {
  return typeof input === "string" ? null : "";
}

/**
 * Convert tree to dotstring using difference lists
 */
export function treeToDotstringDlist<T>(tree: BinaryTree<T>): string[] {
  return [];
}

/**
 * Convert dotstring to tree using difference lists
 */
export function dotstringToTreeDlist<T>(list: string[]): BinaryTree<string> {
  return null;
}

/**
 * Combined predicate using difference lists
 */
export function treeDotstringDlist<T>(tree: BinaryTree<T>): string[];
export function treeDotstringDlist(list: string[]): BinaryTree<string>;
export function treeDotstringDlist<T>(
  input: BinaryTree<T> | string[]
): string[] | BinaryTree<string> {
  return Array.isArray(input) ? null : [];
}

/**
 * Validate dotstring format
 */
export function isValidDotstring(str: string): boolean {
  return false;
}

/**
 * Get the number of nodes from dotstring
 */
export function getDotstringNodeCount(str: string): number {
  return 0;
}

/**
 * Get the depth of tree from dotstring
 */
export function getDotstringDepth(str: string): number {
  return 0;
}

/**
 * Convert dotstring to preorder sequence
 */
export function dotstringToPreorder(str: string): string[] {
  return [];
}

/**
 * Convert preorder sequence to dotstring
 */
export function preorderToDotstring<T>(sequence: T[]): string {
  return "";
}
