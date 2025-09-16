export function fibonacciLinear(n: number): number {
  if (n === 0 || n === 1) return n;

  const terms = [0, 1];
  let k = 2;

  // O(n)
  while (k <= n) {
    terms.push(terms[k - 1] + terms[k - 2]); // push: O(1) + array access O(1) + arithmetic operation O(1)
    k++;
  }

  return terms[terms.length - 1];
}

export function fibonacciTailRecursive(
  n: number,
  a: number = 0,
  b: number = 1
): number {
  if (n === 0) return a;
  if (n === 1) return b;

  return fibonacciTailRecursive(n - 1, b, a + b);
}

export function fibonacciExponential(n: number): number {
  if (n === 0 || n === 1) return n;

  return fibonacciExponential(n - 1) + fibonacciExponential(n - 2);
}

export function fibonacciOptimal(n: number): number {
  if (n === 0 || n === 1) return n;

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    [a, b] = [b, a + b];
  }
  return b;
}
