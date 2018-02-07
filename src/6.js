export function getSumSquareDifference(limit) {

    let sumSquareDiff = 0;
    let sumOfSquares = 0;
    let squareOfSum = 0;

    for(let i=1; i<=limit; i++) {
        sumOfSquares += Math.pow(i, 2);
        squareOfSum += i;
    }

    // Diff
    sumSquareDiff = Math.pow(squareOfSum, 2) - sumOfSquares;

    return sumSquareDiff;
}

// limit - 100
// Ans - 25164150

// https://codepen.io/mahendranKannan/pen/aqBzyj