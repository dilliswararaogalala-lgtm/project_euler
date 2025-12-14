// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 =91 ×99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const threeDigitNumbers = Array.from(
  { length: 900 },
  (_, i) => i + 100,
);

const arrayIterator = threeDigitNumbers[Symbol.iterator]();

const iterator = Iterator.from(arrayIterator);

const isPalindrome = (x) => {
  const numberAsStr = String(x);
  const reversedNumber = numberAsStr.split("").reverse().join("");
  return numberAsStr === reversedNumber;
};

const findLargestPalindrome = (largest, current) =>
  current > largest ? current : largest;

const largestPalindrome = iterator
  .flatMap((x) => {
    const products = [];
    for (let i = 0; i < threeDigitNumbers.length; i++) {
      products.push(x * threeDigitNumbers[i]);
    }
    return products;
  })
  .filter(isPalindrome)
  .reduce(findLargestPalindrome)

console.log(largestPalindrome);
