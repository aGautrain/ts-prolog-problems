import { packConsecutives } from "./P09_packConsecutives.ts";

/**
 * Performs run-length encoding on a list by grouping consecutive identical elements
 * and returning tuples of [count, element].
 *
 * Time Complexity: O(n) - where n is the length of the input array
 *   - packConsecutives: O(n)
 *   - Loop through packed arrays: O(n) in worst case
 *   - Overall: O(n)
 *
 * Space Complexity: O(n) - where n is the length of the input array
 *   - packConsecutives creates O(n) space
 *   - encoded array stores at most n elements
 *   - Overall: O(n)
 *
 * @param list - Array of elements to encode
 * @returns Array of tuples where each tuple contains [count, element]
 *
 * @example
 * lengthEncoding([1, 1, 2, 3, 3, 3, 1]) // returns [[2, 1], [1, 2], [3, 3], [1, 1]]
 * lengthEncoding(['a', 'a', 'b', 'c']) // returns [[2, 'a'], [1, 'b'], [1, 'c']]
 */
export function lengthEncoding<T>(list: T[]): Array<[number, T]> {
  const packed = packConsecutives(list);
  const encoded: Array<[number, T]> = [];

  for (let i = 0; i < packed.length; i++) {
    encoded.push([packed[i].length, packed[i][0]]);
  }

  return encoded;
}
