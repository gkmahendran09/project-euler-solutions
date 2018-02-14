export function getProductOfSpecialPythagoreanTriplet(sum) {

    let product = 0;

    for(let i = 1; i <= sum; i++) {
        for( let j = i + 1; j <= sum; j++) {
            for(let k = j + 1; k <= sum; k++) {
                let a = i;
                let b = j;
                let c = k;

                if((Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2)) && (a+b+c) == sum) {
                    product = a * b * c;
                    break;
                }
            }
        }
    }

    return product;
}

// sum - 1000
// Ans - 31875000
// a = 200, b = 375, c = 425

// https://codepen.io/mahendranKannan/pen/KQvJqw


// A Pythagorean triplet is a set of three natural numbers, a < b < c, 
// for which,

// a2 + b2 = c2
// For example, 32 + 42 = 9 + 16 = 25 = 52.

// There exists exactly one Pythagorean triplet for which a + b + c = 1000.
// Find the product abc.