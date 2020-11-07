/*
I: integer, k interger

Input: 1220, 2
12 and 20 are divisible by 120 so output = 2

1 2 0
i j

Input: 555, 1
5 is divisible by 555, ouput = 1 (no repeats)

Input: 5421, 2
54, 42, 21 are not divisible by 5421, 0
*/

const divisibleString = (n, k) => {
  const string = n.toString();
  let i = 0;
  let j = k;
  let result = 0;
  let visited = {};
  while (j <= string.length) {
    let current = '';
    for (let index = i; index < j; index++) {
      current += string[index];
    }
    if (n % Number(current) === 0 && visited[current] === undefined) {
      result += 1;
    }
    visited[current] = current;
    i++;
    j++;
  }
  return result;
}

console.log('should be 2: ', divisibleString(120, 2));
console.log('should be 1: ', divisibleString(555, 1));
console.log('should be 0: ', divisibleString(5421, 2));
console.log('should be 2: ', divisibleString(120120, 3));[]