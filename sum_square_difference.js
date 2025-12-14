const noOfNumbers = 100;

const naturalNumbers = Array.from({ length: noOfNumbers }, (_, x) => x + 1);

const sqr = (x) => x * x;

const sumOfAll = (numbers) => numbers.reduce((sum, current) => sum + current);

const sumOfSquares = sumOfAll(naturalNumbers.map((x) => sqr(x)));

const sumOfNaturalNumbers = sumOfAll(naturalNumbers);

const squareOfSums = sqr(sumOfNaturalNumbers);

const difference = squareOfSums - sumOfSquares;

console.log(difference);
