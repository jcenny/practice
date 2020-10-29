// recursion
// const fibonacciNumber = (n) => {
//   if (n === 1 || n === 0) {
//     return n;
//   }
//   return fibonacciNumber(n - 1) + fibonacciNumber(n - 2);
// }


// memoize
// const fibonacciNumber = (n) => {
//   let memo = [0, 1];
//   const fib = (n) => {
//     let result = memo[n];
//     if (result === undefined) {
//       result = fib(n - 1) + fib(n - 2);
//       memo[n] = result;
//     }
//     return result;
//   }
//   return fib(n)
// }

// bottom up
const fibonacciNumber = (n) => {
  let result = [0, 1];
  for (let i = 2; i < n + 1; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result[n];
}

// other bottom up
const fib = (n) => {
  if (n < 0) return null;
  let prevPrev = 0;
  let prev = 1;
  let current;
  for (let i = 1; i < n; i++) {
    current = prevPrev + prev;
    prevPrev = prev;
    prev = current;
  }
  return current;
}
console.log('should be 1: ', fibonacciNumber(2));
console.log('should be 5: ', fibonacciNumber(5));
console.log('should be 2: ', fibonacciNumber(3));