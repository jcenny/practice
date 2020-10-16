const getBorder = (n, matrix) => {
  const row = matrix.length - n;
  const col = matrix[0].length - n;
  let border = [];
  // get top, from start to end
  for (let i = n; i < col; i++) {
    border.push(matrix[n][i]);
  }
  // get right, from second to end
  for (let j = n + 1; j < row; j++) {
    border.push(matrix[j][col - 1]);
  }
  // get bottom, from second to last to start
  for (let k = col - 2; k >= n; k--) {
    border.push(matrix[col - 1][k]);
  }
  // get left, from second to last to second
  for (let l = col - 2; l > n; l--) {
    border.push(matrix[l][n])
  }
  return border;
};

const insertSorted = (n, matrix, result) => {
  let start = 0;
  const row = matrix.length - n;
  const col = matrix[0].length - n;
  // insert top, from start to end
  for (let i = n; i < col; i++) {
    matrix[n][i] = result[start];
    start++;
  }
  // insert right, from second to end
  for (let j = n + 1; j < row; j++) {
    matrix[j][col - 1] = result[start];
    start++;
  }
  // insert bottom, from second to last to start
  for (let k = col - 2; k >= n; k--) {
    matrix[col - 1][k] = result[start];
    start++;
  }
  // insert left, from second to last to second
  for (let l = col - 2; l > n; l--) {
    matrix[l][n] = result[start];
    start++;
  }
  return matrix;
}

const sortBorder = (matrix) => {
  let max;
  if (matrix.length % 2 !== 0) {
    max = Math.floor(matrix.length / 2) + 1
  } else {
    max = matrix.length / 2
  }

  for (let n = 0; n < max; n++) {
    let result = [];
    result = getBorder(n, matrix);
    result = result.sort((a, b) => {
      return a - b;
    })
    matrix = insertSorted(n, matrix, result);
  }
  return matrix;
}

const sample1 = [
  [5, 7, 8, 9, 3],
  [0, 0, 7, 1, 0],
  [1, 2, 1, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8]
];

/*
border 0 : [5, 7, 8, 9, 3, 0, 4, 9, 8, 5, 0, 1, 3, 4, 1, 0]
sorted:    [0, 0, 0, 1, 1, 3, 3, 4, 4, 5, 5, 7, 8, 8, 9, 9]

border 1: [0, 7, 1, 0, 4, 3, 6, 2]
sorted:   [0, 0, 1, 2, 3, 4, 6, 7]

border 3: [1]
sorted:   [1]

[
  [0, 0, 0, 1, 1],
  [9, 0, 0, 1, 3],
  [9, 7, 1, 2, 3],
  [8, 6, 4, 3, 4],
  [8, 7, 5, 5, 4],
]
*/
const sample2 = [[1]];
// [[1]]

const sample3 = [
  [5, 7, 9, 3],
  [1, 2, 0, 4],
  [4, 6, 5, 9],
  [3, 1, 2, 8]
];

/*
border 0 : [5, 7, 9, 3, 4, 9, 8, 2, 1, 3, 4, 1]
sorted:    [1, 1, 2, 3, 3, 4, 4, 5, 7, 8, 9, 9]

border 1: [2, 0, 5, 6]
sorted:   [0, 2, 5, 6]

[
  [1, 1, 2, 3],
  [9, 0, 2, 3],
  [9, 6, 5, 4],
  [8, 7, 5, 4],
]
*/

console.log('should be: [[0, 0, 0, 1, 1],[9, 0, 0, 1, 3],[9, 7, 1, 2, 3],[8, 6, 4, 3, 4],[8, 7, 5, 5, 4]]', sortBorder(sample1));
console.log('should be: [[1]]', sortBorder(sample2));
console.log('should be: [[1, 1, 2, 3],[9, 0, 2, 3],[9, 6, 5, 4],[8, 7, 5, 4],]', sortBorder(sample3));