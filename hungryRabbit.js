/*

A very hungry rabbit is placed in the center of a garden represented by a rectangular N x M 2D matrix. The values of the matrix will represent numbers of carrots available to the rabbit in each square of the garden. if the garden does not have an exact center, the rabbit should start in the square closest to the center with the highest carrot count. On a given turn, the rabbit will eat the carrots . available on the square that it is on, then move up, down, left or right, choosing the square . that has the most carrots. If there are no carrots left on any of the adjacent squares, the rabbit will go to sleep. You may assume that the rabbit will never have to choose between two squares with the same number of carrots. Write a function which takes a garden matrix and returns the number of carrots the rabbit eats. You may assume the matrix is rectangular with at least 1 row and 1 column, and that it is populated with non-negative integers.

[
  [5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8]
]
carrots = 27

find middle coordinates, determine start point
determine directions, up, down, left, right
check all directions within bounds and find max carrot count,
when max carrot count is found/eaten, change value to 0 so 

I: matrix, n X m
O: value for carrots eaten
C: none
E: 1 X 1 matrix, return the only value
*/

const findMidddleCoordinates = (garden, rowLength, colLength) => {
  let rowMidpoints = [];
  let colMidpoints = [];
  if (rowLength % 2 !== 0) {
    rowMidpoints.push(Math.floor(rowLength / 2));
    rowMidpoints.push(Math.floor(rowLength / 2) + 1);
  } else {
    rowMidpoints.push(rowLength / 2);
  }
  if (colLength % 2 !== 0) {
    colMidpoints.push(Math.floor(colLength / 2));
    colMidpoints.push(Math.floor(colLength / 2) + 1);
  } else {
    colMidpoints.push(colLength / 2);
  }
  // find max of all possible midpoints and use max as starting point
  let max = 0;
  let start = [];
  rowMidpoints.forEach((row) => {
    colMidpoints.forEach((col) => {
      if (max < garden[row][col]) {
        max = garden[row][col];
        start = [row, col]
      }
    })
  })
  return start;
}

const hungryRabbit = (garden) => {
  const rowLength = garden.length - 1;
  const colLength = garden[0].length - 1;
  const start = findMidddleCoordinates(garden, rowLength, colLength);

  // create result with starting carrot
  let result = garden[start[0]][start[1]];
  // change starting point to 0 value
  garden[start[0]][start[1]] = 0;
  // track previous position, current position, and max value/position
  let prev = start;
  let current = start;
  let max = [0, start];
  // create array of directions
  const directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];

  // keep looping through until all directions are either 0 or not within bounds
  while (prev.length) {
    // loop through array of directions and add to previous point
    for (let k = 0; k < directions.length; k++) {
      current = [prev[0] + directions[k][0], prev[1] + directions[k][1]];
      // make sure prev is within bounds
      if (current[0] <= rowLength && current[0] >= 0 && current[1] <= colLength && current[1] >= 0) {
        // track max value
        if (garden[current[0]][current[1]] > max[0]) {
          max[0] = garden[current[0]][current[1]];
          max[1] = current;
        }
      }
    }
    // if max value not changed, break out
    if (max[0] === 0) {
      prev = [];
    }
    // if max value changed
    if (max[0] !== 0) {
      // add new position value to result
      result += max[0];
      // reset position to value 0
      garden[max[1][0]][max[1][1]] = 0;
      // set max position to previous 
      prev = max[1];
      // reset max
      max = [0, []];
    }
  }
  return result;
}

const gardenSample = [
  [5, 7, 8, 6, 3],
  [0, 0, 7, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8]
];

const gardenSample2 = [
  [5, 7, 8, 9, 3],
  [0, 0, 7, 1, 0],
  [1, 2, 1, 0, 4],
  [4, 6, 3, 4, 9],
  [3, 1, 0, 5, 8]
];

const gardenSample3 = [
  [5, 7, 8, 9, 3],
  [1, 2, 3, 0, 4],
  [4, 6, 4, 5, 9],
  [3, 1, 9, 2, 8]
];

const gardenSample4 = [[1]];

const gardenSample5 = [
  [5, 7, 9, 3],
  [1, 2, 0, 4],
  [4, 6, 5, 9],
  [3, 1, 2, 8]
];

console.log('should be 27:', hungryRabbit(gardenSample));
console.log('should be 28:', hungryRabbit(gardenSample2));
console.log('should be 37:', hungryRabbit(gardenSample3));
console.log('should be 1:', hungryRabbit(gardenSample4));
console.log('should be 67:', hungryRabbit(gardenSample5));