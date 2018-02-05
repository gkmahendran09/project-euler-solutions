import test from 'ava';

import { getSum } from "../../src/problem-1/index.js";

test("1 - Get sum of multiples of 3 or 5 between 10", t => {
    let sum = getSum(10);
    t.is(sum,23);
});

test("1 - Get sum of multiples of 3 or 5 between 1000", t => {
  let sum = getSum(1000);
  t.is(sum, 233168);
});
