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

import { getSmallestMultiple } from "./src/5.js";
test("5 - Smallest multiple", t => {
  let smallestMultiple = getSmallestMultiple(10);
  t.is(smallestMultiple, 2520);
  // 10 - 2520

  let smallestMultiple1 = getSmallestMultiple(20);
  t.is(smallestMultiple1, 232792560);
  // 20 - 232792560
});

import { getSumSquareDifference } from "./src/6.js";
test("6 - Sum square difference", t => {
  let sumSquareDifference = getSumSquareDifference(10);
  t.is(sumSquareDifference, 2640);
  // 10 - 2640

  let sumSquareDifference1 = getSumSquareDifference(100);
  t.is(sumSquareDifference1, 25164150);
  // 100 - 25164150
});

import { getPrime } from "./src/7.js";
test("7 - 10001st prime", t=> {
  let primeNumber = getPrime(6);
  t.is(primeNumber, 13);
  // 6 - 13
  // console.time("Prime Number");
  let primeNumber1 = getPrime(10001);
  t.is(primeNumber1, 104743);
  // console.timeEnd("Prime Number");
  // 10001 - 104743
});

import { getSumOfSelfPowers } from "./src/48.js";
test.only("48 - Self powers", t => {
  let sumOfSelfPowers = getSumOfSelfPowers(10);
  t.is(sumOfSelfPowers, 10405071317);
  // 10 - 10405071317

  let sumOfSelfPowers1 = getSumOfSelfPowers(1000);
  t.is(sumOfSelfPowers1, 10405071317);
  // 1000 - ?
});