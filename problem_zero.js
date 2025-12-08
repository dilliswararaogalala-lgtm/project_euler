const sqr = (x) => x * x;

const isOdd = x => x % 2 !== 0;

let sum = 0;
for (let i = 1; i <= 494000; i++) {
  const square = sqr(i);
  if (isOdd(i)) sum += square;
}

console.log(sum);
