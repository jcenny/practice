/*
Examples:
Input: answers = [1, 1, 2]
Output: 5
Explanation:
The two rabbits that answered "1" could both be the same color, say red.
The rabbit than answered "2" can't be red or the answers would be inconsistent.
Say the rabbit that answered "2" was blue.
Then there should be 2 other blue rabbits in the forest that didn't answer into the array.
The smallest possible number of rabbits in the forest is therefore 5: 3 that answered plus 2 that didn't.

Input: answers = [10, 10, 10]
Output: 11

Input: answers = []
Output: 0

I array
O number => smallest possible number of rabbits
C none
E [] => 0

10, 10, 10
i
         j

1  1  2
      i
      j

0 => 0 => 1 
1 => 1 1 => 2 , total 2
2 => 2 2 2 => 3 , total 6
3 => 3 3 3 3 => 4 , total 12
*/


const numRabbits = (arr) => {
  if (arr.length === 0) return 0;
  if (arr.length === 1) return arr[0] + 1;
  // sort array
  arr = arr.sort((a, b) => {
    return a - b;
  })
  let result = 0;
  // have two pointers one at position 0, one at position 1
  let i = 0;
  let j = i + 1;
  // keep track of max rabbits in color group
  let tracker = arr[i] * (arr[i] + 1);
  // once the end of array is reached by first pointer
  while (i < arr.length) {
    // check if value is the same,
    if (arr[i] === 0) {
      result += 1;
      i++;
      j++;
      // reset tracker to handle for nonzero
      tracker = arr[i] * (arr[i] + 1);
    }
    // if the same and if tracker does not hit intended value 
    if (arr[i] === arr[j] && tracker !== arr[i]) {
      // subtract value to tracker and increment second pointer 
      tracker -= arr[i];
      j++;
    } else {
      // add first pointer value to result + 1
      result += arr[i] + 1;
      // set pointer i to equal pointer j, reset tracker, and increment pointer 2
      i = j;
      tracker = arr[i] * (arr[i] + 1);
      j++;
    }
  }
  return result;
}

console.log('should be 5: ', numRabbits([1, 1, 2]))
console.log('should be 11: ', numRabbits([10, 10, 10]))
console.log('should be 0: ', numRabbits([]))
console.log('should be 5: ', numRabbits([1, 0, 1, 0, 0]))
console.log('should be 6: ', numRabbits([0, 0, 1, 1, 1]))
console.log('should be 13: ', numRabbits([2,1,2,2,2,2,2,2,1,1]))
