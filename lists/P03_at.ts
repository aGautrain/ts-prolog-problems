export function at<T>(list: T[], index: number): T | undefined {
  if (index < 0 || index >= list.length) return undefined;
  else return list[index];
}
