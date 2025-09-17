import { assertEquals } from "https://deno.land/std@0.208.0/assert/assert_equals.ts";
import {
  add,
  construct,
  testSymmetric,
  isValidBST,
  inorder,
  search,
} from "./P57_binarySearchTree.ts";
import { BinaryTree } from "./types.ts";

// Helper function to create a simple compare function for numbers
const numberCompare = (a: number, b: number) => a - b;

// Helper function to create a reverse compare function for numbers (descending order)
const reverseNumberCompare = (a: number, b: number) => b - a;

// Tests for add function
Deno.test("add - add to empty tree", () => {
  const tree = new BinaryTree(5, null, null);
  add(3, tree, numberCompare);

  assertEquals(tree.left?.value, 3);
  assertEquals(tree.right, null);
});

Deno.test("add - add smaller value to left", () => {
  const tree = new BinaryTree(5, null, null);
  add(3, tree, numberCompare);
  add(1, tree, numberCompare);

  assertEquals(tree.left?.left?.value, 1);
  assertEquals(tree.left?.right, null);
  assertEquals(tree.right, null);
});

Deno.test("add - add larger value to right", () => {
  const tree = new BinaryTree(5, null, null);
  add(7, tree, numberCompare);
  add(9, tree, numberCompare);

  assertEquals(tree.right?.value, 7);
  assertEquals(tree.right?.right?.value, 9);
  assertEquals(tree.left, null);
});

Deno.test(
  "add - add equal value (should go to right based on current logic)",
  () => {
    const tree = new BinaryTree(5, null, null);
    add(5, tree, numberCompare);

    assertEquals(tree.right?.value, 5);
    assertEquals(tree.left, null);
  }
);

Deno.test("add - complex tree structure", () => {
  const tree = new BinaryTree(10, null, null);
  add(5, tree, numberCompare);
  add(15, tree, numberCompare);
  add(3, tree, numberCompare);
  add(7, tree, numberCompare);
  add(12, tree, numberCompare);
  add(18, tree, numberCompare);

  // Verify structure: 10(5(3,7), 15(12,18))
  assertEquals(tree.value, 10);
  assertEquals(tree.left?.value, 5);
  assertEquals(tree.right?.value, 15);
  assertEquals(tree.left?.left?.value, 3);
  assertEquals(tree.left?.right?.value, 7);
  assertEquals(tree.right?.left?.value, 12);
  assertEquals(tree.right?.right?.value, 18);
});

// Tests for construct function
Deno.test("construct - single element", () => {
  const tree = construct([5]);

  assertEquals(tree.value, 5);
  assertEquals(tree.left, null);
  assertEquals(tree.right, null);
});

Deno.test("construct - two elements", () => {
  const tree = construct([5, 3]);

  assertEquals(tree.value, 5);
  assertEquals(tree.left?.value, 3);
  assertEquals(tree.right, null);
});

Deno.test("construct - three elements", () => {
  const tree = construct([5, 3, 7]);

  assertEquals(tree.value, 5);
  assertEquals(tree.left?.value, 3);
  assertEquals(tree.right?.value, 7);
});

Deno.test("construct - example from problem statement", () => {
  const tree = construct([3, 2, 5, 7, 1]);

  // Expected structure: t(3, t(2, t(1, nil, nil), nil), t(5, nil, t(7, nil, nil)))
  assertEquals(tree.value, 3);
  assertEquals(tree.left?.value, 2);
  assertEquals(tree.right?.value, 5);
  assertEquals(tree.left?.left?.value, 1);
  assertEquals(tree.left?.right, null);
  assertEquals(tree.right?.left, null);
  assertEquals(tree.right?.right?.value, 7);
});

Deno.test("construct - empty array throws error", () => {
  try {
    construct([]);
    assertEquals(true, false, "Should have thrown an error");
  } catch (error) {
    assertEquals(
      (error as Error).message,
      "BST cannot be constructed with empty array"
    );
  }
});

Deno.test("construct - duplicate values", () => {
  const tree = construct([5, 5, 5]);

  assertEquals(tree.value, 5);
  assertEquals(tree.left, null);
  assertEquals(tree.right?.value, 5);
  assertEquals(tree.right?.right?.value, 5);
});

// Tests for testSymmetric function
Deno.test("testSymmetric - symmetric tree from problem example", () => {
  const result = testSymmetric([5, 3, 18, 1, 4, 12, 21]);
  assertEquals(result, true);
});

Deno.test("testSymmetric - non-symmetric tree from problem example", () => {
  const result = testSymmetric([3, 2, 5, 7, 4]);
  assertEquals(result, false);
});

Deno.test("testSymmetric - single element (symmetric)", () => {
  const result = testSymmetric([5]);
  assertEquals(result, true);
});

Deno.test("testSymmetric - two elements (not symmetric)", () => {
  const result = testSymmetric([5, 3]);
  assertEquals(result, false);
});

Deno.test("testSymmetric - three elements (symmetric)", () => {
  const result = testSymmetric([5, 3, 7]);
  assertEquals(result, true);
});

Deno.test("testSymmetric - four elements (not symmetric)", () => {
  const result = testSymmetric([5, 3, 7, 1]);
  assertEquals(result, false);
});

// Tests for isValidBST function
Deno.test("isValidBST - single node (valid)", () => {
  const tree = new BinaryTree(5, null, null);
  const result = isValidBST(tree, numberCompare);
  assertEquals(result, true);
});

Deno.test("isValidBST - simple valid BST", () => {
  const tree = new BinaryTree(
    5,
    new BinaryTree(3, null, null),
    new BinaryTree(7, null, null)
  );
  const result = isValidBST(tree, numberCompare);
  assertEquals(result, true);
});

Deno.test("isValidBST - invalid BST (left child greater than root)", () => {
  const tree = new BinaryTree(
    5,
    new BinaryTree(7, null, null),
    new BinaryTree(3, null, null)
  );
  const result = isValidBST(tree, numberCompare);
  assertEquals(result, false);
});

Deno.test("isValidBST - invalid BST (right child less than root)", () => {
  const tree = new BinaryTree(
    5,
    new BinaryTree(3, null, null),
    new BinaryTree(2, null, null)
  );
  const result = isValidBST(tree, numberCompare);
  assertEquals(result, false);
});

Deno.test("isValidBST - complex valid BST", () => {
  const tree = new BinaryTree(
    10,
    new BinaryTree(
      5,
      new BinaryTree(3, null, null),
      new BinaryTree(7, null, null)
    ),
    new BinaryTree(
      15,
      new BinaryTree(12, null, null),
      new BinaryTree(18, null, null)
    )
  );
  const result = isValidBST(tree, numberCompare);
  assertEquals(result, true);
});

Deno.test(
  "isValidBST - complex invalid BST (violation in left subtree)",
  () => {
    const tree = new BinaryTree(
      10,
      new BinaryTree(
        5,
        new BinaryTree(7, null, null), // 7 > 5, invalid
        new BinaryTree(3, null, null)
      ),
      new BinaryTree(
        15,
        new BinaryTree(12, null, null),
        new BinaryTree(18, null, null)
      )
    );
    const result = isValidBST(tree, numberCompare);
    assertEquals(result, false);
  }
);

Deno.test(
  "isValidBST - complex invalid BST (violation in right subtree)",
  () => {
    const tree = new BinaryTree(
      10,
      new BinaryTree(
        5,
        new BinaryTree(3, null, null),
        new BinaryTree(7, null, null)
      ),
      new BinaryTree(
        15,
        new BinaryTree(18, null, null), // 18 > 15, invalid
        new BinaryTree(12, null, null)
      )
    );
    const result = isValidBST(tree, numberCompare);
    assertEquals(result, false);
  }
);

Deno.test("isValidBST - tree with only left children (valid)", () => {
  const tree = new BinaryTree(
    10,
    new BinaryTree(
      8,
      new BinaryTree(6, new BinaryTree(4, null, null), null),
      null
    ),
    null
  );
  const result = isValidBST(tree, numberCompare);
  assertEquals(result, true);
});

Deno.test("isValidBST - tree with only right children (valid)", () => {
  const tree = new BinaryTree(
    10,
    null,
    new BinaryTree(
      12,
      null,
      new BinaryTree(14, null, new BinaryTree(16, null, null))
    )
  );
  const result = isValidBST(tree, numberCompare);
  assertEquals(result, true);
});

Deno.test(
  "isValidBST - with custom compare function (descending order)",
  () => {
    const tree = new BinaryTree(
      10,
      new BinaryTree(15, null, null), // In descending order, left should be greater
      new BinaryTree(5, null, null) // Right should be smaller
    );
    const result = isValidBST(tree, reverseNumberCompare);
    assertEquals(result, true);
  }
);

Deno.test("isValidBST - constructed tree should be valid", () => {
  const numbers = [10, 5, 15, 3, 7, 12, 18, 1, 4, 6, 8, 11, 13, 16, 20];
  const tree = construct(numbers, numberCompare);
  const result = isValidBST(tree, numberCompare);
  assertEquals(result, true);
});

// Integration tests
Deno.test("Integration - construct and validate BST", () => {
  const numbers = [8, 3, 10, 1, 6, 14, 4, 7, 13];
  const tree = construct(numbers, numberCompare);
  const isValid = isValidBST(tree, numberCompare);
  assertEquals(isValid, true);
});

Deno.test("Integration - add multiple values and validate", () => {
  const tree = new BinaryTree(10, null, null);
  const values = [5, 15, 3, 7, 12, 18, 1, 4, 6, 8, 11, 13, 16, 20];

  values.forEach((value) => add(value, tree, numberCompare));

  const isValid = isValidBST(tree, numberCompare);
  assertEquals(isValid, true);
});

// Tests for inorder function
Deno.test("inorder - single node", () => {
  const tree = new BinaryTree(5, null, null);
  const result = inorder(tree);
  assertEquals(result, [5]);
});

Deno.test("inorder - simple tree with left child", () => {
  const tree = new BinaryTree(5, new BinaryTree(3, null, null), null);
  const result = inorder(tree);
  assertEquals(result, [3, 5]);
});

Deno.test("inorder - simple tree with right child", () => {
  const tree = new BinaryTree(5, null, new BinaryTree(7, null, null));
  const result = inorder(tree);
  assertEquals(result, [5, 7]);
});

Deno.test("inorder - complete binary tree", () => {
  const tree = new BinaryTree(
    5,
    new BinaryTree(
      3,
      new BinaryTree(1, null, null),
      new BinaryTree(4, null, null)
    ),
    new BinaryTree(
      7,
      new BinaryTree(6, null, null),
      new BinaryTree(8, null, null)
    )
  );
  const result = inorder(tree);
  assertEquals(result, [1, 3, 4, 5, 6, 7, 8]);
});

Deno.test("inorder - left-skewed tree", () => {
  const tree = new BinaryTree(
    5,
    new BinaryTree(
      4,
      new BinaryTree(
        3,
        new BinaryTree(2, new BinaryTree(1, null, null), null),
        null
      ),
      null
    ),
    null
  );
  const result = inorder(tree);
  assertEquals(result, [1, 2, 3, 4, 5]);
});

Deno.test("inorder - right-skewed tree", () => {
  const tree = new BinaryTree(
    1,
    null,
    new BinaryTree(
      2,
      null,
      new BinaryTree(
        3,
        null,
        new BinaryTree(4, null, new BinaryTree(5, null, null))
      )
    )
  );
  const result = inorder(tree);
  assertEquals(result, [1, 2, 3, 4, 5]);
});

Deno.test("inorder - tree with only left children", () => {
  const tree = new BinaryTree(
    10,
    new BinaryTree(
      8,
      new BinaryTree(6, new BinaryTree(4, null, null), null),
      null
    ),
    null
  );
  const result = inorder(tree);
  assertEquals(result, [4, 6, 8, 10]);
});

Deno.test("inorder - tree with only right children", () => {
  const tree = new BinaryTree(
    10,
    null,
    new BinaryTree(
      12,
      null,
      new BinaryTree(14, null, new BinaryTree(16, null, null))
    )
  );
  const result = inorder(tree);
  assertEquals(result, [10, 12, 14, 16]);
});

Deno.test("inorder - constructed BST should give sorted order", () => {
  const numbers = [5, 3, 7, 1, 4, 6, 8, 2, 9];
  const tree = construct(numbers, numberCompare);
  const result = inorder(tree);
  const expected = [...numbers].sort(numberCompare);
  assertEquals(result, expected);
});

// Tests for search function
Deno.test("search - find root value", () => {
  const tree = new BinaryTree(5, null, null);
  const result = search(5, tree, numberCompare);
  assertEquals(result, true);
});

Deno.test("search - find value in left subtree", () => {
  const tree = new BinaryTree(5, new BinaryTree(3, null, null), null);
  const result = search(3, tree, numberCompare);
  assertEquals(result, true);
});

Deno.test("search - find value in right subtree", () => {
  const tree = new BinaryTree(5, null, new BinaryTree(7, null, null));
  const result = search(7, tree, numberCompare);
  assertEquals(result, true);
});

Deno.test("search - value not found in empty left subtree", () => {
  const tree = new BinaryTree(5, null, new BinaryTree(7, null, null));
  const result = search(3, tree, numberCompare);
  assertEquals(result, false);
});

Deno.test("search - value not found in empty right subtree", () => {
  const tree = new BinaryTree(5, new BinaryTree(3, null, null), null);
  const result = search(7, tree, numberCompare);
  assertEquals(result, false);
});

Deno.test("search - value not found in complex tree", () => {
  const tree = new BinaryTree(
    10,
    new BinaryTree(
      5,
      new BinaryTree(3, null, null),
      new BinaryTree(7, null, null)
    ),
    new BinaryTree(
      15,
      new BinaryTree(12, null, null),
      new BinaryTree(18, null, null)
    )
  );
  const result = search(8, tree, numberCompare);
  assertEquals(result, false);
});

Deno.test("search - find value in complex tree (left subtree)", () => {
  const tree = new BinaryTree(
    10,
    new BinaryTree(
      5,
      new BinaryTree(3, null, null),
      new BinaryTree(7, null, null)
    ),
    new BinaryTree(
      15,
      new BinaryTree(12, null, null),
      new BinaryTree(18, null, null)
    )
  );
  const result = search(3, tree, numberCompare);
  assertEquals(result, true);
});

Deno.test("search - find value in complex tree (right subtree)", () => {
  const tree = new BinaryTree(
    10,
    new BinaryTree(
      5,
      new BinaryTree(3, null, null),
      new BinaryTree(7, null, null)
    ),
    new BinaryTree(
      15,
      new BinaryTree(12, null, null),
      new BinaryTree(18, null, null)
    )
  );
  const result = search(18, tree, numberCompare);
  assertEquals(result, true);
});

Deno.test("search - find value in complex tree (middle level)", () => {
  const tree = new BinaryTree(
    10,
    new BinaryTree(
      5,
      new BinaryTree(3, null, null),
      new BinaryTree(7, null, null)
    ),
    new BinaryTree(
      15,
      new BinaryTree(12, null, null),
      new BinaryTree(18, null, null)
    )
  );
  const result = search(7, tree, numberCompare);
  assertEquals(result, true);
});

Deno.test("search - with custom compare function (descending order)", () => {
  const tree = new BinaryTree(
    10,
    new BinaryTree(15, null, null), // In descending order, left should be greater
    new BinaryTree(5, null, null) // Right should be smaller
  );
  const result1 = search(15, tree, reverseNumberCompare);
  const result2 = search(5, tree, reverseNumberCompare);
  const result3 = search(8, tree, reverseNumberCompare);

  assertEquals(result1, true);
  assertEquals(result2, true);
  assertEquals(result3, false);
});

Deno.test("search - search in constructed BST", () => {
  const numbers = [10, 5, 15, 3, 7, 12, 18, 1, 4, 6, 8, 11, 13, 16, 20];
  const tree = construct(numbers, numberCompare);

  // Test finding existing values
  assertEquals(search(10, tree, numberCompare), true);
  assertEquals(search(1, tree, numberCompare), true);
  assertEquals(search(20, tree, numberCompare), true);
  assertEquals(search(7, tree, numberCompare), true);

  // Test finding non-existing values
  assertEquals(search(2, tree, numberCompare), false);
  assertEquals(search(9, tree, numberCompare), false);
  assertEquals(search(14, tree, numberCompare), false);
  assertEquals(search(21, tree, numberCompare), false);
});

Deno.test("search - O(log n) time complexity verification", () => {
  const numbers = [10, 5, 15, 3, 7, 12, 18, 1, 4, 6, 8, 11, 13, 16, 20];
  const tree = construct(numbers, numberCompare);

  // Override search function to count recursive calls
  let callCount = 0;
  function searchWithCounter<T>(
    value: T,
    tree: BinaryTree<T>,
    compare: (a: T, b: T) => number
  ): boolean {
    callCount++;

    if (value === tree.value) return true;

    if (compare(value, tree.value) < 0) {
      if (tree.left === null) return false;
      else return searchWithCounter(value, tree.left, compare);
    } else {
      if (tree.right === null) return false;
      else return searchWithCounter(value, tree.right, compare);
    }
  }

  // Test search for existing value and verify call count
  callCount = 0;
  const result1 = searchWithCounter(1, tree, numberCompare);
  assertEquals(result1, true);
  // For a balanced BST with 15 nodes, max depth should be around log2(15) ≈ 4
  // Allow some tolerance for unbalanced tree structure
  const maxExpectedCalls = Math.ceil(Math.log2(numbers.length)) + 2;
  assertEquals(
    callCount <= maxExpectedCalls,
    true,
    `Expected at most ${maxExpectedCalls} calls, but got ${callCount}`
  );

  // Test search for non-existing value
  callCount = 0;
  const result2 = searchWithCounter(9, tree, numberCompare);
  assertEquals(result2, false);
  assertEquals(
    callCount <= maxExpectedCalls,
    true,
    `Expected at most ${maxExpectedCalls} calls, but got ${callCount}`
  );

  // Test search for root (should be 1 call)
  callCount = 0;
  const result3 = searchWithCounter(10, tree, numberCompare);
  assertEquals(result3, true);
  assertEquals(callCount, 1);
});

// Integration tests for inorder and search
Deno.test("Integration - inorder and search consistency", () => {
  const numbers = [8, 3, 10, 1, 6, 14, 4, 7, 13];
  const tree = construct(numbers, numberCompare);
  const inorderResult = inorder(tree);

  // All original numbers should be found
  numbers.forEach((num) => {
    assertEquals(search(num, tree, numberCompare), true);
  });

  // Inorder should give sorted order
  const expected = [...numbers].sort(numberCompare);
  assertEquals(inorderResult, expected);

  // Values not in the tree should not be found
  const notInTree = [2, 5, 9, 11, 15];
  notInTree.forEach((num) => {
    assertEquals(search(num, tree, numberCompare), false);
  });
});
