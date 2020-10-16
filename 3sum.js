var threeSum = function (nums) {
  // sort array
  nums = nums.sort((a, b) => {
    return a - b;
  })
  let i;
  let j;
  let target;
  let sum;
  let result = [];
  // iterate through array, pointer i
  for (let i = 0; i < nums.length; i++) {
    // check for duplicates
    if (nums[i - 1] === nums[i] && i !== 0) {
      continue;
    }
    // create pointer for i + 1, j, and last value, k
    j = i + 1;
    k = nums.length - 1;
    // once j and k are equal, move to the next loop
    while (j < k) {
      // find value from pointer i to make zero
      target = 0 - nums[i];
      // add j and k and compare to value
      sum = nums[j] + nums[k];
      if (sum > target) {
        // if sum is greater than value, decrement k
        k--;
      } else if (sum < target) {
        // if sum is less than value, increment j
        j++;
      } else {
        // if sum is equal, add i, j, k to result and increment j
        if (nums[j] === nums[j - 1] && j - 1 !== i) {
          j++;
        } else {
          result.push([nums[i], nums[j], nums[k]]);
          j++;
        }
      }
    }
  }
  return result;
};

let nums = [-1, 0, 1, 2, -1, -4];
// [-4, -1, -1, 0, 1, 2]
// let nums = [0,0,0,0];
console.log(threeSum(nums))