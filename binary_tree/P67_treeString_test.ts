import { assertEquals } from "@std/assert";
import {
  treeToString,
  stringToTree,
  treeString,
  treeToDifferenceList,
  differenceListToTree,
  treeDlist,
  isValidTreeString,
  getStringTreeDepth,
} from "./P67_treeString.ts";
import { leaf, node } from "./types.ts";

Deno.test("P67: treeToString - test tree to string conversion", () => {
  // Empty tree
  assertEquals(treeToString(null), "");

  // Single node
  assertEquals(treeToString(leaf("a")), "a");

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  assertEquals(treeToString(tree), "a(b,c)");

  // Tree with empty right child
  const tree2 = node("a", leaf("b"), null);
  assertEquals(treeToString(tree2), "a(b,)");

  // Tree with empty left child
  const tree3 = node("a", null, leaf("c"));
  assertEquals(treeToString(tree3), "a(,c)");

  // Complex tree
  const complex = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", null, node("f", leaf("g"), null))
  );
  assertEquals(treeToString(complex), "a(b(d,e),c(,f(g,)))");
});

Deno.test("P67: stringToTree - test string to tree conversion", () => {
  // Empty string
  assertEquals(stringToTree(""), null);

  // Single node
  const single = stringToTree("a");
  assertEquals(single?.value, "a");
  assertEquals(single?.left, null);
  assertEquals(single?.right, null);

  // Simple tree
  const tree = stringToTree("a(b,c)");
  assertEquals(tree?.value, "a");
  assertEquals(tree?.left?.value, "b");
  assertEquals(tree?.right?.value, "c");

  // Tree with empty right child
  const tree2 = stringToTree("a(b,)");
  assertEquals(tree2?.value, "a");
  assertEquals(tree2?.left?.value, "b");
  assertEquals(tree2?.right, null);

  // Tree with empty left child
  const tree3 = stringToTree("a(,c)");
  assertEquals(tree3?.value, "a");
  assertEquals(tree3?.left, null);
  assertEquals(tree3?.right?.value, "c");
});

Deno.test("P67: treeString - test bidirectional conversion", () => {
  // Test tree to string
  const tree = node("a", leaf("b"), leaf("c"));
  const str = treeString(tree);
  assertEquals(str, "a(b,c)");

  // Test string to tree
  const parsed = treeString("a(b,c)");
  assertEquals(parsed?.value, "a");
  assertEquals(parsed?.left?.value, "b");
  assertEquals(parsed?.right?.value, "c");

  // Test round trip
  const original = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", null, node("f", leaf("g"), null))
  );
  const str2 = treeString(original);
  const parsed2 = treeString(str2);
  assertEquals(parsed2?.value, "a");
  assertEquals(parsed2?.left?.value, "b");
  assertEquals(parsed2?.right?.value, "c");
});

Deno.test("P67: treeToDifferenceList - test difference list conversion", () => {
  // Empty tree
  assertEquals(treeToDifferenceList(null), []);

  // Single node
  assertEquals(treeToDifferenceList(leaf("a")), ["a"]);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  const list = treeToDifferenceList(tree);
  assertEquals(list.length > 0, true);
});

Deno.test("P67: differenceListToTree - test list to tree conversion", () => {
  // Empty list
  assertEquals(differenceListToTree([]), null);

  // Single element
  const single = differenceListToTree(["a"]);
  assertEquals(single?.value, "a");
  assertEquals(single?.left, null);
  assertEquals(single?.right, null);
});

Deno.test(
  "P67: treeDlist - test bidirectional difference list conversion",
  () => {
    // Test tree to list
    const tree = node("a", leaf("b"), leaf("c"));
    const list = treeDlist(tree);
    assertEquals(list.length > 0, true);

    // Test list to tree
    const parsed = treeDlist(["a", "b", "c"]);
    assertEquals(parsed?.value, "a");
  }
);

Deno.test("P67: isValidTreeString - test string validation", () => {
  // Valid strings
  assertEquals(isValidTreeString("a"), true);
  assertEquals(isValidTreeString("a(b,c)"), true);
  assertEquals(isValidTreeString("a(b,)"), true);
  assertEquals(isValidTreeString("a(,c)"), true);
  assertEquals(isValidTreeString("a(b(d,e),c(,f(g,)))"), true);

  // Invalid strings
  assertEquals(isValidTreeString(""), false);
  assertEquals(isValidTreeString("a("), false);
  assertEquals(isValidTreeString("a)"), false);
  assertEquals(isValidTreeString("a(b,c"), false);
  assertEquals(isValidTreeString("a(b,c))"), false);
});

Deno.test("P67: getStringTreeDepth - test depth calculation", () => {
  // Single node
  assertEquals(getStringTreeDepth("a"), 1);

  // Simple tree
  assertEquals(getStringTreeDepth("a(b,c)"), 2);

  // Complex tree
  assertEquals(getStringTreeDepth("a(b(d,e),c(,f(g,)))"), 4);

  // Empty string
  assertEquals(getStringTreeDepth(""), 0);
});
