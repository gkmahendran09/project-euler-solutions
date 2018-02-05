import test from "ava";

import { getSum } from "../../src/problem-2/index.js";

test("2 - Get sum of even Fibonacci numbers between 10", t => {
  let sum = getSum(4000000);
  console.log(sum);
  t.is(sum, 4613732);
});