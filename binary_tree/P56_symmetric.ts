/**
 * P56 (**) Symmetric binary trees
 *
 * Let us call a binary tree symmetric if you can draw a vertical line through the
 * root node and then the right subtree is the mirror image of the left subtree.
 * Write a predicate symmetric/1 to check whether a given binary tree is symmetric.
 * Hint: Write a predicate mirror/2 first to check whether one tree is the mirror
 * image of another. We are only interested in the structure, not in the contents
 * of the nodes.
 */

import { isTree } from "./P54_isTree.ts";
import { BinaryTree } from "./types.ts";

/**
 * Check whether one tree is the mirror image of another
 */
export function mirror<T>(tree1: BinaryTree<T>, tree2: BinaryTree<T>): boolean {
  // leaf node mirror must also be a leaf node
  if (tree1.left === null && tree1.right === null)
    return tree2.left === null && tree2.right === null;

  return (
    (isTree(tree1.left) && isTree(tree2.right)
      ? mirror(tree1.left, tree2.right)
      : tree1.left === tree2.right) &&
    (isTree(tree1.right) && isTree(tree2.left)
      ? mirror(tree1.right, tree2.left)
      : tree1.right === tree2.left)
  );
}

/**
 * Check whether a given binary tree is symmetric
 */
export function symmetric<T>(tree: BinaryTree<T>): boolean {
  if (isTree(tree.left) && isTree(tree.right)) {
    return mirror(tree.left, tree.right);
  }

  return tree.left === null && tree.right === null;
}

/**
 * Helper function to create a mirror of a tree
 */
export function createMirror<T>(tree: BinaryTree<T>): BinaryTree<T> {
  return new BinaryTree(
    tree.value,
    isTree(tree.right) ? createMirror(tree.right) : null,
    isTree(tree.left) ? createMirror(tree.left) : null
  );
}
