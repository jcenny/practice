/*
Given an integer array nums, find the contiguous subarray (containing at least one number) which has the largest sum and return its sum.
Follow up: If you have figured out the O(n) solution, try coding another solution using the divide and conquer approach, which is more subtle.

current 1
max 1

-2 1 -3 4 -1 2 1 -5 4
           i 
*/

// o(n)


var maxSubArray = function(nums) {
  let max = nums[0];
  let current = nums[0];

  for (let i = 1; i < nums.length; i++) {
    current = Math.max(nums[i], current + nums[i]);
    max = Math.max(max, current);
  }
  return max;
};

const nums1 = [-2,1,-3,4,-1,2,1,-5,4];
const nums2 = [1];
const nums3 = [0];

console.log('should be 6: ', maxSubArray(nums1));
console.log('should be 1: ', maxSubArray(nums2));
console.log('should be 0: ', maxSubArray(nums3));