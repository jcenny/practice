/*
time complexity: o(n);
space complexity: o(1);
*/
const reverseStringInPlace = (arr) => {
  let i = 0;
  let j = arr.length - 1;
  let temp;
  while (i < j) {
    temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
    i++;
    j--;
  }
  return arr.join('')
}

let arr1 = ['h','e','l','l','o']
let arr2 = ['r', 'a', 'c', 'e', 'c', 'a', 'r']
console.log('should be olleh: ', reverseStringInPlace(arr1));
console.log('should be racecar: ', reverseStringInPlace(arr2))