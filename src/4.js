export function getLargestPalindromeProduct(digits) {
    // 1 - 0 - 9
    // 2 - 10 - 99
    // 3 - 100 - 999
    // 4 - 1000 - 9999
    let min = 10;
    let max = 99;
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