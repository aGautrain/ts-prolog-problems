import { assertEquals } from "@std/assert";
import {
  layoutBinaryTree3,
  getMinSubtreeDistance,
  getTreeWidth,
  calculateSubtreeOffset,
  canPlaceSubtrees,
  getCompactLayoutDimensions,
} from "./P66_layoutBinaryTree3.ts";
import { leaf, node } from "./types.ts";

Deno.test("P66: layoutBinaryTree3 - test compact layout", () => {
  // Empty tree
  assertEquals(layoutBinaryTree3(null), null);

  // Single node
  const single = layoutBinaryTree3(leaf("a"));
  assertEquals(single?.value, "a");
  assertEquals(single?.x, 0);
  assertEquals(single?.y, 1);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  const layout = layoutBinaryTree3(tree);
  assertEquals(layout?.value, "a");
  assertEquals(layout?.x, 0);
  assertEquals(layout?.y, 1);
  assertEquals(layout?.left?.value, "b");
  assertEquals(layout?.left?.y, 2);
  assertEquals(layout?.right?.value, "c");
  assertEquals(layout?.right?.y, 2);
});

Deno.test("P66: getMinSubtreeDistance - test distance calculation", () => {
  // Empty tree
  assertEquals(getMinSubtreeDistance(null), 0);

  // Single node
  assertEquals(getMinSubtreeDistance(leaf("a")), 0);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  assertEquals(getMinSubtreeDistance(tree), 1);

  // Complex tree
  const complex = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(getMinSubtreeDistance(complex) > 0, true);
});

Deno.test("P66: getTreeWidth - test width calculation", () => {
  // Empty tree
  assertEquals(getTreeWidth(null), 0);

  // Single node
  assertEquals(getTreeWidth(leaf("a")), 1);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  assertEquals(getTreeWidth(tree), 3);

  // Complex tree
  const complex = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(getTreeWidth(complex) > 3, true);
});

Deno.test("P66: calculateSubtreeOffset - test offset calculation", () => {
  // Empty tree
  assertEquals(calculateSubtreeOffset(null), 0);

  // Single node
  assertEquals(calculateSubtreeOffset(leaf("a")), 0);

  // Simple tree
  const tree = node("a", leaf("b"), leaf("c"));
  assertEquals(calculateSubtreeOffset(tree), 1);
});

Deno.test("P66: canPlaceSubtrees - test placement feasibility", () => {
  // Empty subtrees
  assertEquals(canPlaceSubtrees(null, null), true);
  assertEquals(canPlaceSubtrees(leaf("a"), null), true);
  assertEquals(canPlaceSubtrees(null, leaf("b")), true);

  // Two leaves
  assertEquals(canPlaceSubtrees(leaf("a"), leaf("b")), true);

  // Complex subtrees
  const left = node("a", leaf("b"), leaf("c"));
  const right = node("d", leaf("e"), leaf("f"));
  assertEquals(canPlaceSubtrees(left, right), true);
});

Deno.test(
  "P66: getCompactLayoutDimensions - test dimension calculation",
  () => {
    // Empty tree
    const empty = getCompactLayoutDimensions(null);
    assertEquals(empty.width, 0);
    assertEquals(empty.height, 0);
    assertEquals(empty.minX, 0);
    assertEquals(empty.maxX, 0);

    // Single node
    const single = getCompactLayoutDimensions(leaf("a"));
    assertEquals(single.width, 1);
    assertEquals(single.height, 1);
    assertEquals(single.minX, 0);
    assertEquals(single.maxX, 0);

    // Simple tree
    const tree = node("a", leaf("b"), leaf("c"));
    const dimensions = getCompactLayoutDimensions(tree);
    assertEquals(dimensions.width > 0, true);
    assertEquals(dimensions.height > 0, true);
    assertEquals(dimensions.minX <= 0, true);
    assertEquals(dimensions.maxX >= 0, true);
  }
);
