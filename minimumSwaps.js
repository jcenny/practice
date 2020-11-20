/*
7 1 3 2 4 5 6 

1 7 3 2 4 5 6
1 2 3 7 4 5 6
1 2 3 4 7 5 6
1 2 3 4 5 7 6
1 2 3 4 5 6 7 



1 3 4 2 5



1 3 4 5 6 7 9 2 10 8


i: array of consecutive unordered numbers
o: number => min num of swaps for ordered

create a map of value positions
iterate through array and check if value is correct place
if not, replace with correct position based on map
fix map with new positions
continue

*/

function minimumSwaps(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    while (arr[i] !== i + 1) {
      const current = arr[i];
      arr[i] = arr[current - 1];
      arr[current - 1] = current;
      result++;
    }
  }
  return result;
}

console.log('should be 3: ', minimumSwaps([2, 3, 4, 1, 5]))
console.log('should be 5: ', minimumSwaps([7, 1, 3, 2, 4, 5, 6]))
//console.log('shoud be 46: ', minimumSwaps([2, 31, 1, 38, 29, 5, 44, 6, 12, 18, 39, 9, 48, 49, 13, 11, 7, 27, 14, 33, 50, 21, 46, 23, 15, 26, 8, 47, 40, 3, 32, 22, 34, 42, 16, 41, 24, 10, 4, 28, 36, 30, 37, 35, 20, 17, 45, 43, 25, 19]))