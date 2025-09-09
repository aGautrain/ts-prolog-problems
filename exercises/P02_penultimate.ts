export function penultimate<T>(list: T[]): T | undefined {
  if (list.length < 2) return undefined;

  return list[list.length - 2];
}
