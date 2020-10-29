/*
Time Complexity: o(n)
Space Complexity: o(1)
*/

const reverseChars = (a, right, left) => {
  let temp;
  while (right < left) {
    temp = a[right];
    a[right] = a[left];
    a[left] = temp;
    right++;
    left--;
  }
  return a;
}

const reverseWord = (arr) => {
  reverseChars(arr, 0, arr.length - 1);
  let currentStart = 0;
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] === ' ' || i === arr.length) {
      reverseChars(arr, currentStart , i - 1);
      currentStart = i + 1;
    }
  }
  return arr.join('')
}

let message1 = [ 'c', 'a', 'k', 'e', ' ',
'p', 'o', 'u', 'n', 'd', ' ',
's', 't', 'e', 'a', 'l' ];
console.log('should be steal pound cake:', reverseWord(message1));