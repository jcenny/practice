function findGroups(grid) {
  let visited = {};
  let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
  let sizes = [];
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      // if 1 is found, add to stack
      if (grid[i][j] === 1 && !visited[`${i},${j}`]) {
        let currentSize = 0;
        let stack = [];
        visited[`${i},${j}`] = true;
        stack.push([i, j]);
        while (stack.length) {
          const current = stack.pop();
          currentSize++;
          for (let k = 0; k < directions.length; k++) {
            const neighbor = [current[0] + directions[k][0], current[1] + directions[k][1]];
            // check neighbors (left, right, up, down) if within bounds
            if (neighbor[0] >= 0 && neighbor[1] >= 0 && neighbor[0] < grid.length && neighbor[1] < grid[0].length) {
              // add to stack if neighbor is 1 and add to visited
              if (grid[neighbor[0]][neighbor[1]] === 1 && !visited[`${neighbor[0]},${neighbor[1]}`]) {
                stack.push(neighbor);
                visited[`${neighbor[0]},${neighbor[1]}`] = true;
              }
            }
          }
        }
        sizes.push(currentSize)
      }
    }
  }
  return sizes;
}

function onesGroups(grid, queries) {
  const groups = findGroups(grid);
  const groupCountMap = {};
  groups.forEach((group) => {
    if (groupCountMap[group]) groupCountMap[group]++;
    else groupCountMap[group] = 1;
  })

  let result = queries.map((query) => {
    if (groupCountMap[query]) return groupCountMap[query]
    else return 0;
  })
  return result;
}

let matrix1 = [
  [1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0],
  [0, 0, 0, 1, 1, 1],
  [0, 0, 0, 1, 1, 1],
  [0, 0, 1, 0, 0, 0],
  [1, 0, 0, 0, 0, 0],
];
let matrix2 = [
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [1, 1, 1, 1, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 0, 0, 0, 0, 1, 1, 1],
  [1, 1, 0, 0, 1, 0, 0, 1, 1, 1],
  [1, 0, 1, 0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
]
console.log('should be [1, 2, 1, 0]', onesGroups(matrix1, [6, 1, 8, 2]));
console.log('should be [2, 2, 1, 1, 1]', onesGroups(matrix2, [1, 10, 20, 2, 6]));