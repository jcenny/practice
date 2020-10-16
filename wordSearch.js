/*
board =
[
  ['A','B','C','E'],
  ['S','F','C','S'],
  ['A','D','E','E']
]

Given word = "ABCCED", return true.
Given word = "SEE", return true.
Given word = "ABCB", return false.

I: matrix of letters, string word
O: boolean representing whether word is a valid crossword in matrix
C: both upper/lowercase letters
E: none

=> transverse through matrix to find letter that the word starts with
=> once matching letter is found, need to exhaust up, down, left, right positions to see if the next letter is match
=> continue until word is found
=> return false if there is no more positions to check

A B C C E E D
    i

A B C E
S F C S
A D E E

*/


var exist = function (board, word) {
  if (word.length > board.length * board[0].length) {
    return false;
  }
  const row = board.length;
  const col = board[0].length;
  let letter;
  let next;
  let directions = [[0, 1], [1, 0], [-1, 0], [0, -1]];
  for (let i = 0; i < row; i++) {
    for (let j = 0; j < col; j++) {
      let stack = [];
      let visited = {};
      let index = 0;
      letter = board[i][j].toUpperCase();
      if (letter === word[index].toUpperCase()) {
        visited[`${i},${j}`] = true
        stack.push([i, j, index, visited]);
      }
      while (stack.length) {
        // check directions
        let [x, y, index, visit] = stack.pop();
        if (index === word.length - 1) return true;
        for (let k = 0; k < directions.length; k++) {
          next = [x + directions[k][0], y + directions[k][1]]
          if (next[0] >= 0 && next[1] >= 0 && next[0] < row && next[1] < col) {
            console.log(next)
            if (board[next[0]][next[1]] === word[index + 1] && !visit[`${next[0]},${next[1]}`]) {
              visit = {...visit, [`${x},${y}`] : true}
              stack.push([next[0], next[1], index + 1, visit]);  
            }
          }
        }
      }
    }
  }
  return false;
};


let test = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
];

let test2 = [
  ["A","B","C","E"],
  ["S","F","E","S"],
  ["A","D","E","E"]
];

let test3 = [
  ["a","a","a","a"],
  ["a","a","a","a"],
  ["a","a","a","a"]
]

let test4 = [
  ["a","a","a"],
  ["a","b","b"],
  ["a","b","b"],
  ["b","b","b"],
  ["b","b","b"],
  ["a","a","a"],
  ["b","b","b"],
  ["a","b","b"],
  ["a","a","b"],
  ["a","b","a"]
]
// console.log('should be true: ', exist(test, 'ABCCED'));
// console.log('should be true: ', exist(test, "SEE"));
// console.log('should be false: ', exist(test, "ABCB"));
// console.log('should be true: ', exist(test2, "ABCESEEEFS"));
// console.log('should be false: ', exist(test3,"aaaaaaaaaaaaa"));
console.log('should be false: ', exist(test4, "aabaaaabbb"))
