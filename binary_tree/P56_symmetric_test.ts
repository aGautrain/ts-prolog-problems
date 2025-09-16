import { assertEquals } from "@std/assert";
import { mirror, symmetric, createMirror } from "./P56_symmetric.ts";
import { leaf, node } from "./types.ts";

Deno.test("P56: mirror - empty trees", () => {
  assertEquals(mirror(null, null), true);
  assertEquals(mirror(null, leaf("a")), false);
  assertEquals(mirror(leaf("a"), null), false);
});

Deno.test("P56: mirror - single nodes", () => {
  assertEquals(mirror(leaf("a"), leaf("b")), true);
});

Deno.test("P56: mirror - simple trees", () => {
  // Tree with left child vs tree with right child
  assertEquals(
    mirror(node("a", leaf("b"), null), node("a", null, leaf("c"))),
    true
  );

  // Tree with right child vs tree with left child
  assertEquals(
    mirror(node("a", null, leaf("c")), node("a", leaf("b"), null)),
    true
  );

  // Both trees have same structure
  assertEquals(
    mirror(node("a", leaf("b"), leaf("c")), node("a", leaf("b"), leaf("c"))),
    true
  );

  // Different structures
  assertEquals(
    mirror(node("a", leaf("b"), null), node("a", leaf("b"), leaf("c"))),
    false
  );
});

Deno.test("P56: mirror - complex trees", () => {
  const tree1 = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );

  const tree2 = node(
    "a",
    node("c", leaf("g"), leaf("f")),
    node("b", leaf("e"), leaf("d"))
  );

  assertEquals(mirror(tree1, tree2), true);

  // Not mirrors
  const tree3 = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), null)
  );

  assertEquals(mirror(tree1, tree3), false);
});

Deno.test("P56: symmetric - empty tree", () => {
  assertEquals(symmetric(null), true);
});

Deno.test("P56: symmetric - single node", () => {
  assertEquals(symmetric(leaf("a")), true);
});

Deno.test("P56: symmetric - simple cases", () => {
  // Tree with only left child - not symmetric
  assertEquals(symmetric(node("a", leaf("b"), null)), false);

  // Tree with only right child - not symmetric
  assertEquals(symmetric(node("a", null, leaf("c"))), false);

  // Tree with both children - symmetric
  assertEquals(symmetric(node("a", leaf("b"), leaf("c"))), true);
});

Deno.test("P56: symmetric - complex cases", () => {
  // Symmetric tree
  const symmetricTree = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );
  assertEquals(symmetric(symmetricTree), true);

  // Asymmetric tree
  const asymmetricTree = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), null)
  );
  assertEquals(symmetric(asymmetricTree), false);

  // More complex symmetric tree
  const complexSymmetric = node(
    "a",
    node("b", node("d", leaf("h"), leaf("i")), node("e", leaf("j"), leaf("k"))),
    node("c", node("f", leaf("l"), leaf("m")), node("g", leaf("n"), leaf("o")))
  );
  assertEquals(symmetric(complexSymmetric), true);
});

Deno.test("P56: createMirror - test mirror creation", () => {
  // Empty tree
  assertEquals(createMirror(null), null);

  // Single node
  assertEquals(createMirror(leaf("a")), leaf("a"));

  // Simple tree
  const original = node("a", leaf("b"), leaf("c"));
  const mirrored = createMirror(original);

  assertEquals(mirrored?.value, "a");
  assertEquals(mirrored?.left?.value, "c");
  assertEquals(mirrored?.right?.value, "b");

  // Complex tree
  const complex = node(
    "a",
    node("b", leaf("d"), leaf("e")),
    node("c", leaf("f"), leaf("g"))
  );

  const complexMirrored = createMirror(complex);

  // Verify it's actually a mirror
  assertEquals(mirror(complex, complexMirrored), true);
});
