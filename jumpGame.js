/*
Given an array of non-negative integers, you are initially positioned at the first index of the array.
Each element in the array represents your maximum jump length at that position.
Determine if you are able to reach the last index.

I: array
O: boolean
C: none 
E: array length 1 => true

last index => 4

check => last = i + nums[i]
Index      0 1 2 3 4
Input      2 3 1 1 4
             i

Index      0 1 2 
Input      0 2 3
               i
*/

const jumpGame = (nums) => {
  let last = nums.length - 1;
  for (let i = last - 1; i >= 0; i--) {
    if (i + nums[i] >= last) {
      last = i;
    }
  }
  return last === 0;
}

console.log('should be true: ', jumpGame([2,3,1,1,4]));
console.log('should be false: ', jumpGame([3,2,1,0,4]));
console.log('should be true: ', jumpGame([1]));
console.log('should be false: ', jumpGame([0,2,3]));