import { assertEquals } from "@std/assert";
import {
  countLeaves,
  isLeaf,
  countInternalNodes,
  countNodes,
} from "./P61_countLeaves.ts";
import { leaf, node } from "./types.ts";

Deno.test("P61: countLeaves - empty tree", () => {
  assertEquals(countLeaves(null), 0);
});

Deno.test("P61: countLeaves - single node", () => {
  assertEquals(countLeaves(leaf("a")), 1);
});

Deno.test("P61: countLeaves - simple trees", () => {
  // Tree with one child
  assertEquals(countLeaves(node("a", leaf("b"), null)), 1);
  assertEquals(countLeaves(node("a", null, leaf("c"))), 1);

  // Tree with two children
  assertEquals(countLeaves(node("a", leaf("b"), leaf("c"))), 2);
});

Deno.test("P61: countLeaves - complex trees", () => {
  // Tree with 3 leaves
  const tree1 = node("a", node("b", leaf("d"), leaf("e")), leaf("c"));
  assertEquals(countLeaves(tree1), 3);

  // Tree with 4 leaves
  const tree2 = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(countLeaves(tree2), 4);

  // Tree with 2 leaves
  const tree3 = node(
    "a",
    node("b", leaf("d"), null),
    node("c", null, leaf("e"))
  );
  assertEquals(countLeaves(tree3), 2);
});

Deno.test("P61: isLeaf - test leaf detection", () => {
  // Empty tree is not a leaf
  assertEquals(isLeaf(null), false);

  // Single node is a leaf
  assertEquals(isLeaf(leaf("a")), true);

  // Node with children is not a leaf
  assertEquals(isLeaf(node("a", leaf("b"), null)), false);
  assertEquals(isLeaf(node("a", null, leaf("c"))), false);
  assertEquals(isLeaf(node("a", leaf("b"), leaf("c"))), false);
});

Deno.test("P61: countInternalNodes - test internal node counting", () => {
  // Empty tree has no internal nodes
  assertEquals(countInternalNodes(null), 0);

  // Single node has no internal nodes (it's a leaf)
  assertEquals(countInternalNodes(leaf("a")), 0);

  // Tree with one internal node
  assertEquals(countInternalNodes(node("a", leaf("b"), null)), 1);
  assertEquals(countInternalNodes(node("a", null, leaf("c"))), 1);

  // Tree with two internal nodes
  assertEquals(countInternalNodes(node("a", leaf("b"), leaf("c"))), 1);

  // Tree with three internal nodes
  const tree1 = node("a", node("b", leaf("d"), leaf("e")), leaf("c"));
  assertEquals(countInternalNodes(tree1), 2);

  // Tree with four internal nodes
  const tree2 = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(countInternalNodes(tree2), 3);
});

Deno.test("P61: countNodes - test total node counting", () => {
  // Empty tree has no nodes
  assertEquals(countNodes(null), 0);

  // Single node has 1 node
  assertEquals(countNodes(leaf("a")), 1);

  // Tree with 2 nodes
  assertEquals(countNodes(node("a", leaf("b"), null)), 2);
  assertEquals(countNodes(node("a", null, leaf("c"))), 2);

  // Tree with 3 nodes
  assertEquals(countNodes(node("a", leaf("b"), leaf("c"))), 3);

  // Tree with 6 nodes
  const tree = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(countNodes(tree), 7);
});

Deno.test("P61: relationship between counts", () => {
  // For any tree: total_nodes = internal_nodes + leaves
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
    const total = countNodes(tree);
    const internal = countInternalNodes(tree);
    const leaves = countLeaves(tree);

    assertEquals(total, internal + leaves);
  }
});

Deno.test("P61: edge cases", () => {
  // Tree with only left children
  const leftOnly = node("a", node("b", node("c", leaf("d"), null), null), null);
  assertEquals(countLeaves(leftOnly), 1);
  assertEquals(countInternalNodes(leftOnly), 3);
  assertEquals(countNodes(leftOnly), 4);

  // Tree with only right children
  const rightOnly = node(
    "a",
    null,
    node("b", null, node("c", null, leaf("d")))
  );
  assertEquals(countLeaves(rightOnly), 1);
  assertEquals(countInternalNodes(rightOnly), 3);
  assertEquals(countNodes(rightOnly), 4);
});
