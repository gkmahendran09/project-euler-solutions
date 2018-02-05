export function getSum(limit) {
  let sum = 2;
  let n1 = 1;
  let n2 = 2;
  let next = 3;

  for (let i = 3; i < limit; i++) {
    if (i == next) {
      n1 = n2;
      n2 = next;

      if (i % 2 == 0) {
        sum += i;
      }
      next = n1 + n2;
    }
  }
  return sum;
}

// limit - 4000000 - 4 million
// Ans - 4613732
// https://codepen.io/mahendranKannan/pen/BYzpgK?editors=0011

