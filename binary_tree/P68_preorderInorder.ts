/**
 * P68 (**) Preorder and inorder sequences of binary trees
 *
 * We consider binary trees with nodes that are identified by single lower-case letters,
 * as in the example of problem P67.
 *
 * a) Write predicates preorder/2 and inorder/2 that construct the preorder and inorder
 *    sequence of a given binary tree, respectively. The results should be atoms, e.g.
 *    'abdecfg' for the preorder sequence of the example in problem P67.
 *
 * b) Can you use preorder/2 from problem part a) in the reverse direction; i.e. given
 *    a preorder sequence, construct a corresponding tree? If not, make the necessary
 *    arrangements.
 *
 * c) If both the preorder sequence and the inorder sequence of the nodes of a binary
 *    tree are determined unambiguously. Write a predicate pre_in_tree/3 that does the job.
 *
 * d) Solve problems a) to c) using difference lists. Cool! Use the predefined predicate
 *    time/1 to compare the solutions.
 *
 * What happens if the same character appears in more than one node. Try for instance
 * pre_in_tree(aba,baa,T).
 */

import { BinaryTree } from "./types.ts";

/**
 * Get the preorder sequence of a binary tree
 */
export function preorder<T>(tree: BinaryTree<T>): T[] {
  return [];
}

/**
 * Get the inorder sequence of a binary tree
 */
export function inorder<T>(tree: BinaryTree<T>): T[] {
  return [];
}

/**
 * Get the postorder sequence of a binary tree
 */
export function postorder<T>(tree: BinaryTree<T>): T[] {
  return [];
}

/**
 * Construct a tree from preorder sequence (if possible)
 */
export function preorderToTree<T>(sequence: T[]): BinaryTree<T> | null {
  return null;
}

/**
 * Construct a tree from inorder sequence (if possible)
 */
export function inorderToTree<T>(sequence: T[]): BinaryTree<T> | null {
  return null;
}

/**
 * Construct a tree from preorder and inorder sequences
 */
export function preInTree<T>(
  preorder: T[],
  inorder: T[]
): BinaryTree<T> | null {
  return null;
}

/**
 * Check if a tree can be uniquely determined from preorder and inorder
 */
export function canDetermineTree<T>(preorder: T[], inorder: T[]): boolean {
  return false;
}

/**
 * Get preorder sequence using difference lists
 */
export function preorderDlist<T>(tree: BinaryTree<T>): T[] {
  return [];
}

/**
 * Get inorder sequence using difference lists
 */
export function inorderDlist<T>(tree: BinaryTree<T>): T[] {
  return [];
}

/**
 * Construct tree from preorder and inorder using difference lists
 */
export function preInTreeDlist<T>(
  preorder: T[],
  inorder: T[]
): BinaryTree<T> | null {
  return null;
}

/**
 * Check if sequences have unique characters
 */
export function hasUniqueCharacters<T>(sequence: T[]): boolean {
  return false;
}

/**
 * Find the root position in inorder sequence
 */
export function findRootInInorder<T>(root: T, inorder: T[]): number {
  return 0;
}
