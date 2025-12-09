// The prime factors of 13195 are 5,7,13 and 29.

// What is the largest prime factor of the number 600851475143?

const getPrimeFactors = (number, factor = 2) => {
  let n = number;
  const primeFactors = [];
  while (n > 1) {
    if (n % factor === 0) {
      primeFactors.push(factor);
      n /= factor;
    } else {
      factor++;
    }
  }
  return primeFactors;
};

const primeFactors = getPrimeFactors(600851475143);
const largest = primeFactors.reduce((a, b) => a < b ? b : a)

console.log(largest);
