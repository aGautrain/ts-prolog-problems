import { packConsecutives } from "./P09_packConsecutives.ts";

/**
 * Performs modified run-length encoding on a list by grouping consecutive identical elements.
 * Elements with duplicates are encoded as [count, element] tuples, while single elements
 * are copied directly into the result list.
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
 * @returns Array containing either single elements or [count, element] tuples
 *
 * @example
 * modifiedLengthEncoding([1, 1, 2, 3, 3, 3, 1]) // returns [[2, 1], 2, [3, 3], 1]
 * modifiedLengthEncoding(['a', 'a', 'b', 'c']) // returns [[2, 'a'], 'b', 'c']
 */
export function modifiedLengthEncoding<T>(list: T[]): Array<T | [number, T]> {
  const packed = packConsecutives(list);
  const encoded: Array<T | [number, T]> = [];

  for (let i = 0; i < packed.length; i++) {
    if (packed[i].length > 1) encoded.push([packed[i].length, packed[i][0]]);
    else encoded.push(packed[i][0]);
  }

  return encoded;
}
