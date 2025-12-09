// The prime factors of 13195 are 5,7,13 and 29.

// What is the largest prime factor of the number 600851475143?

const getPrimeFactors = (number, primeNumber = 2) => {
  let changableInput = number;
  const primeFactors = [];
  while (changableInput > 1) {
    if (changableInput % primeNumber === 0) {
      primeFactors.push(primeNumber);
      changableInput /= primeNumber;
    } else {
      primeNumber++;
    }
  }
  return primeFactors;
};
const largestPrimeFactor = (largest, currentPrimeFactor) => {
  return largest < currentPrimeFactor ? currentPrimeFactor : largest;
}
console.log(getPrimeFactors(600851475143).reduce(largestPrimeFactor))
