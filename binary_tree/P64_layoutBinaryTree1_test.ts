import { assertEquals } from "@std/assert";
import {
  layoutBinaryTree,
  inorder,
  getDepth,
  createPositionedTree,
  getLayoutWidth,
  getLayoutHeight,
} from "./P64_layoutBinaryTree1.ts";
import { leaf, node } from "./types.ts";

Deno.test("P64: layoutBinaryTree - test layout", () => {
  // Empty tree
  assertEquals(layoutBinaryTree(null), null);

  // Single node
  const single = layoutBinaryTree(leaf("a"));
  assertEquals(single?.value, "a");
  assertEquals(single?.x, 0);
  assertEquals(single?.y, 1);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  const layout = layoutBinaryTree(tree);
  assertEquals(layout?.value, "a");
  assertEquals(layout?.x, 1); // b(0), a(1), c(2) in inorder
  assertEquals(layout?.y, 1);
  assertEquals(layout?.left?.value, "b");
  assertEquals(layout?.left?.x, 0);
  assertEquals(layout?.left?.y, 2);
  assertEquals(layout?.right?.value, "c");
  assertEquals(layout?.right?.x, 2);
  assertEquals(layout?.right?.y, 2);
});

Deno.test("P64: inorder - test inorder traversal", () => {
  // Empty tree
  assertEquals(inorder(null), []);

  // Single node
  assertEquals(inorder(leaf("a")), ["a"]);

  // Simple tree
  assertEquals(inorder(node("a", leaf("b"), leaf("c"))), ["b", "a", "c"]);

  // Complex tree
  const tree = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(inorder(tree), ["d", "b", "e", "a", "f", "c", "g"]);
});

Deno.test("P64: getDepth - test depth calculation", () => {
  // Empty tree
  assertEquals(getDepth(null), 0);

  // Single node
  assertEquals(getDepth(leaf("a")), 1);

  // Simple tree
  assertEquals(getDepth(node("a", leaf("b"), leaf("c"))), 2);

  // Complex tree
  const tree = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(getDepth(tree), 3);
});

Deno.test("P64: createPositionedTree - test positioned tree creation", () => {
  const tree = leaf("a");
  const positioned = createPositionedTree(tree, 5, 3);

  assertEquals(positioned?.value, "a");
  assertEquals(positioned?.x, 5);
  assertEquals(positioned?.y, 3);
  assertEquals(positioned?.left, null);
  assertEquals(positioned?.right, null);
});

Deno.test("P64: getLayoutWidth - test width calculation", () => {
  // Empty tree
  assertEquals(getLayoutWidth(null), 0);

  // Single node
  assertEquals(getLayoutWidth(leaf("a")), 1);

  // Simple tree
  assertEquals(getLayoutWidth(node("a", leaf("b"), leaf("c"))), 3);

  // Complex tree
  const tree = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(getLayoutWidth(tree), 7);
});

Deno.test("P64: getLayoutHeight - test height calculation", () => {
  // Empty tree
  assertEquals(getLayoutHeight(null), 0);

  // Single node
  assertEquals(getLayoutHeight(leaf("a")), 1);

  // Simple tree
  assertEquals(getLayoutHeight(node("a", leaf("b"), leaf("c"))), 2);

  // Complex tree
  const tree = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(getLayoutHeight(tree), 3);
});
