/*

Given an unsorted array of integers, find the length of the longest consecutive elements sequence.

Your algorithm should run in  O(n) complexity.


Ex: 

Input: [100, 4, 200, 1, 3, 2]
Output: 4
Explanation: The longest consecutive elements sequence is [1, 2, 3, 4]. Therefore its length is 4.

I: array 
O: number => longest length
C: o(n)
E: none

10 4 1 3 2
              
max: 10
length: 
0 1 2 3 4 5 6 7 8 9 10
  1 1 1 1            1  
        
*/
/*
const longestConsecutive = (array) => {
  if (array.length === 0) return 0;
  if (array.length === 1) return 1;
  // iterate through the array to find the max value
  const maxValue = Math.max(...array);
  const minValue = Math.min(...array)
  // create a new array with the length of the max value
  let valuesCount;
  let increment = 0;
  if (minValue < 0) {
    valuesCount = new Array(maxValue - minValue + 1).fill(0);
    increment = Math.abs(minValue);
  } else {
    valuesCount = new Array(maxValue + 1).fill(0)
  }

  // iterate through input array again to fill in the new array
  for (let i = 0; i < array.length; i++) {
    const value = array[i];
    valuesCount[value + increment]++;
  }
  let max = 0; 
  let tracker = 0;

  for (let j = 0; j < valuesCount.length; j++) {
    // if start does not exist and value is 1, keep track of index of start
    const count = valuesCount[j]; 
    if (count) {
      tracker++;
    } else if (!count && tracker) {
      max = Math.max(max, tracker);
      tracker = 0;
    }
  }
  return Math.max(max, tracker);
}
*/

const longestConsecutive = (nums) => {
  if (nums === null || nums.length === 0) return 0;
  const set = new Set(nums);
  let max = 0
  for (let num of set) {
    if (set.has(num - 1)) continue;

    let currentNum = num;
    let currentMax = 1;
    while (set.has(currentNum + 1)) {
      currentMax++;
      currentNum++;
    }
    max = Math.max(max, currentMax);
  }
  return max;
}

console.log('should be 4:', longestConsecutive([100, 4, 200, 1, 3, 2]));
console.log('should be 3:', longestConsecutive([100, 7, 4, 3, 1, 5]));
console.log('should be 3:', longestConsecutive([-1, 0, 2, 4, -8, -7, -6]));
console.log('should be 0', longestConsecutive([]));
console.log('should be 1:', longestConsecutive([1]));
console.log('should be 1:', longestConsecutive([0, 0]));
console.log('should be 5:', longestConsecutive([3,5,2,4,1]));
console.log('should be 4:', longestConsecutive([3,5,2,4]));
