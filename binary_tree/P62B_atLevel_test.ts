import { assertEquals } from "@std/assert";
import {
  atLevel,
  levelOrder,
  getNodeDepth,
  getNodesAtDepth,
} from "./P62B_atLevel.ts";
import { leaf, node } from "./types.ts";

Deno.test("P62B: atLevel - test level collection", () => {
  // Empty tree
  assertEquals(atLevel(null, 1), []);

  // Single node at level 1
  assertEquals(atLevel(leaf("a"), 1), ["a"]);
  assertEquals(atLevel(leaf("a"), 2), []);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  assertEquals(atLevel(tree, 1), ["a"]);
  assertEquals(atLevel(tree, 2), ["b", "c"]);
  assertEquals(atLevel(tree, 3), []);
});

Deno.test("P62B: levelOrder - test level-order traversal", () => {
  // Empty tree
  assertEquals(levelOrder(null), []);

  // Single node
  assertEquals(levelOrder(leaf("a")), ["a"]);

  // Simple tree
  assertEquals(levelOrder(node("a", leaf("b"), leaf("c"))), ["a", "b", "c"]);

  // Complex tree
  const tree = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(levelOrder(tree), ["a", "b", "c", "d", "e", "f", "g"]);
});

Deno.test("P62B: getNodeDepth - test depth calculation", () => {
  // Empty tree
  assertEquals(getNodeDepth(null, "a"), -1);

  // Single node
  assertEquals(getNodeDepth(leaf("a"), "a"), 1);
  assertEquals(getNodeDepth(leaf("a"), "b"), -1);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  assertEquals(getNodeDepth(tree, "a"), 1);
  assertEquals(getNodeDepth(tree, "b"), 2);
  assertEquals(getNodeDepth(tree, "c"), 2);
  assertEquals(getNodeDepth(tree, "d"), -1);
});

Deno.test("P62B: getNodesAtDepth - test depth-based collection", () => {
  // Empty tree
  assertEquals(getNodesAtDepth(null, 1), []);

  // Single node
  assertEquals(getNodesAtDepth(leaf("a"), 1), ["a"]);
  assertEquals(getNodesAtDepth(leaf("a"), 2), []);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  assertEquals(getNodesAtDepth(tree, 1), ["a"]);
  assertEquals(getNodesAtDepth(tree, 2), ["b", "c"]);
  assertEquals(getNodesAtDepth(tree, 3), []);
});
