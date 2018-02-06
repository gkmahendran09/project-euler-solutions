export function getLargestPalindromeProduct(digits) {
    let min = Math.pow(10, digits - 1);
    let max = Math.pow(10, digits) - 1;
    let largestPalindromeProduct = 0;

    for(let i = min; i <= max; i++) {
        for(let j = min; j <= max; j++) {
            let product = (i*j);
            if(product.toString() == product.toString().split("").reverse().join("")) {
                if(product > largestPalindromeProduct) {
                    largestPalindromeProduct = product;
                }
            }
        }
    }

    return largestPalindromeProduct;
}

// digits - 3
// Ans - 906609

// https://codepen.io/mahendranKannan/pen/YeGxwb