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

function isPrime(n) {
    let prime = true;

    for(let i=3; i<=Math.floor(Math.sqrt(n)); i++) {
        if(n%i == 0) {
            prime = false;
            break;
        }
    }

    return prime;
}

// limit - 10001
// Ans - 104743

//