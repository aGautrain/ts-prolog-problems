export class BinaryTree<T> {
  value: T;
  left: BinaryTree<T> | null;
  right: BinaryTree<T> | null;

  constructor(
    value: T,
    left: BinaryTree<T> | null,
    right: BinaryTree<T> | null
  ) {
    this.value = value;
    this.left = left;
    this.right = right;
  }
}
