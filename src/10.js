import { isPrime } from "./utils.js";
export function getSummationOfPrimes(limit) {
    let sum = 5;
    for(let i = 4; i < limit; i++) {
        if(isPrime(i)) {
            sum += i;
        }
    }

    return sum;
}

// limit - 2000000
// Ans - 142913828922

// https://codepen.io/mahendranKannan/pen/WMZYwQ