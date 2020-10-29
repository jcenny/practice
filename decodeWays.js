/*
input: 121
output: 3
(1 2 1)
(12 1)
(1 12)

input: 1212
output: 5
(1 2 1 2)
(12 1 2)
(12 12)
(1 21 2)
(1 2 12)

input: 12121
output: 8
(1 2 1 2 1)
(12 1 2 1)
(12 12 1)
(12 1 21)
(1 21 2 1)
(1 21 21)
(1 2 12 1)
(1 2 1 21)

input: 1234
output: 3
(1 2 3 4)
(12 3 4)
(1 23 4)

string   1 1 1 1 
ways   1 1 2 3 5
    ways[i] = ways[i - 1] + ways[i - 2];

one digit or two digit (must be less than equal to 26)

*/

const numDecodings = function(s) {
  if (s[0] === '0') return 0;
  let result = new Array.fill(s.length + 1).fill(0);
  result[0] = 1;
  result[1] = 1;
  for (let i = 2; i <= s.length; i++) {
    //one digit
    const one = Number(s.substring(i - 1, i));
    if (one !== 0) {
      result[i] += result[i - 1];
    }
    const two = Number(s.substring(i - 2, i));
    if (two >= 10 && two <= 26) {
      result[i] += result[i - 2];
    }
  }
  return result[s.length];
}





var numDecodings = function(s) {
  if (s === null || s.length === 0) return 0;
  if (s[0] === '0') return 0;
  let result = new Array(s.length + 1).fill(0);
  result[0] = 1;
  result[1] = 1;
  for (let i = 2; i <= s.length; i++) {
    let one = Number(s.substring(i - 1, i));
    if (one !== 0) {
      result[i] += result[i - 1];
    }
    let two = Number(s.substring(i - 2, i));
    if (two >= 10 && two <= 26) {
      result[i] += result[i - 2];
    }
  }
  return result[s.length];
};

console.log('should be 3: ', numDecodings('1234'));
console.log('should be 3: ', numDecodings('226'))