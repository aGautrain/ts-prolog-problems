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

import { BinaryTree } from "./types.ts";
import { symmetric } from "./P56_symmetric.ts";
import { isTree } from "./P54_isTree.ts";

/**
 * Add a value to a binary search tree
 */
export function add<T>(
  value: T,
  tree: BinaryTree<T>,
  compare: (a: T, b: T) => number
): void {
  if (compare(value, tree.value) < 0) {
    if (tree.left === null) tree.left = new BinaryTree(value, null, null);
    else add(value, tree.left, compare);
  } else {
    if (tree.right === null) tree.right = new BinaryTree(value, null, null);
    else add(value, tree.right, compare);
  }
}

/**
 * Construct a binary search tree from a list of numbers
 */
export function construct(
  numbers: number[],
  compare: (a: number, b: number) => number = (a: number, b: number) => a - b
): BinaryTree<number> {
  if (!numbers.length)
    throw new Error("BST cannot be constructed with empty array");

  const bst = new BinaryTree(numbers[0], null, null);
  numbers.slice(1).forEach((number) => add(number, bst, compare));

  return bst;
}

/**
 * Test if a binary search tree constructed from a list is symmetric
 */
export function testSymmetric(numbers: number[]): boolean {
  return symmetric(construct(numbers));
}

/**
 * Check if a tree is a valid binary search tree
 */
export function isValidBST<T>(
  tree: BinaryTree<T>,
  compare: (a: T, b: T) => number
): boolean {
  if (tree.left === null && tree.right === null) return true;

  const leftIsOk =
    tree.left === null ||
    (isTree(tree.left) &&
      compare(tree.value, tree.left.value) > 0 &&
      isValidBST(tree.left, compare));

  const rightIsOk =
    tree.right === null ||
    (isTree(tree.right) &&
      compare(tree.value, tree.right.value) < 0 &&
      isValidBST(tree.right, compare));

  return leftIsOk && rightIsOk;
}

/**
 * Inorder traversal of a binary search tree (gives sorted order)
 */
export function inorder<T>(tree: BinaryTree<T>): T[] {
  if (tree.left === null && tree.right === null) return [tree.value];

  return [
    ...(tree.left ? inorder(tree.left) : []),
    tree.value,
    ...(tree.right ? inorder(tree.right) : []),
  ];
}

/**
 * Search for a value in a binary search tree
 */
export function search<T>(
  value: T,
  tree: BinaryTree<T>,
  compare: (a: T, b: T) => number
): boolean {
  if (value === tree.value) return true;

  if (compare(value, tree.value) < 0) {
    if (tree.left === null) return false;
    else return search(value, tree.left, compare);
  } else {
    if (tree.right === null) return false;
    else return search(value, tree.right, compare);
  }
}
