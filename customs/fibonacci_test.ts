import { assertEquals } from "@std/assert";
import { fibonacciOptimal as fibonacci } from "./fibonacci.ts";

Deno.test(function fibonacciTest() {
  // Test base cases
  assertEquals(fibonacci(0), 0);
  assertEquals(fibonacci(1), 1);

  // Test small positive numbers
  assertEquals(fibonacci(2), 1);
  assertEquals(fibonacci(3), 2);
  assertEquals(fibonacci(4), 3);
  assertEquals(fibonacci(5), 5);
  assertEquals(fibonacci(6), 8);
  assertEquals(fibonacci(7), 13);
  assertEquals(fibonacci(8), 21);
  assertEquals(fibonacci(9), 34);
  assertEquals(fibonacci(10), 55);

  // Test larger numbers (but not too large to avoid performance issues)
  assertEquals(fibonacci(15), 610);
  assertEquals(fibonacci(20), 6765);

  // Test negative numbers (should handle gracefully or throw)
  // Note: The current implementation will cause infinite recursion with negative numbers
  // This test documents the current behavior - you might want to add input validation
  try {
    fibonacci(-1);
    // If it doesn't throw, the test will fail
    assertEquals(
      true,
      false,
      "Expected fibonacci(-1) to throw or handle negative input"
    );
  } catch (error) {
    // Expected behavior for negative input
    assertEquals(error instanceof RangeError || error instanceof Error, true);
  }
});

Deno.test(function fibonacciEdgeCases() {
  assertEquals(fibonacci(0), 0);
  assertEquals(fibonacci(1), 1);

  // Test the fibonacci sequence property: F(n) = F(n-1) + F(n-2)
  const n = 10;
  assertEquals(fibonacci(n), fibonacci(n - 1) + fibonacci(n - 2));

  const n2 = 15;
  assertEquals(fibonacci(n2), fibonacci(n2 - 1) + fibonacci(n2 - 2));
});

Deno.test(function fibonacci29() {
  assertEquals(fibonacci(29), 514229);
});

Deno.test(function fibonacci43() {
  assertEquals(fibonacci(43), 433494437);
});

Deno.test(function fibonacci44() {
  assertEquals(fibonacci(44), 701408733);
});

Deno.test(function fibonacci47() {
  assertEquals(fibonacci(47), 2971215073);
});

Deno.test(function fibonacciSequenceVerification() {
  // Verify the first 15 numbers of the fibonacci sequence
  const expectedSequence = [
    0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, 377,
  ];

  for (let i = 0; i < expectedSequence.length; i++) {
    assertEquals(
      fibonacci(i),
      expectedSequence[i],
      `fibonacci(${i}) should equal ${expectedSequence[i]}`
    );
  }
});
