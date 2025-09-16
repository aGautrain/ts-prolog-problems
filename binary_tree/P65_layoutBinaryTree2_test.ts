import { assertEquals } from "@std/assert";
import {
  layoutBinaryTree2,
  getHorizontalDistance,
  getLevelWidth,
  calculateXCoordinate,
  getMaxLevelWidth,
} from "./P65_layoutBinaryTree2.ts";
import { leaf, node } from "./types.ts";

Deno.test("P65: layoutBinaryTree2 - test alternative layout", () => {
  // Empty tree
  assertEquals(layoutBinaryTree2(null), null);

  // Single node
  const single = layoutBinaryTree2(leaf("a"));
  assertEquals(single?.value, "a");
  assertEquals(single?.x, 0);
  assertEquals(single?.y, 1);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  const layout = layoutBinaryTree2(tree);
  assertEquals(layout?.value, "a");
  assertEquals(layout?.x, 0);
  assertEquals(layout?.y, 1);
  assertEquals(layout?.left?.value, "b");
  assertEquals(layout?.left?.y, 2);
  assertEquals(layout?.right?.value, "c");
  assertEquals(layout?.right?.y, 2);
});

Deno.test("P65: getHorizontalDistance - test distance calculation", () => {
  // Empty tree
  assertEquals(getHorizontalDistance(null, 1), 0);

  // Single node
  assertEquals(getHorizontalDistance(leaf("a"), 1), 0);
  assertEquals(getHorizontalDistance(leaf("a"), 2), 0);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  assertEquals(getHorizontalDistance(tree, 1), 0);
  assertEquals(getHorizontalDistance(tree, 2), 2);
});

Deno.test("P65: getLevelWidth - test level width calculation", () => {
  // Empty tree
  assertEquals(getLevelWidth(null, 1), 0);

  // Single node
  assertEquals(getLevelWidth(leaf("a"), 1), 1);
  assertEquals(getLevelWidth(leaf("a"), 2), 0);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  assertEquals(getLevelWidth(tree, 1), 1);
  assertEquals(getLevelWidth(tree, 2), 2);
  assertEquals(getLevelWidth(tree, 3), 0);
});

Deno.test("P65: calculateXCoordinate - test x-coordinate calculation", () => {
  // Empty tree
  assertEquals(calculateXCoordinate(null, 1, 0), 0);

  // Single node
  assertEquals(calculateXCoordinate(leaf("a"), 1, 0), 0);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  assertEquals(calculateXCoordinate(tree, 1, 0), 0);
  assertEquals(calculateXCoordinate(tree, 2, 0), -1);
  assertEquals(calculateXCoordinate(tree, 2, 1), 1);
});

Deno.test("P65: getMaxLevelWidth - test maximum width calculation", () => {
  // Empty tree
  assertEquals(getMaxLevelWidth(null), 0);

  // Single node
  assertEquals(getMaxLevelWidth(leaf("a")), 1);

  // Simple tree
  assertEquals(getMaxLevelWidth(node("a", leaf("b"), leaf("c"))), 2);

  // Complex tree
  const tree = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(getMaxLevelWidth(tree), 4);
});
