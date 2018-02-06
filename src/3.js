let a = [];
export function getLargestPrime(n) {
    while(n%2 == 0) {
        a.push(2);
        n/=2;
    }
    var f=3;
    while (n > 1) {
        if(n % f == 0) {
            a.push(f);
            n /= f;
        } else {
            f += 2;
        }
    }
    // console.log(a.sort((a, b) => {return a-b}));
    // console.log(Math.max(...a));
    return Math.max(...a);
}

// Solved using Trail Division method
// https://en.wikipedia.org/wiki/Trial_division

// n - 600851475143
// Ans - 6857
// https://codepen.io/mahendranKannan/pen/OQRyPr?editors=0011