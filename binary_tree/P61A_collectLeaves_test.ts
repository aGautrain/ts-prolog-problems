import { assertEquals } from "@std/assert";
import {
  leaves,
  internals,
  nodes,
  preorder,
  postorder,
} from "./P61A_collectLeaves.ts";
import { leaf, node } from "./types.ts";

Deno.test("P61A: leaves - empty tree", () => {
  assertEquals(leaves(null), []);
});

Deno.test("P61A: leaves - single node", () => {
  assertEquals(leaves(leaf("a")), ["a"]);
});

Deno.test("P61A: leaves - simple trees", () => {
  // Tree with one child
  assertEquals(leaves(node("a", leaf("b"), null)), ["b"]);
  assertEquals(leaves(node("a", null, leaf("c"))), ["c"]);

  // Tree with two children
  assertEquals(leaves(node("a", leaf("b"), leaf("c"))), ["b", "c"]);
});

Deno.test("P61A: leaves - complex trees", () => {
  // Tree with 3 leaves
  const tree1 = node("a", node("b", leaf("d"), leaf("e")), leaf("c"));
  assertEquals(leaves(tree1), ["d", "e", "c"]);

  // Tree with 4 leaves
  const tree2 = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(leaves(tree2), ["d", "e", "f", "g"]);

  // Tree with 2 leaves
  const tree3 = node(
    "a",
    node("b", leaf("d"), null),
    node("c", null, leaf("e"))
  );
  assertEquals(leaves(tree3), ["d", "e"]);
});

Deno.test("P61A: internals - test internal node collection", () => {
  // Empty tree has no internal nodes
  assertEquals(internals(null), []);

  // Single node has no internal nodes (it's a leaf)
  assertEquals(internals(leaf("a")), []);

  // Tree with one internal node
  assertEquals(internals(node("a", leaf("b"), null)), ["a"]);
  assertEquals(internals(node("a", null, leaf("c"))), ["a"]);

  // Tree with two internal nodes
  assertEquals(internals(node("a", leaf("b"), leaf("c"))), ["a"]);

  // Tree with three internal nodes
  const tree1 = node("a", node("b", leaf("d"), leaf("e")), leaf("c"));
  assertEquals(internals(tree1), ["a", "b"]);

  // Tree with four internal nodes
  const tree2 = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(internals(tree2), ["a", "b", "c"]);
});

Deno.test("P61A: nodes - test inorder traversal", () => {
  // Empty tree
  assertEquals(nodes(null), []);

  // Single node
  assertEquals(nodes(leaf("a")), ["a"]);

  // Simple tree
  assertEquals(nodes(node("a", leaf("b"), leaf("c"))), ["b", "a", "c"]);

  // Complex tree
  const tree = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(nodes(tree), ["d", "b", "e", "a", "f", "c", "g"]);
});

Deno.test("P61A: preorder - test preorder traversal", () => {
  // Empty tree
  assertEquals(preorder(null), []);

  // Single node
  assertEquals(preorder(leaf("a")), ["a"]);

  // Simple tree
  assertEquals(preorder(node("a", leaf("b"), leaf("c"))), ["a", "b", "c"]);

  // Complex tree
  const tree = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(preorder(tree), ["a", "b", "d", "e", "c", "f", "g"]);
});

Deno.test("P61A: postorder - test postorder traversal", () => {
  // Empty tree
  assertEquals(postorder(null), []);

  // Single node
  assertEquals(postorder(leaf("a")), ["a"]);

  // Simple tree
  assertEquals(postorder(node("a", leaf("b"), leaf("c"))), ["b", "c", "a"]);

  // Complex tree
  const tree = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(postorder(tree), ["d", "e", "b", "f", "g", "c", "a"]);
});

Deno.test("P61A: relationship between collections", () => {
  const testTrees = [
    null,
    leaf("a"),
    node("a", leaf("b"), null),
    node("a", null, leaf("c")),
    node("a", leaf("b"), leaf("c")),
    node("a", node("b", leaf("d"), leaf("e")), leaf("c")),
    node("a", node("b", leaf("d"), leaf("e")), node("c", leaf("f"), leaf("g"))),
  ];

  for (const tree of testTrees) {
    const allNodes = nodes(tree);
    const internalNodes = internals(tree);
    const leafNodes = leaves(tree);

    // All nodes should be the union of internal and leaf nodes
    const combined = [...internalNodes, ...leafNodes].sort();
    const sortedAll = allNodes.sort();
    assertEquals(combined, sortedAll);
  }
});

Deno.test("P61A: edge cases", () => {
  // Tree with only left children
  const leftOnly = node("a", node("b", node("c", leaf("d"), null), null), null);
  assertEquals(leaves(leftOnly), ["d"]);
  assertEquals(internals(leftOnly), ["a", "b", "c"]);

  // Tree with only right children
  const rightOnly = node(
    "a",
    null,
    node("b", null, node("c", null, leaf("d")))
  );
  assertEquals(leaves(rightOnly), ["d"]);
  assertEquals(internals(rightOnly), ["a", "b", "c"]);
});
