import test from "ava";

import { getSum } from "./src/1.js";
test("1 - Get sum of multiples of 3 or 5 between 10", t => {
  let sum = getSum(10);
  t.is(sum, 23);
  // 10 - 23

  let sum1 = getSum(1000);
  t.is(sum1, 233168);
  // 1000 - 233168
});

import { getSum as getSum2 } from "./src/2.js";
test("2 - Get sum of even Fibonacci numbers between 10", t => {
  let sum = getSum2(10);
  t.is(sum, 10);
  // 10 - 10

  let sum1 = getSum2(4000000);
  t.is(sum1, 4613732);
  // 4000000 - 4613732
});

import { getLargestPrime } from "./src/3.js";
test("3 - Get the largest prime factors of 13195", t => {
  // console.time("getLargestPrime");
  let largestPrime = getLargestPrime(13195);
  // console.timeEnd("getLargestPrime");
  t.is(largestPrime, 29);
  // 13195 - 29

  let largestPrime1 = getLargestPrime(600851475143);
  // console.timeEnd("getLargestPrime");
  t.is(largestPrime1, 6857);
  // 600851475143 - 6857
});

import { getLargestPalindromeProduct } from "./src/4.js";
test("4 - Largest palindrome product", t => {
  let largestPalindromeProduct = getLargestPalindromeProduct(2);
  t.is(largestPalindromeProduct, 9009);
  // 2 - 9009

  let largestPalindromeProduct1 = getLargestPalindromeProduct(3);
  t.is(largestPalindromeProduct1, 906609);
  // 3 - 906609
});