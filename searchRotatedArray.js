/*
Given an integer array nums sorted in ascending order, and an integer target.

Input: nums = [4,5,6,7,0,1,2], target = 0
Output: 4

4 5 6 7 0 1 2
i
            j
      k

Input: nums = [4,5,6,7,0,1,2], target = 3
Output: -1

Input: nums = [1], target = 0
Output: -1
*/

const findPivot = function(nums) {
  let left = 0;
  let right = nums.length - 1;
  let mid;
  while (left < right) {
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

var search = function(nums, target) {
  let start = findPivot(nums);
  let left = 0;
  let right = nums.length - 1;
  if (target >= nums[left] && target <= nums[start - 1]) {
    right = start - 1;
  } else {
    left = start;
  }
  let mid;
  while (left <= right) {
    console.log(left, right)
    mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) return mid;
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log('should be 4: ', search([4,5,6,7,0,1,2], 0))
console.log('should be -1: ', search([4,5,6,7,0,1,2], 3))
console.log('should be -1: ', search([1], 0))
console.log('should be 0: ', search([1], 1))
console.log('should be 1: ', search([1, 3], 3))