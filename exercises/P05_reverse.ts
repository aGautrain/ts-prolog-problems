/**
 * Reverses the order of elements in an array
 *
 * Time Complexity: O(n) - where n is the length of the input array
 * Space Complexity: O(n) - creates a new array of the same size
 *
 * @param list - The array to reverse
 * @returns A new array with elements in reversed order
 */
export function reverse<T>(list: T[]): T[] {
  const reversed = [];

  for (let i = list.length - 1; i >= 0; i--) {
    reversed.push(list[i]);
  }

  return reversed;
}
