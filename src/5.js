export function getSmallestMultiple(range) {
    // Take a number try dividing the
    // number from 1 - range
    // if it passes all (gives reminder 0)
    // then return the result
    // else move on to the next number
    let smallestMultiple = 0;
    let k = 1;
    while(smallestMultiple == 0) {
        let isSmallestMultiple = true;
        for (let i = 1; i <= range; i++) {
            if(k % i != 0) {
                isSmallestMultiple = false;
                break;
            }
        }
        if(isSmallestMultiple == true) {
            smallestMultiple = k;
        }

        k++;
    }

    return smallestMultiple;
}

// range - 20
// Ans - 232792560
// https://codepen.io/mahendranKannan/pen/zRKXyM