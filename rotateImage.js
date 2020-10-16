const { SSL_OP_SSLEAY_080_CLIENT_DH_BUG } = require("constants");

// pop and unshift
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    let tracker = matrix.length - 1;
    for (let j = matrix.length - 1; j >= 0; j--) {
      var current = matrix[i].pop();
      matrix[tracker].unshift(current);
      tracker--;
    }
  }
};

// swap col and rows, than swap first and last value of each row
var rotate = function(matrix) {
  for (let i = 0; i < matrix.length; i++) {
    for (let j = i; j < matrix.length; j++) {
      let temp = matrix[i][j];
      matrix[i][j] = matrix[j][i];
      matrix[j][i] = temp;
    }
  }

  for (let k = 0; k < matrix.length; k++) {
    for (l = 0; l < matrix.length/2; l++) {
      let temp2 = matrix[k][l];
      matrix[k][l] = matrix[k][matrix.length - 1 - l];
      matrix[k][matrix.length - 1 - l] = temp2;
    }
  }
}