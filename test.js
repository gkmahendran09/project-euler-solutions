import test from "ava";

import { getSum } from "./src/1.js";

import { getSum as getSum2 } from "./src/2.js";

test("1 - Get sum of multiples of 3 or 5 between 10", t => {
  let sum = getSum(10);
  t.is(sum, 23);
  // 1000 - 233168
});

test("2 - Get sum of even Fibonacci numbers between 10", t => {
  let sum = getSum2(10);
  t.is(sum, 10);
  // 4000000 - 4613732
});