export function isPrime(n) {
  let prime = true;

    if (n <= 1) {
      prime = false;
    } else if (n % 2 == 0) {
      prime = false;
    } else {
      for (let i = 3; i <= Math.floor(Math.sqrt(n)); i += 2) {
        if (n % i == 0) {
          prime = false;
          break;
        }
      }
    }

  return prime;
}
