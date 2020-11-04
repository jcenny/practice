/*
Input: 

1 0 1 0 0
1 0 1 1 1
1 1 1 1 1
1 0 0 1 0

Output: 4

brute force:
=> iterate through and check for 1s
=> when 1 is found, set max square
=> check neighbors by increment i, j temporarily (left, down, diagonal) if they are 1s
=> at any point if there isn't a 1, continue
=> if all 1s, reset max and continue to check next neighbors

DP:
1 => 1

1 0  => 1 0
1 1     1 1 

1 1 1  => 1 1 1
1 1 1     1 2 2
1 1 1     1 2 3

create a new matrix, and start calculating max squares
iterate through input matrix and when 1 is found, calculate the max square of that position 
based on the neighbors of the new matrix
if first row/col, leave values as input matrix
current => min(neighbors (top, right, diagonal)) + itself
max area is determined by max value found in new array squared
*/

var maximalSquare = function(matrix) {
    if (!matrix.length) return 0;
    const row = matrix.length;
    const col = matrix[0].length;
    const newRow = new Array(row).fill(0);
    let newMatrix = newRow.map(() => new Array(col).fill(0))
    let max = 0;
    for (let i = 0; i < row; i++) {
      for (let j = 0; j < col; j++) {
        const curr = Number(matrix[i][j]);
        if (matrix[i][j] !== '1') continue;
        if (i === 0 || j === 0) {
          newMatrix[i][j] = curr;
          max = Math.max(max, newMatrix[i][j] ** 2);
          continue;
        }
        const top = Number(newMatrix[i - 1][j]);
        const left = Number(newMatrix[i][j - 1]);
        const diag = Number(newMatrix[i - 1][j - 1]);
        newMatrix[i][j] = Math.min(top, left, diag) + curr;
        max = Math.max(max, newMatrix[i][j] ** 2);
      }
    }
    return max;
};

console.log('should be 1: ', maximalSquare([["1"]]))