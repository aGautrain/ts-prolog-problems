/**
 * P57 (**) Binary search trees (dictionaries)
 *
 * Use the predicate add/3, developed in chapter 4 of the course, to write a predicate
 * to construct a binary search tree from a list of integer numbers.
 *
 * Example:
 * ?- construct([3,2,5,7,1],T).
 * T = t(3, t(2, t(1, nil, nil), nil), t(5, nil, t(7, nil, nil)))
 *
 * Then use this predicate to test the solution of the problem P56.
 * Example:
 * ?- test_symmetric([5,3,18,1,4,12,21]).
 * Yes
 * ?- test_symmetric([3,2,5,7,4]).
 * No
 */

import { BinaryTree, leaf, node } from "./types.ts";
import { symmetric } from "./P56_symmetric.ts";

/**
 * Add a value to a binary search tree
 */
export function add<T>(
  value: T,
  tree: BinaryTree<T>,
  compare: (a: T, b: T) => number
): BinaryTree<T> {
  return null;
}

/**
 * Construct a binary search tree from a list of numbers
 */
export function construct(numbers: number[]): BinaryTree<number> {
  return null;
}

/**
 * Test if a binary search tree constructed from a list is symmetric
 */
export function testSymmetric(numbers: number[]): boolean {
  return false;
}

/**
 * Check if a tree is a valid binary search tree
 */
export function isValidBST<T>(
  tree: BinaryTree<T>,
  compare: (a: T, b: T) => number
): boolean {
  return false;
}

/**
 * Inorder traversal of a binary search tree (gives sorted order)
 */
export function inorder<T>(tree: BinaryTree<T>): T[] {
  return [];
}

/**
 * Search for a value in a binary search tree
 */
export function search<T>(
  value: T,
  tree: BinaryTree<T>,
  compare: (a: T, b: T) => number
): boolean {
  return false;
}
