/**
 * P54 (*) Check whether a given term represents a binary tree
 *
 * Write a predicate istree/1 which succeeds if and only if its argument is a
 * Prolog term representing a binary tree.
 *
 * Example:
 * ?- istree(t(a,t(b,nil,nil),nil)).
 * Yes
 * ?- istree(t(a,t(b,nil,nil))).
 * No
 */

import { BinaryTree } from "./types.ts";

export function isTree<T>(term: unknown): term is BinaryTree<T> {
  return (
    term instanceof BinaryTree &&
    (term.left === null || isTree(term.left)) &&
    (term.right === null || isTree(term.right))
  );
}
