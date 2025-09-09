import { reverse } from "./P05_reverse.ts";

/**
 * Checks if an array is a palindrome (reads the same forwards and backwards)
 *
 * Time Complexity: O(n) - where n is the length of the input array
 * Space Complexity: O(n) - creates a reversed copy of the array for comparison
 *
 * @param list - The array to check for palindrome property
 * @returns true if the array is a palindrome, false otherwise
 */
export function isPalindrome<T>(list: T[]): boolean {
  const reversed = reverse(list);

  let isPalindrome = true;
  let i = 0;

  while (isPalindrome) {
    isPalindrome = list[i] === reversed[i];
    i++;
    if (i >= list.length) break;
  }

  return isPalindrome;
}
