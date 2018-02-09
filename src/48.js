export function getSumOfSelfPowers(self) {
    let sum = 0;
    for(let i = 1; i <= self; i++) {
        sum += Math.pow(i, i);
    }

    return sum;
}

// self - 10
// Ans - 10405071317