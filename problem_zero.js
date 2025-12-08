const sqr = (x) => x * x;

const isOdd = x => x % 2n !== 0n;

let sum = 0;
for (let i = 1; i <= 494000; i++) {
  const square = sqr(i);
  if (isOdd(i) && isOdd(square)) sum += square;
}

console.log(sum.toString());
