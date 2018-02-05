export function getSum(limit) {
  var sum = 0;

  for (let i = 0; i < limit; i++) {
    if (i % 3 == 0 || i % 5 == 0) {
      sum += i;
    }
  }
  return sum;
}
//getSum(1000);
// Ans - 233168

// https://codepen.io/mahendranKannan/pen/gvMLdd?editors=0011