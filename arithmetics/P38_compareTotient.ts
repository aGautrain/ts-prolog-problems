/**
 * P38 (*) Compare the two methods of calculating Euler's totient function.
 * Use the solutions of problems P34 and P37 to compare the algorithms. Take the number of logical inferences as a measure for efficiency. Try to calculate phi(10090) as an example.
 */

import { totientPhi } from "./P34_totientPhi.ts";
import { totientPhiImproved } from "./P37_totientPhiImproved.ts";

export interface TotientComparison {
  value: number;
  primitiveTime: number;
  improvedTime: number;
  primitiveResult: number;
  improvedResult: number;
}

export function compareTotient(m: number): TotientComparison {
  // TODO: Implement comparison of totient calculation methods
  return {
    value: m,
    primitiveTime: 0,
    improvedTime: 0,
    primitiveResult: 0,
    improvedResult: 0,
  };
}
