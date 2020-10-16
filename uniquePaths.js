/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).
The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right 
corner of the grid (marked 'Finish' in the diagram below).
How many possible unique paths are there?

Input: m = 3, n = 2
Output: 3

[
  [1, 1, 1],
  [1, 2, 3],
]

Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Right -> Down
2. Right -> Down -> Right
3. Down -> Right -> Right

Input: m = 7, n = 3
Output: 28

[
  [1, 1, 1, 1,  1,  1,  1],
  [1, 2, 3, 4,  5,  6,  7],
  [1, 3, 6, 10, 15, 21, 28],
]

constraints: 
1 <= m, n <= 100
It's guaranteed that the answer will be less than or equal to 2 * 10 ^ 9.

I: row and column length of matrix
O: value for how many unique paths
C: at least one row exists, column can go up to 100 , move right or down only
E: m = 1, n = 1 => 1 

start [0, 0]
end [n - 1, m - 1]

build m by n matrix with 0s, have start and end be 1
create a queue for possible paths
create directions for right and left and push into queue
loop through until queue is empty
*/


// const uniquePaths = (m, n) => {
//   if (m === 1) {
//     return 1;
//   }
//   let array = new Array(m).fill(0);
//   let matrix = [];
//   for (let i = 0; i < n; i++) {
//     matrix.push(array);
//   }
//   const start = [0, 0];
//   const end = [n - 1, m - 1];
//   let current;
//   let queue = [];
//   queue.push(start);
//   const directions = [[1, 0], [0, 1]]
//   let result = 0;

//   while (queue.length) {
//     current = queue.pop();
//     for (let i = 0; i < directions.length; i++) {
//       let newCurrent = [directions[i][0] + current[0], directions[i][1] + current[1]];
//       if (newCurrent[0] === end[0] && newCurrent[1] === end[1]) {
//         result += 1;
//       }
//       if (newCurrent[0] < matrix.length && newCurrent[1] < matrix[0].length) {
//         queue.push(newCurrent);
//       }
//     }
//   }
//   return result
// } 

const uniquePaths = (m, n) => {
  let array = new Array(m).fill(0);
  const grid = [];
  for (let i = 0; i < n; i++) {
    grid.push(array);
  }
  // set grid first row and col to be 1
  const row = grid.length;
  const col = grid[0].length;
  // set first col to 0
  for (let i = 0; i < row; i++) {
    grid[i][0] = 1;
  }
  // set first row to 0
  for (let i = 0; i < col; i++) {
    grid[0][i] = 1;
  }
  // start at second row/second col and add values of top and left together 
  let left;
  let top;
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      left = grid[i][j - 1];
      top = grid[i - 1][j];
      grid[i][j] = left + top;
    }
  }
  // return end of grid value
  return grid[row - 1][col - 1];
}

console.log(uniquePaths(23, 12))

