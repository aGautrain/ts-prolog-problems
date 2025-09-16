/**
 * P64 (**) Layout a binary tree (1)
 *
 * Given a binary tree as the usual Prolog term t(X,L,R) (or nil). As a preparation
 * for drawing the tree, a layout algorithm is required to determine the position of
 * each node in a rectangular grid. Several layout methods are conceivable, one of
 * them is shown in the illustration below.
 *
 * In this layout strategy, the position of a node v is obtained by the following two rules:
 *
 * x(v) is equal to the position of the node v in the inorder sequence
 * y(v) is equal to the depth of the node v in the tree
 *
 * In order to store the position of the nodes, we extend the Prolog term representing
 * a node (and its successors) as follows:
 *
 * % nil represents the empty tree (as usual)
 * % t(W,X,Y,L,R) represents a (non-empty) binary tree with root W "positioned" at (X,Y), and subtrees L and R
 *
 * Write a predicate layout_binary_tree/2 with the following specification:
 *
 * % layout_binary_tree(T,PT) :- PT is the "positioned" binary tree obtained from the binary tree T. (+,?)
 *
 * Test your predicate in an appropriate way.
 */

import { BinaryTree, PositionedBinaryTree } from "./types.ts";

/**
 * Layout a binary tree using inorder x-coordinates and depth y-coordinates
 */
export function layoutBinaryTree<T>(
  tree: BinaryTree<T>
): PositionedBinaryTree<T> {
  return null;
}

/**
 * Get the inorder sequence of a tree
 */
export function inorder<T>(tree: BinaryTree<T>): T[] {
  return [];
}

/**
 * Get the depth of a node in the tree
 */
export function getDepth<T>(tree: BinaryTree<T>): number {
  return 0;
}

/**
 * Create a positioned tree from a regular tree with given coordinates
 */
export function createPositionedTree<T>(
  tree: BinaryTree<T>,
  x: number,
  y: number
): PositionedBinaryTree<T> {
  return null;
}

/**
 * Get the width of the tree layout
 */
export function getLayoutWidth<T>(tree: BinaryTree<T>): number {
  return 0;
}

/**
 * Get the height of the tree layout
 */
export function getLayoutHeight<T>(tree: BinaryTree<T>): number {
  return 0;
}
