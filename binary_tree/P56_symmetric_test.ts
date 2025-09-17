import { assertEquals } from "https://deno.land/std@0.208.0/assert/assert_equals.ts";
import { createMirror, mirror, symmetric } from "./P56_symmetric.ts";
import { BinaryTree } from "./types.ts";

Deno.test("createMirror - empty tree (single node)", () => {
  const tree = new BinaryTree(1, null, null);
  const mirrored = createMirror(tree);

  assertEquals(mirrored.left, null);
  assertEquals(mirrored.right, null);
});

Deno.test("createMirror - simple tree with left child", () => {
  const left = new BinaryTree(2, null, null);
  const tree = new BinaryTree(1, left, null);
  const mirrored = createMirror(tree);

  assertEquals(mirrored.left, null);
  assertEquals(mirrored.right?.left, null);
  assertEquals(mirrored.right?.right, null);
});

Deno.test("createMirror - simple tree with right child", () => {
  const right = new BinaryTree(3, null, null);
  const tree = new BinaryTree(1, null, right);
  const mirrored = createMirror(tree);

  assertEquals(mirrored.left?.left, null);
  assertEquals(mirrored.left?.right, null);
  assertEquals(mirrored.right, null);
});

Deno.test("createMirror - complete binary tree", () => {
  const left = new BinaryTree(
    2,
    new BinaryTree(4, null, null),
    new BinaryTree(5, null, null)
  );
  const right = new BinaryTree(
    3,
    new BinaryTree(6, null, null),
    new BinaryTree(7, null, null)
  );
  const tree = new BinaryTree(1, left, right);
  const mirrored = createMirror(tree);

  // Verify the mirrored tree has the correct structure
  // Original: left=2(4,5), right=3(6,7)
  // Mirrored: left=3(7,6), right=2(5,4)
  assertEquals(mirrored.left?.left?.left, null);
  assertEquals(mirrored.left?.left?.right, null);
  assertEquals(mirrored.left?.right?.left, null);
  assertEquals(mirrored.left?.right?.right, null);
  assertEquals(mirrored.right?.left?.left, null);
  assertEquals(mirrored.right?.left?.right, null);
  assertEquals(mirrored.right?.right?.left, null);
  assertEquals(mirrored.right?.right?.right, null);
});

Deno.test("createMirror - asymmetric tree", () => {
  const left = new BinaryTree(2, new BinaryTree(4, null, null), null);
  const right = new BinaryTree(3, null, new BinaryTree(7, null, null));
  const tree = new BinaryTree(1, left, right);
  const mirrored = createMirror(tree);

  // Verify the mirrored tree has the correct structure
  // Original: left=2(4,null), right=3(null,7)
  // Mirrored: left=3(7,null), right=2(null,4)
  assertEquals(mirrored.left?.left?.left, null);
  assertEquals(mirrored.left?.left?.right, null);
  assertEquals(mirrored.left?.right, null);
  assertEquals(mirrored.right?.left, null);
  assertEquals(mirrored.right?.right?.left, null);
  assertEquals(mirrored.right?.right?.right, null);
});

Deno.test("mirror - identical single nodes", () => {
  const tree1 = new BinaryTree(1, null, null);
  const tree2 = new BinaryTree(1, null, null);

  assertEquals(mirror(tree1, tree2), true);
});

Deno.test("mirror - different single nodes", () => {
  const tree1 = new BinaryTree(1, null, null);
  const tree2 = new BinaryTree(2, null, null);

  assertEquals(mirror(tree1, tree2), true); // Structure matters, not content
});

Deno.test("mirror - one leaf, one non-leaf", () => {
  const tree1 = new BinaryTree(1, null, null);
  const tree2 = new BinaryTree(2, new BinaryTree(3, null, null), null);

  assertEquals(mirror(tree1, tree2), false);
});

Deno.test("mirror - mirrored simple trees", () => {
  const left = new BinaryTree(2, null, null);
  const tree1 = new BinaryTree(1, left, null);

  const right = new BinaryTree(3, null, null);
  const tree2 = new BinaryTree(1, null, right);

  assertEquals(mirror(tree1, tree2), true);
});

Deno.test("mirror - non-mirrored simple trees", () => {
  const left1 = new BinaryTree(2, null, null);
  const tree1 = new BinaryTree(1, left1, null);

  const left2 = new BinaryTree(3, null, null);
  const tree2 = new BinaryTree(1, left2, null);

  assertEquals(mirror(tree1, tree2), false);
});

Deno.test("mirror - complex mirrored trees", () => {
  const left1 = new BinaryTree(
    2,
    new BinaryTree(4, null, null),
    new BinaryTree(5, null, null)
  );
  const right1 = new BinaryTree(
    3,
    new BinaryTree(6, null, null),
    new BinaryTree(7, null, null)
  );
  const tree1 = new BinaryTree(1, left1, right1);

  const left2 = new BinaryTree(
    3,
    new BinaryTree(7, null, null),
    new BinaryTree(6, null, null)
  );
  const right2 = new BinaryTree(
    2,
    new BinaryTree(5, null, null),
    new BinaryTree(4, null, null)
  );
  const tree2 = new BinaryTree(1, left2, right2);

  assertEquals(mirror(tree1, tree2), true);
});

Deno.test("mirror - asymmetric trees", () => {
  const left1 = new BinaryTree(2, new BinaryTree(4, null, null), null);
  const right1 = new BinaryTree(3, null, new BinaryTree(7, null, null));
  const tree1 = new BinaryTree(1, left1, right1);

  const left2 = new BinaryTree(3, new BinaryTree(7, null, null), null);
  const right2 = new BinaryTree(2, null, new BinaryTree(4, null, null));
  const tree2 = new BinaryTree(1, left2, right2);

  assertEquals(mirror(tree1, tree2), true);
});

Deno.test("mirror - different structures", () => {
  const left1 = new BinaryTree(2, new BinaryTree(4, null, null), null);
  const tree1 = new BinaryTree(1, left1, null);

  const left2 = new BinaryTree(3, null, new BinaryTree(5, null, null));
  const tree2 = new BinaryTree(1, left2, null);

  assertEquals(mirror(tree1, tree2), false);
});

Deno.test("symmetric - single node", () => {
  const tree = new BinaryTree(1, null, null);

  assertEquals(symmetric(tree), true);
});

Deno.test("symmetric - tree with only left child", () => {
  const left = new BinaryTree(2, null, null);
  const tree = new BinaryTree(1, left, null);

  assertEquals(symmetric(tree), false);
});

Deno.test("symmetric - tree with only right child", () => {
  const right = new BinaryTree(3, null, null);
  const tree = new BinaryTree(1, null, right);

  assertEquals(symmetric(tree), false);
});

Deno.test("symmetric - simple symmetric tree", () => {
  const left = new BinaryTree(2, null, null);
  const right = new BinaryTree(3, null, null);
  const tree = new BinaryTree(1, left, right);

  assertEquals(symmetric(tree), true);
});

Deno.test("symmetric - complex symmetric tree", () => {
  const left = new BinaryTree(
    2,
    new BinaryTree(4, null, null),
    new BinaryTree(5, null, null)
  );
  const right = new BinaryTree(
    3,
    new BinaryTree(6, null, null),
    new BinaryTree(7, null, null)
  );
  const tree = new BinaryTree(1, left, right);

  assertEquals(symmetric(tree), true);
});

Deno.test("symmetric - asymmetric tree with different structures", () => {
  const left = new BinaryTree(
    2,
    new BinaryTree(4, null, null),
    new BinaryTree(5, null, null)
  );
  const right = new BinaryTree(3, null, new BinaryTree(7, null, null));
  const tree = new BinaryTree(1, left, right);

  assertEquals(symmetric(tree), false);
});

Deno.test(
  "symmetric - asymmetric tree with same structure but different values",
  () => {
    const left = new BinaryTree(
      2,
      new BinaryTree(4, null, null),
      new BinaryTree(5, null, null)
    );
    const right = new BinaryTree(
      3,
      new BinaryTree(6, null, null),
      new BinaryTree(7, null, null)
    );
    const tree = new BinaryTree(1, left, right);

    assertEquals(symmetric(tree), true); // Structure matters, not content
  }
);

Deno.test("symmetric - deeply nested symmetric tree", () => {
  const left = new BinaryTree(
    2,
    new BinaryTree(
      4,
      new BinaryTree(8, null, null),
      new BinaryTree(9, null, null)
    ),
    new BinaryTree(
      5,
      new BinaryTree(10, null, null),
      new BinaryTree(11, null, null)
    )
  );
  const right = new BinaryTree(
    3,
    new BinaryTree(
      6,
      new BinaryTree(12, null, null),
      new BinaryTree(13, null, null)
    ),
    new BinaryTree(
      7,
      new BinaryTree(14, null, null),
      new BinaryTree(15, null, null)
    )
  );
  const tree = new BinaryTree(1, left, right);

  assertEquals(symmetric(tree), true);
});

Deno.test("symmetric - deeply nested asymmetric tree", () => {
  const left = new BinaryTree(
    2,
    new BinaryTree(4, new BinaryTree(8, null, null), null),
    new BinaryTree(
      5,
      new BinaryTree(10, null, null),
      new BinaryTree(11, null, null)
    )
  );
  const right = new BinaryTree(
    3,
    new BinaryTree(
      6,
      new BinaryTree(12, null, null),
      new BinaryTree(13, null, null)
    ),
    new BinaryTree(
      7,
      new BinaryTree(14, null, null),
      new BinaryTree(15, null, null)
    )
  );
  const tree = new BinaryTree(1, left, right);

  assertEquals(symmetric(tree), false);
});
