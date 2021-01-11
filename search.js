/*
target = 1
4 5 6 7 0 1 2

*/


const findPivot = (nums) => {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
}

const search = (nums, target) => {
  const pivot = findPivot(nums);
  let left = 0;
  let right = nums.length - 1;

  if (target >= nums[left] && target <= nums[pivot - 1]) {
    right = pivot - 1;
  } else {
    left = pivot;
  }

  while (left <= right) {
    const mid = Math.floor((left + right)/ 2);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
}