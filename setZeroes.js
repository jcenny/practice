/*
[1,1,1]
[1,0,1]
[1,1,1]

[1,0,1]
[0,0,0]
[1,0,1]


[0,1,2,0]
[3,4,5,2]
[1,3,1,5]

[0,0,0,0]
[0,4,5,0]
[0,3,1,0]

*/
var nulifyRow = (matrix, row) => {
  for (let i = 0; i < matrix[0].length; i++) {
    matrix[row][i] = 0;
  }
}

var nulifyCol = (matrix, col) => {
  for (let i = 0; i < matrix.length; i++) {
    matrix[i][col] = 0;
  }
}

var setZeroes = (matrix) => {
  let firstRowHasZero = false;
  let firstColHasZero = false;
  const row = matrix.length;
  const col = matrix[0].length;

  // check if first row has 0
  for (let j = 0; j < col; j++) {
    if (matrix[0][j] === 0) {
      firstRowHasZero = true;
      break;
    }
  }

  // check if first col has 0
  for (let i = 0; i < row; i++) {
    if (matrix[i][0] === 0) {
      firstColHasZero = true;
      break;
    }
  }

  // check other rows/cols for zeroes and set corresponding first/row col accordingly 
  for (let i = 1; i < row; i++) {
    for (let j = 1; j < col; j++) {
      if (matrix[i][j] === 0) {
        matrix[0][j] = 0;
        matrix[i][0] = 0;
      }
    }
  }

  // go through first col and nulify rows
  for (let i = 1; i < row; i++) {
    if (matrix[i][0] === 0) {
      nulifyRow(matrix, i)
    }
  }

  // go through first row and nulify cols
  for (let j = 1; j < col; j++) {
    if (matrix[0][j] === 0) {
      nulifyCol(matrix, j)
    }
  }
  // nulify first row if first row had 0 originally
  if (firstRowHasZero) {
    nulifyRow(matrix, 0);
  }

  // nulify first col if first col had 0 originally
  if (firstColHasZero) {
    nulifyCol(matrix, 0);
  }
  return matrix;
}

console.log('should be [[1,0,1],[0,0,0],[1,0,1]]: ', setZeroes([[1,1,1],[1,0,1],[1,1,1]]));
console.log('should be [[0,0,0,0],[0,4,5,0],[0,3,1,0]]: ', setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]));