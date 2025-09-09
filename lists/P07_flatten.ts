export function flatten<T>(list: (T | T[])[]): T[] {
  const flattened: T[] = [];

  for (let i = 0; i < list.length; i++) {
    if (Array.isArray(list[i])) {
      flattened.push(...flatten(list[i] as T[]));
    } else {
      flattened.push(list[i] as T);
    }
  }

  return flattened;
}
