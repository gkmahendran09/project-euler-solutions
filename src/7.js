import { isPrime } from "./utils.js";

export function getPrime(limit) {

    if(limit < 3) return 2;

    let arr = [];

    for(let i = 3; arr.length < limit; i+=2) {
        if (isPrime(i)) {
            arr.push(i);
        }
    }
    return arr[limit-2];

}

// limit - 10001
// Ans - 104743

// https://codepen.io/mahendranKannan/pen/jZVPeQ