const climbStairs = (n) => {
  let memoize = [];
  memoize[1] = 1;
  memoize[2] = 2;
  for (let i = 3; i <= n; i++) {
    memoize[i] = memoize[i - 1] + memoize[i - 2];
  }
  return memoize[n];
}

console.log('should be 1: ', climbStairs(1));
console.log('should be 2: ', climbStairs(2));
console.log('should be 3: ', climbStairs(3));
console.log('should be 5: ', climbStairs(4));
console.log('should be 8: ', climbStairs(5));