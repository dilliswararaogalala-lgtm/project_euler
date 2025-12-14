// 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.

// What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20 ?

const smallestMultiple = function* () {
  let i = 1;

  while (true) {
    let doesNotDivisible = false;
    for (let number = 1; number <= 20; number++) {
      if (i % number !== 0) {
        doesNotDivisible = true;
      }
    }
    if (!doesNotDivisible) {
      yield i;
      break;
    }
    i++;
  }
};

const iterator = smallestMultiple();
console.log([...iterator]);
