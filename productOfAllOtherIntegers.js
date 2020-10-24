/*
1 7 3 4

7 * 3 * 4,
1 * 3 * 4,
1 * 7 * 4,
1 * 7 * 3,

before [ 
  1, 
  1 * 1, 
  1 * 1 * 7,
  1 * 1 * 7 * 3
]

After [
 1 * 1 * 7 * 3,
 1
 1
]
*/


const productOfAllOtherIntegers = (arr) => {
  let result = [];
  let before = 1;
  for (let i = 0; i < arr.length; i++) {
    result.push(before);
    before *= arr[i];
  }
  let after = 1;
  for (let j = arr.length - 1; j >= 0; j--) {
    result[j] *= after;
    after *= arr[j];
  }
  return result;
}

console.log('should be [84, 12, 28, 21]: ', productOfAllOtherIntegers([1, 7, 3, 4]));