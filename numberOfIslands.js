/*
Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or 
vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.

I: m X n matrix
O: interger => # of islands
C: 
E: none

[
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
*/


const numberOfIslands = (grid) => {
  // iterate through grid
  let islands = 0;
  let rows = grid.length; // 4
  let cols = grid[0].length; //5
  let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      let stack = [];
      // if there is a 1, increment island, change value to be 2, push currentPos
      if (grid[i][j] === 1) {
        islands++;
        grid[i][j] = 2;
        stack.push([i, j]);
      }
     
      while (stack.length) {
        const current = stack.pop();
        for (let k = 0; k < directions.length; k++) {
          const dir = directions[k];
          const newPos = [current[0] + dir[0], current[1] + dir[1]];
          if (newPos[0] >= 0 && newPos[0] < rows && newPos[1] >= 0 && newPos[1] < cols) {
            if (grid[newPos[0]][newPos[1]] === 1) {
              grid[newPos[0]][newPos[1]] = 2;
              stack.push(newPos);
            }
          }
        }
        // as long as there is something in my stack
        // check if there is one, if there is, change it to 2
        // also push in all possible directions   
      }
     
    }
  }
  return islands;
}


console.log('should be 1: ', numberOfIslands([
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]));
console.log('should be 3: ', numberOfIslands([
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]));


function visitIslands(grid, x, y) {
  const q = [];
  q.push([x, y]);
  grid[x][y] = 'V';

  let nextX, nextY, currPos;

  const dx = [-1, 0, 1, 0];
  const dy = [0, 1, 0, -1];

  while (q.length) {
    currPos = q.shift();

    for (let i = 0; i < dx.length; i += 1) {
      nextX = dx[i] + currPos[0];
      nextY = dy[i] + currPos[1];

      if (isInRange(grid, nextX, nextY) && grid[nextX][nextY] === '1') {
        grid[nextX][nextY] = 'V';
        q.push([nextX, nextY]);
      }
    }
  }
  
  return grid;
};


function isInRange(grid, x, y) {
  return (x >= 0 && x < grid.length) && (y >= 0 && y < grid[0].length);
};