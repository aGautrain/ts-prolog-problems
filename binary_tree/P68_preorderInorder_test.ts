import { assertEquals } from "@std/assert";
import {
  preorder,
  inorder,
  postorder,
  preorderToTree,
  inorderToTree,
  preInTree,
  canDetermineTree,
  preorderDlist,
  inorderDlist,
  preInTreeDlist,
  hasUniqueCharacters,
  findRootInInorder,
} from "./P68_preorderInorder.ts";
import { leaf, node } from "./types.ts";

Deno.test("P68: preorder - test preorder traversal", () => {
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

Deno.test("P68: inorder - test inorder traversal", () => {
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

Deno.test("P68: postorder - test postorder traversal", () => {
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

Deno.test("P68: preorderToTree - test preorder to tree conversion", () => {
  // Empty sequence
  assertEquals(preorderToTree([]), null);

  // Single element
  const single = preorderToTree(["a"]);
  assertEquals(single?.value, "a");
  assertEquals(single?.left, null);
  assertEquals(single?.right, null);

  // Simple sequence
  const tree = preorderToTree(["a", "b", "c"]);
  assertEquals(tree?.value, "a");
  assertEquals(tree?.left?.value, "b");
  assertEquals(tree?.right?.value, "c");
});

Deno.test("P68: inorderToTree - test inorder to tree conversion", () => {
  // Empty sequence
  assertEquals(inorderToTree([]), null);

  // Single element
  const single = inorderToTree(["a"]);
  assertEquals(single?.value, "a");
  assertEquals(single?.left, null);
  assertEquals(single?.right, null);

  // Note: Inorder alone cannot uniquely determine a tree structure
  // This function may return null for ambiguous cases
});

Deno.test(
  "P68: preInTree - test preorder and inorder to tree conversion",
  () => {
    // Empty sequences
    assertEquals(preInTree([], []), null);

    // Single element
    const single = preInTree(["a"], ["a"]);
    assertEquals(single?.value, "a");
    assertEquals(single?.left, null);
    assertEquals(single?.right, null);

    // Simple case
    const tree = preInTree(["a", "b", "c"], ["b", "a", "c"]);
    assertEquals(tree?.value, "a");
    assertEquals(tree?.left?.value, "b");
    assertEquals(tree?.right?.value, "c");

    // Complex case
    const complex = preInTree(
      ["a", "b", "d", "e", "c", "f", "g"],
      ["d", "b", "e", "a", "f", "c", "g"]
    );
    assertEquals(complex?.value, "a");
    assertEquals(complex?.left?.value, "b");
    assertEquals(complex?.right?.value, "c");
  }
);

Deno.test("P68: canDetermineTree - test tree determinability", () => {
  // Empty sequences
  assertEquals(canDetermineTree([], []), true);

  // Single element
  assertEquals(canDetermineTree(["a"], ["a"]), true);

  // Valid case
  assertEquals(canDetermineTree(["a", "b", "c"], ["b", "a", "c"]), true);

  // Invalid case - different lengths
  assertEquals(canDetermineTree(["a", "b"], ["a"]), false);

  // Invalid case - different elements
  assertEquals(canDetermineTree(["a", "b"], ["c", "d"]), false);
});

Deno.test("P68: preorderDlist - test preorder with difference lists", () => {
  // Empty tree
  assertEquals(preorderDlist(null), []);

  // Single node
  assertEquals(preorderDlist(leaf("a")), ["a"]);

  // Simple tree
  assertEquals(preorderDlist(node("a", leaf("b"), leaf("c"))), ["a", "b", "c"]);
});

Deno.test("P68: inorderDlist - test inorder with difference lists", () => {
  // Empty tree
  assertEquals(inorderDlist(null), []);

  // Single node
  assertEquals(inorderDlist(leaf("a")), ["a"]);

  // Simple tree
  assertEquals(inorderDlist(node("a", leaf("b"), leaf("c"))), ["b", "a", "c"]);
});

Deno.test(
  "P68: preInTreeDlist - test preorder and inorder with difference lists",
  () => {
    // Empty sequences
    assertEquals(preInTreeDlist([], []), null);

    // Single element
    const single = preInTreeDlist(["a"], ["a"]);
    assertEquals(single?.value, "a");
    assertEquals(single?.left, null);
    assertEquals(single?.right, null);

    // Simple case
    const tree = preInTreeDlist(["a", "b", "c"], ["b", "a", "c"]);
    assertEquals(tree?.value, "a");
    assertEquals(tree?.left?.value, "b");
    assertEquals(tree?.right?.value, "c");
  }
);

Deno.test("P68: hasUniqueCharacters - test uniqueness checking", () => {
  // Empty sequence
  assertEquals(hasUniqueCharacters([]), true);

  // Single element
  assertEquals(hasUniqueCharacters(["a"]), true);

  // Unique elements
  assertEquals(hasUniqueCharacters(["a", "b", "c"]), true);

  // Duplicate elements
  assertEquals(hasUniqueCharacters(["a", "b", "a"]), false);
  assertEquals(hasUniqueCharacters(["a", "a"]), false);
});

Deno.test("P68: findRootInInorder - test root finding", () => {
  // Empty sequence
  assertEquals(findRootInInorder("a", []), -1);

  // Single element
  assertEquals(findRootInInorder("a", ["a"]), 0);
  assertEquals(findRootInInorder("b", ["a"]), -1);

  // Multiple elements
  assertEquals(findRootInInorder("a", ["b", "a", "c"]), 1);
  assertEquals(findRootInInorder("b", ["b", "a", "c"]), 0);
  assertEquals(findRootInInorder("c", ["b", "a", "c"]), 2);
  assertEquals(findRootInInorder("d", ["b", "a", "c"]), -1);
});
