/**
 * Packs consecutive identical elements into sub-arrays.
 *
 * Time Complexity: O(n) - where n is the length of the input array
 * Space Complexity: O(n) - in the worst case, each element could be in its own sub-array
 *
 * @param list - Array of elements to pack
 * @returns Array of arrays where consecutive identical elements are grouped together
 *
 * @example
 * packConsecutives([1, 1, 2, 3, 3, 3, 1]) // returns [[1, 1], [2], [3, 3, 3], [1]]
 * packConsecutives(['a', 'a', 'b', 'c']) // returns [['a', 'a'], ['b'], ['c']]
 */
export function packConsecutives<T>(list: T[]): T[][] {
  const packed: T[][] = [];

  for (let i = 0; i < list.length; i++) {
    if (!packed.length) {
      packed.push([list[i]]); // new bucket for first element
    } else {
      const lastBucket = packed[packed.length - 1];
      if (lastBucket[0] === list[i]) lastBucket.push(list[i]); // same bucket
      else packed.push([list[i]]); // new bucket
    }
  }

  return packed;
}
