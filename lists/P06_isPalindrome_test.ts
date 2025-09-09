import { assertEquals } from "@std/assert";
import { isPalindrome } from "./P06_isPalindrome.ts";

Deno.test(function isPalindromeTest() {
  // Test with numbers - palindromes
  assertEquals(isPalindrome([1, 2, 3, 2, 1]), true);
  assertEquals(isPalindrome([1, 2, 2, 1]), true);
  assertEquals(isPalindrome([5]), true);
  assertEquals(isPalindrome([1, 1]), true);

  // Test with numbers - not palindromes
  assertEquals(isPalindrome([1, 2, 3, 4, 5]), false);
  assertEquals(isPalindrome([1, 2, 3]), false);
  assertEquals(isPalindrome([1, 2]), false);

  // Test with strings - palindromes
  assertEquals(isPalindrome(["a", "b", "a"]), true);
  assertEquals(isPalindrome(["a", "b", "b", "a"]), true);
  assertEquals(isPalindrome(["a"]), true);
  assertEquals(isPalindrome(["hello", "world", "hello"]), true);

  // Test with strings - not palindromes
  assertEquals(isPalindrome(["a", "b", "c"]), false);
  assertEquals(isPalindrome(["hello", "world"]), false);

  // Test with booleans - palindromes
  assertEquals(isPalindrome([true, false, true]), true);
  assertEquals(isPalindrome([true, true]), true);
  assertEquals(isPalindrome([false]), true);

  // Test with booleans - not palindromes
  assertEquals(isPalindrome([true, false]), false);
  assertEquals(isPalindrome([false, true, false, true]), false);

  // Test with mixed types - palindromes
  assertEquals(isPalindrome([1, "a", 1]), true);
  assertEquals(isPalindrome([true, 42, true]), true);

  // Test with mixed types - not palindromes
  assertEquals(isPalindrome([1, "a", 2]), false);
  assertEquals(isPalindrome([true, 42, false]), false);

  // Test with empty array (considered palindrome)
  assertEquals(isPalindrome([]), true);

  // Test with duplicate elements - palindromes
  assertEquals(isPalindrome([1, 1, 1]), true);
  assertEquals(isPalindrome(["a", "a", "a", "a"]), true);

  // Test with duplicate elements - not palindromes
  assertEquals(isPalindrome([1, 1, 2, 1]), false);
  assertEquals(isPalindrome(["a", "a", "b", "a"]), false);

  // Test with null and undefined
  assertEquals(isPalindrome([null, undefined, null]), true);
  assertEquals(isPalindrome([null, undefined]), false);
  assertEquals(isPalindrome([undefined, null, undefined]), true);
});
