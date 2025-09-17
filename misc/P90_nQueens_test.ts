import { assertEquals } from "https://deno.land/std@0.208.0/assert/assert_equals.ts";
import { isSafe } from "./P90_nQueens.ts";

Deno.test("isSafe - empty board (all zeros)", () => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  assertEquals(isSafe(1, 1, board), true);
  assertEquals(isSafe(0, 0, board), true);
  assertEquals(isSafe(2, 2, board), true);
});

Deno.test("isSafe - queen in same column", () => {
  const board = [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  assertEquals(isSafe(1, 0, board), false); // Same column as existing queen
  assertEquals(isSafe(2, 0, board), false); // Same column as existing queen
  assertEquals(isSafe(0, 1, board), false); // Same row as existing queen
  assertEquals(isSafe(1, 1, board), false); // Diagonal from existing queen
});

Deno.test("isSafe - queen in same row", () => {
  const board = [
    [0, 1, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  assertEquals(isSafe(0, 0, board), false); // Same row as existing queen
  assertEquals(isSafe(0, 2, board), false); // Same row as existing queen
  assertEquals(isSafe(1, 0, board), false); // Diagonal from existing queen
  assertEquals(isSafe(2, 1, board), false); // Diagonal from existing queen
});

Deno.test("isSafe - queen on top-left diagonal", () => {
  const board = [
    [1, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  assertEquals(isSafe(1, 1, board), false); // On diagonal
  assertEquals(isSafe(2, 2, board), false); // On diagonal
  assertEquals(isSafe(0, 1, board), false); // Same row as existing queen
  assertEquals(isSafe(1, 0, board), false); // Same column as existing queen
});

Deno.test("isSafe - queen on bottom-right diagonal", () => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 1],
  ];

  assertEquals(isSafe(1, 1, board), false); // On diagonal
  assertEquals(isSafe(0, 0, board), false); // On diagonal
  assertEquals(isSafe(0, 1, board), true); // Safe - not in same row, column, or diagonal
  assertEquals(isSafe(1, 0, board), true); // Safe - not in same row, column, or diagonal
});

Deno.test("isSafe - queen on bottom-left diagonal", () => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [1, 0, 0],
  ];

  assertEquals(isSafe(1, 1, board), false); // On diagonal
  assertEquals(isSafe(0, 2, board), false); // On diagonal
  assertEquals(isSafe(0, 0, board), false); // On diagonal
  assertEquals(isSafe(1, 2, board), true); // Safe - not in same row, column, or diagonal
});

Deno.test("isSafe - queen on top-right diagonal", () => {
  const board = [
    [0, 0, 1],
    [0, 0, 0],
    [0, 0, 0],
  ];

  assertEquals(isSafe(1, 1, board), false); // On diagonal
  assertEquals(isSafe(2, 0, board), false); // On diagonal
  assertEquals(isSafe(0, 0, board), false); // Same row as existing queen
  assertEquals(isSafe(1, 0, board), true); // Safe - not in same row, column, or diagonal
});

Deno.test("isSafe - multiple queens blocking", () => {
  const board = [
    [1, 0, 0, 0],
    [0, 0, 1, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  // Position (2, 1) should be unsafe due to:
  // - Queen at (0, 0) on top-left diagonal
  // - Queen at (1, 2) on top-right diagonal
  assertEquals(isSafe(2, 1, board), false);

  // Position (3, 3) should be unsafe due to queen at (1, 2) on diagonal
  assertEquals(isSafe(3, 3, board), false);

  // Position (0, 3) should be unsafe due to queen at (0, 0) in same row
  assertEquals(isSafe(0, 3, board), false);
});

Deno.test("isSafe - edge cases", () => {
  const board = [
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ];

  // Test corner positions
  assertEquals(isSafe(0, 0, board), true);
  assertEquals(isSafe(0, 2, board), true);
  assertEquals(isSafe(2, 0, board), true);
  assertEquals(isSafe(2, 2, board), true);
});

Deno.test("isSafe - single queen in center", () => {
  const board = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];

  // All positions should be unsafe except the center itself
  assertEquals(isSafe(0, 0, board), false); // Top-left diagonal
  assertEquals(isSafe(0, 1, board), false); // Same column
  assertEquals(isSafe(0, 2, board), false); // Top-right diagonal
  assertEquals(isSafe(1, 0, board), false); // Same row
  assertEquals(isSafe(1, 1, board), false); // Same position (center)
  assertEquals(isSafe(1, 2, board), false); // Same row
  assertEquals(isSafe(2, 0, board), false); // Bottom-left diagonal
  assertEquals(isSafe(2, 1, board), false); // Same column
  assertEquals(isSafe(2, 2, board), false); // Bottom-right diagonal
});

Deno.test("isSafe - larger board with multiple queens", () => {
  const board = [
    [1, 0, 0, 0, 0],
    [0, 0, 0, 1, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  // Test various positions
  assertEquals(isSafe(2, 0, board), false); // Blocked by queen at (0, 0) on diagonal
  assertEquals(isSafe(2, 1, board), true); // Safe - not blocked by either queen
  assertEquals(isSafe(2, 2, board), false); // Blocked by queen at (0, 0) on diagonal
  assertEquals(isSafe(2, 3, board), false); // Blocked by queen at (1, 3) on diagonal
  assertEquals(isSafe(2, 4, board), false); // Blocked by queen at (1, 3) on diagonal
  assertEquals(isSafe(3, 1, board), false); // Blocked by queen at (0, 0) on diagonal
  assertEquals(isSafe(4, 2, board), true); // Safe - not blocked by either queen
});

Deno.test("isSafe - board with queen at position being tested", () => {
  const board = [
    [0, 0, 0],
    [0, 1, 0],
    [0, 0, 0],
  ];

  assertEquals(isSafe(1, 1, board), false);
});

Deno.test("isSafe - actually safe positions", () => {
  // Create a board where some positions are actually safe
  const board = [
    [0, 0, 0, 0],
    [0, 1, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ];

  // These positions should be safe (not in same row, column, or diagonal as queen at (1,1))
  assertEquals(isSafe(0, 0, board), false); // On diagonal
  assertEquals(isSafe(0, 2, board), false); // On diagonal
  assertEquals(isSafe(2, 0, board), false); // On diagonal
  assertEquals(isSafe(2, 2, board), false); // On diagonal
  assertEquals(isSafe(0, 3, board), true); // Safe - not in same row, column, or diagonal
  assertEquals(isSafe(2, 3, board), true); // Safe - not in same row, column, or diagonal
  assertEquals(isSafe(3, 1, board), false); // Same column as queen
  assertEquals(isSafe(3, 0, board), true); // Safe - not in same row, column, or diagonal
  assertEquals(isSafe(3, 2, board), true); // Safe - not in same row, column, or diagonal
  assertEquals(isSafe(3, 3, board), false); // On diagonal
});

Deno.test("isSafe - truly safe positions", () => {
  // Create a board with queens positioned such that some positions are safe
  const board = [
    [1, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0],
  ];

  // Position (2, 3) should be safe - not in same row, column, or diagonal as queen at (0,0)
  assertEquals(isSafe(2, 3, board), true);
  assertEquals(isSafe(3, 2, board), true);
  assertEquals(isSafe(4, 4, board), false); // On diagonal with queen at (0,0)
});
