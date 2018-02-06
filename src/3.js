let result = [];
export function getLargestPrime(limit) {
    console.log(sqrt(limit));
    let pFactor = getPrimeFactor(limit, sqrt(limit));
    if(pFactor[0] != 0) {
        updateResult(pFactor[0]);
        updateResult(pFactor[1]);
    } else {
        pFactor = getPrimeFactor(limit, limit);
        result.push(pFactor[0]);
        result.push(pFactor[1]);
    }
    console.log(result.sort((a, b) => {return a-b}));
    console.log(Math.max(...result));

    // console.log(Math.sqrt(600851475143));
    // 775146.0992245268
    // console.log(600851475143/2);
    // 300425737571.5
    return Math.max(...result);
}

function updateResult(factor) {
    if (isPrime(factor)) {
      result.push(factor);
    } else {
      let pFactor = getPrimeFactor(factor, sqrt(factor));
      updateResult(pFactor[0]);
      updateResult(pFactor[1]);
    }
}

function sqrt(number) {
    return Math.floor(Math.sqrt(number));
}
function isPrime(number) {
    let count = 0;
    for(let i=1; i<=number; i++) {
        if(number % i == 0) count++;
    }

    return count == 2 ? true : false;
}

function getPrimeFactor(limit, s) {
  let f1 = 0;
  let f2 = 0;
  for (let i = 2; i < s; i++) {
    for (let j = i; j < limit; j++) {
      if (i * j == limit) {
        f1 = i;
        f2 = j;
        break;
      }
    }
  }

  console.log([f1, f2]);

  return [f1, f2];
}