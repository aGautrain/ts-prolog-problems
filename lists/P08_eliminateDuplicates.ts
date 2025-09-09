export function eliminateDuplicates<T>(list: T[]): T[] {
  // Time Complexity: O(n²) - for each element, indexOf scans the entire array
  // Space Complexity: O(n) - creates a new array with at most n elements
  // indexOf returns first element index (doing an equality check)
  return list.filter((element, index) => list.indexOf(element) === index);
}

// A Set uses a HashMap, resulting in .has() function O(1) on average and O(n) on worst case (rare)
export function eliminateDuplicatesOpti<T>(list: T[]): T[] {
  // Time Complexity: O(n) - single pass through the array, Set operations are O(1)
  // Space Complexity: O(n) - Set stores at most n unique elements
  // More efficient than eliminateDuplicates for large arrays with many duplicates
  const seen = new Set<T>();
  return list.filter((element) => {
    if (seen.has(element)) {
      return false;
    }
    seen.add(element);
    return true;
  });
}
