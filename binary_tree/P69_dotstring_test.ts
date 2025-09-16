import { assertEquals } from "@std/assert";
import {
  treeToDotstring,
  dotstringToTree,
  treeDotstring,
  treeToDotstringDlist,
  dotstringToTreeDlist,
  treeDotstringDlist,
  isValidDotstring,
  getDotstringNodeCount,
  getDotstringDepth,
  dotstringToPreorder,
  preorderToDotstring,
} from "./P69_dotstring.ts";
import { leaf, node } from "./types.ts";

Deno.test("P69: treeToDotstring - test tree to dotstring conversion", () => {
  // Empty tree
  assertEquals(treeToDotstring(null), "");

  // Single node
  assertEquals(treeToDotstring(leaf("a")), "a..");

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  assertEquals(treeToDotstring(tree), "ab..c..");

  // Tree with empty right child
  const tree2 = node("a", leaf("b"), null);
  assertEquals(treeToDotstring(tree2), "ab...");

  // Tree with empty left child
  const tree3 = node("a", null, leaf("c"));
  assertEquals(treeToDotstring(tree3), "a.c..");

  // Complex tree
  const complex = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", null, node("f", leaf("g"), null))
  );
  assertEquals(treeToDotstring(complex), "abd..e..c.fg...");
});

Deno.test("P69: dotstringToTree - test dotstring to tree conversion", () => {
  // Empty string
  assertEquals(dotstringToTree(""), null);

  // Single node
  const single = dotstringToTree("a..");
  assertEquals(single?.value, "a");
  assertEquals(single?.left, null);
  assertEquals(single?.right, null);

  // Simple tree
  const tree = dotstringToTree("ab..c..");
  assertEquals(tree?.value, "a");
  assertEquals(tree?.left?.value, "b");
  assertEquals(tree?.right?.value, "c");

  // Tree with empty right child
  const tree2 = dotstringToTree("ab...");
  assertEquals(tree2?.value, "a");
  assertEquals(tree2?.left?.value, "b");
  assertEquals(tree2?.right, null);

  // Tree with empty left child
  const tree3 = dotstringToTree("a.c..");
  assertEquals(tree3?.value, "a");
  assertEquals(tree3?.left, null);
  assertEquals(tree3?.right?.value, "c");
});

Deno.test("P69: treeDotstring - test bidirectional conversion", () => {
  // Test tree to dotstring
  const tree = node("a", leaf("b"), leaf("c"));
  const dotstring = treeDotstring(tree);
  assertEquals(dotstring, "ab..c..");

  // Test dotstring to tree
  const parsed = treeDotstring("ab..c..");
  assertEquals(parsed?.value, "a");
  assertEquals(parsed?.left?.value, "b");
  assertEquals(parsed?.right?.value, "c");

  // Test round trip
  const original = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", null, node("f", leaf("g"), null))
  );
  const dotstring2 = treeDotstring(original);
  const parsed2 = treeDotstring(dotstring2);
  assertEquals(parsed2?.value, "a");
  assertEquals(parsed2?.left?.value, "b");
  assertEquals(parsed2?.right?.value, "c");
});

Deno.test("P69: treeToDotstringDlist - test difference list conversion", () => {
  // Empty tree
  assertEquals(treeToDotstringDlist(null), []);

  // Single node
  assertEquals(treeToDotstringDlist(leaf("a")), ["a", ".", "."]);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  const list = treeToDotstringDlist(tree);
  assertEquals(list, ["a", "b", ".", ".", "c", ".", "."]);
});

Deno.test("P69: dotstringToTreeDlist - test list to tree conversion", () => {
  // Empty list
  assertEquals(dotstringToTreeDlist([]), null);

  // Single node
  const single = dotstringToTreeDlist(["a", ".", "."]);
  assertEquals(single?.value, "a");
  assertEquals(single?.left, null);
  assertEquals(single?.right, null);

  // Simple tree
  const tree = dotstringToTreeDlist(["a", "b", ".", ".", "c", ".", "."]);
  assertEquals(tree?.value, "a");
  assertEquals(tree?.left?.value, "b");
  assertEquals(tree?.right?.value, "c");
});

Deno.test(
  "P69: treeDotstringDlist - test bidirectional difference list conversion",
  () => {
    // Test tree to list
    const tree = node("a", leaf("b"), leaf("c"));
    const list = treeDotstringDlist(tree);
    assertEquals(list, ["a", "b", ".", ".", "c", ".", "."]);

    // Test list to tree
    const parsed = treeDotstringDlist(["a", "b", ".", ".", "c", ".", "."]);
    assertEquals(parsed?.value, "a");
    assertEquals(parsed?.left?.value, "b");
    assertEquals(parsed?.right?.value, "c");
  }
);

Deno.test("P69: isValidDotstring - test dotstring validation", () => {
  // Valid dotstrings
  assertEquals(isValidDotstring("a.."), true);
  assertEquals(isValidDotstring("ab..c.."), true);
  assertEquals(isValidDotstring("ab..."), true);
  assertEquals(isValidDotstring("a.c.."), true);
  assertEquals(isValidDotstring("abd..e..c.fg..."), true);

  // Invalid dotstrings
  assertEquals(isValidDotstring(""), false);
  assertEquals(isValidDotstring("a"), false);
  assertEquals(isValidDotstring("a."), false);
  assertEquals(isValidDotstring("a..b"), false);
  assertEquals(isValidDotstring("ab..c"), false);
});

Deno.test("P69: getDotstringNodeCount - test node count calculation", () => {
  // Empty string
  assertEquals(getDotstringNodeCount(""), 0);

  // Single node
  assertEquals(getDotstringNodeCount("a.."), 1);

  // Simple tree
  assertEquals(getDotstringNodeCount("ab..c.."), 3);

  // Complex tree
  assertEquals(getDotstringNodeCount("abd..e..c.fg..."), 6);
});

Deno.test("P69: getDotstringDepth - test depth calculation", () => {
  // Empty string
  assertEquals(getDotstringDepth(""), 0);

  // Single node
  assertEquals(getDotstringDepth("a.."), 1);

  // Simple tree
  assertEquals(getDotstringDepth("ab..c.."), 2);

  // Complex tree
  assertEquals(getDotstringDepth("abd..e..c.fg..."), 4);
});

Deno.test("P69: dotstringToPreorder - test preorder extraction", () => {
  // Empty string
  assertEquals(dotstringToPreorder(""), []);

  // Single node
  assertEquals(dotstringToPreorder("a.."), ["a"]);

  // Simple tree
  assertEquals(dotstringToPreorder("ab..c.."), ["a", "b", "c"]);

  // Complex tree
  assertEquals(dotstringToPreorder("abd..e..c.fg..."), [
    "a",
    "b",
    "d",
    "e",
    "c",
    "f",
    "g",
  ]);
});

Deno.test(
  "P69: preorderToDotstring - test preorder to dotstring conversion",
  () => {
    // Empty sequence
    assertEquals(preorderToDotstring([]), "");

    // Single element
    assertEquals(preorderToDotstring(["a"]), "a..");

    // Simple sequence
    assertEquals(preorderToDotstring(["a", "b", "c"]), "ab..c..");

    // Note: This function assumes the sequence represents a complete binary tree
    // For incomplete trees, additional information about structure is needed
  }
);
