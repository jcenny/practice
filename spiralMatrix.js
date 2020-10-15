/*
I: matrix, n x m
O: array of integers in spiral order
C: none
E: null/[] => []


  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
top => right => bottom => left

top 0 
bottom matrix.length - 1
right matrix[0].length - 1
left 0

first row: from top, left to right
last col: from right, top++ to bottom
last row: from bottom, right-- to left
first col: from left, bottom-- to top
left++

top, left to right
continue...
once size of result array is the same as matrix row * matrix length, return
*/

const spiralMatrix = (matrix) => {
  let result = [];
  if (matrix.length === 0) return result
  let top = 0;
  let bottom = matrix.length - 1;
  let right = matrix[0].length - 1;
  let left = 0;
  let size = matrix.length * matrix[0].length;

  while (result.length !== size) {
    // top
    for (let i = left; i <= right && result.length !== size; i++) {
      result.push(matrix[top][i]);
    }
    top++;
    // right
    for (let j = top; j <= bottom && result.length !== size; j++) {
      result.push(matrix[j][right]);
    }
    right--;
    // bottom
    for (let k = right; k >= left && result.length !== size; k--) {
      result.push(matrix[bottom][k]);
    }
    bottom--;
    // left
    for (let l = bottom; l >= top && result.length !== size; l--) {
      result.push(matrix[l][left]);
    }
    left++;
  }
  return result;
};

console.log('should be [1,2,3,6,9,8,7,4,5]: ', spiralMatrix([
  [ 1, 2, 3 ],
  [ 4, 5, 6 ],
  [ 7, 8, 9 ]
 ]));

 console.log('should be [1,2,3,4,8,12,11,10,9,5,6,7]: ', spiralMatrix([
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]));