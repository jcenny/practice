/*
Input: [1,8,6,2,5,4,8,3,7]
Output: 49

Input: [1,6,3,7,2]
Output: 12

I : array of container heights
O : value of max area
C : none
E : none

 1 6 3 7 2
   i
       j

 1 8 6 2 5 4 8 3 7 
   i
                 j



i = 1
j = 8

area = (j - i) * min(input[i], input[j]);
area is based on height and distance between two pointers
maintain the max height, and track the vary distances, we'll find the max area

brute force:
iterate through array, and track max area

start pointer at beginning, start second pointer at end 
find the max area, and move the pointer that is smaller in height,

Time complexity, o(n)
space complexity, o(1)
*/


var maxWater = (height) => {
  let i = 0;
  let j = height.length - 1;
  let max = 0;
  let area;
  while (i < j) {
    area = (j - i) * Math.min(height[i], height[j]);
    max = Math.max(area, max);
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }
  return max;
}

var bruteForce = (height) => {
  let max = 0;
  let area;
  for (let i = 0; i < height.length; i++) {
    for (let j = i + 1; j < height.length; j++) {
      area = (j - i) * Math.min(height[i], height[j]);
      if (max < area) {
        max = area;
      }
    }
  }
  return max;
}

console.log('should be: 49', bruteForce([1,8,6,2,5,4,8,3,7]))