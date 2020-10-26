const shortestPath = (board, start, end) => {
  let current = start; // [0, 1]
  // check varying directions
  let directions = [[0, 1], [1, 0], [0, -1], [-1, 0]];
  // keep track of places visited so we don't visit again
  let visited = {};
  // add possible routes to queue 
  let queue = [];
  visited[current] = 0;
  queue.push(current);
  while (queue.length) {
    current = queue.shift();
    for (let i = 0; i < directions.length; i++) {
      // check board for possible valid routes
      let newNode = [current[0] + directions[i][0], current[1] + directions[i][1]]; // [1, 1]
      let x = newNode[0];
      let y = newNode[1];
      if (!visited[newNode]) {
        if (x >= 0 && x < board.length && y >= 0 && y < board[0].length) {
          if (board[x][y] === 1) {
            queue.push(newNode)
            visited[newNode] = current;
          } 
        }
      }
      if (x === end[0] && y === end[1]) {
        if (!visited[newNode]) {
          visited[newNode] = current;
          queue = [];
        }
        break;
      }
    }
  }
  const result = [end];
  let position = end;
  while (visited[position] !== 0) {
    result.unshift(visited[position]);
    position = visited[position];
  }
  return result;
};

let sample = [[ 0, 2, 0, 0, 0],
              [ 0, 1, 1, 1, 0],
              [ 1, 1, 0, 1, 0],
              [ 0, 1, 0, 1, 0],
              [ 0, 1, 2, 1, 0]]
/*
  2
  1
 1 1
  1 1 1
*/


console.log(shortestPath(sample, [0, 1], [4, 2]));
// [[0, 1], [1, 1], [2, 1], [3, 1], [4, 1], [4, 2]]