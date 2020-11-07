/*
1, 10, -5, 1, -100


*/
const highestProduct = (arr) => {
  let lowest = Math.min(arr[0], arr[1]);
  let highest = Math.max(arr[0], arr[1]);
  let lowestProductOfTwo = arr[0] * arr[1];
  let highestProductOfTwo = lowestProductOfTwo;
  let highestProductOfThree = lowestProductOfTwo * arr[2];

  for (let i = 2; i < arr.length; i++) {
    const current = arr[i];
    highestProductOfThree = Math.max(highestProductOfThree, current * highestProductOfTwo, current * lowestProductOfTwo);
    lowestProductOfTwo = Math.min(lowestProductOfTwo, current * highest, current * lowest);
    highestProductOfTwo = Math.max(highestProductOfTwo, current * highest, current * lowest);
    lowest = Math.min(lowest, current);
    highest = Math.max(highest, current);
  }
  return highestProductOfThree;
}

console.log('should be 5000: ', highestProduct([1, 10, -5, 1, -100]));