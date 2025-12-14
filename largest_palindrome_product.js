// A palindromic number reads the same both ways. The largest palindrome made from the product of two 2-digit numbers is 9009 =91 ×99.

// Find the largest palindrome made from the product of two 3-digit numbers.

const threeDigitNumbers = Array.from(
  { length: 900 },
  (_, i) => i + 100,
);

const products = threeDigitNumbers.flatMap((x) => {
  const products = [];
  for (let i = 0; i < threeDigitNumbers.length; i++) {
    products.push(x * threeDigitNumbers[i]);
  }
  return products;
});

const isPalindrome = (x) => {
  const numberAsStr = String(x);
  const reversedNumber = numberAsStr.split('').reverse().join('');
  return numberAsStr === reversedNumber;
};

const allPalindromes = products.filter(isPalindrome);

const findLargestPalindrome = (largest, current) => current > largest ? current : largest;

const largestPalindrome = allPalindromes.reduce(findLargestPalindrome);

console.log(largestPalindrome);
