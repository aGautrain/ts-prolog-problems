import { assertEquals } from "@std/assert";
import {
  symCbalTrees,
  countSymCbalTrees,
  analyzeSymCbalTrees,
  canFormSymCbalTrees,
  getSymmetricDistributions,
} from "./P58_generateAndTest.ts";
import { symmetric } from "./P56_symmetric.ts";
import { isCompletelyBalanced } from "./P55_cbalTree.ts";

Deno.test("P58: symCbalTrees - edge cases", () => {
  // n = 0
  const trees0 = symCbalTrees(0);
  assertEquals(trees0.length, 1);
  assertEquals(trees0[0], null);

  // n = 1
  const trees1 = symCbalTrees(1);
  assertEquals(trees1.length, 1);
  assertEquals(trees1[0]?.value, "x");
  assertEquals(symmetric(trees1[0]), true);
  assertEquals(isCompletelyBalanced(trees1[0]), true);
});

Deno.test("P58: symCbalTrees - small trees", () => {
  // n = 2 (even number - should have no symmetric trees)
  const trees2 = symCbalTrees(2);
  assertEquals(trees2.length, 0);

  // n = 3
  const trees3 = symCbalTrees(3);
  assertEquals(trees3.length, 1);
  assertEquals(symmetric(trees3[0]), true);
  assertEquals(isCompletelyBalanced(trees3[0]), true);

  // n = 4 (even number - should have no symmetric trees)
  const trees4 = symCbalTrees(4);
  assertEquals(trees4.length, 0);

  // n = 5
  const trees5 = symCbalTrees(5);
  assertEquals(trees5.length, 2);

  for (const tree of trees5) {
    assertEquals(symmetric(tree), true);
    assertEquals(isCompletelyBalanced(tree), true);
  }
});

Deno.test(
  "P58: symCbalTrees - verify all trees are symmetric and completely balanced",
  () => {
    for (let n = 0; n <= 10; n++) {
      const trees = symCbalTrees(n);

      for (const tree of trees) {
        assertEquals(symmetric(tree), true);
        assertEquals(isCompletelyBalanced(tree), true);
      }
    }
  }
);

Deno.test("P58: countSymCbalTrees - test counting", () => {
  assertEquals(countSymCbalTrees(0), 1);
  assertEquals(countSymCbalTrees(1), 1);
  assertEquals(countSymCbalTrees(2), 0);
  assertEquals(countSymCbalTrees(3), 1);
  assertEquals(countSymCbalTrees(4), 0);
  assertEquals(countSymCbalTrees(5), 2);
  assertEquals(countSymCbalTrees(6), 0);
  assertEquals(countSymCbalTrees(7), 1);
  assertEquals(countSymCbalTrees(8), 0);
  assertEquals(countSymCbalTrees(9), 4);
});

Deno.test("P58: canFormSymCbalTrees - test feasibility", () => {
  // Even numbers (except 0) cannot form symmetric trees
  assertEquals(canFormSymCbalTrees(0), true);
  assertEquals(canFormSymCbalTrees(1), true);
  assertEquals(canFormSymCbalTrees(2), false);
  assertEquals(canFormSymCbalTrees(3), true);
  assertEquals(canFormSymCbalTrees(4), false);
  assertEquals(canFormSymCbalTrees(5), true);
  assertEquals(canFormSymCbalTrees(6), false);
  assertEquals(canFormSymCbalTrees(7), true);
  assertEquals(canFormSymCbalTrees(8), false);
  assertEquals(canFormSymCbalTrees(9), true);
});

Deno.test("P58: getSymmetricDistributions - test distributions", () => {
  // n = 0
  const dist0 = getSymmetricDistributions(0);
  assertEquals(dist0.length, 1);
  assertEquals(dist0[0], { left: 0, right: 0 });

  // n = 1
  const dist1 = getSymmetricDistributions(1);
  assertEquals(dist1.length, 1);
  assertEquals(dist1[0], { left: 0, right: 0 });

  // n = 2 (even - no distributions)
  const dist2 = getSymmetricDistributions(2);
  assertEquals(dist2.length, 0);

  // n = 3
  const dist3 = getSymmetricDistributions(3);
  assertEquals(dist3.length, 1);
  assertEquals(dist3[0], { left: 1, right: 1 });

  // n = 4 (even - no distributions)
  const dist4 = getSymmetricDistributions(4);
  assertEquals(dist4.length, 0);

  // n = 5
  const dist5 = getSymmetricDistributions(5);
  assertEquals(dist5.length, 1);
  assertEquals(dist5[0], { left: 2, right: 2 });
});

Deno.test("P58: analyzeSymCbalTrees - test analysis", () => {
  const analysis = analyzeSymCbalTrees(10);

  assertEquals(analysis.length, 11); // 0 to 10 inclusive

  // Check that even numbers (except 0) have 0 solutions
  for (let i = 0; i < analysis.length; i++) {
    const result = analysis[i];
    assertEquals(result.nodes, i);
    assertEquals(result.isEven, i % 2 === 0);

    if (i === 0) {
      assertEquals(result.count, 1); // Empty tree is symmetric
    } else if (i % 2 === 0) {
      assertEquals(result.count, 0); // Even numbers can't be symmetric
    } else {
      assertEquals(result.count > 0, true); // Odd numbers should have solutions
    }
  }
});

Deno.test("P58: specific examples from problem", () => {
  // Test the specific example from the problem
  const trees5 = symCbalTrees(5);
  assertEquals(trees5.length, 2);

  // Both trees should be different but both symmetric and completely balanced
  const tree1 = trees5[0];
  const tree2 = trees5[1];

  // They should be different structures
  assertEquals(JSON.stringify(tree1) !== JSON.stringify(tree2), true);

  // Both should be symmetric
  assertEquals(symmetric(tree1), true);
  assertEquals(symmetric(tree2), true);

  // Both should be completely balanced
  assertEquals(isCompletelyBalanced(tree1), true);
  assertEquals(isCompletelyBalanced(tree2), true);
});
