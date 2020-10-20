/*
const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
*/

// const mergeArrays = (one, two) => {
//   let i = 0;
//   let j = 0;
//   let merged = [];
//   while (i < one.length || j < two.length) {
//     if (one[i] < two[j]) {
//       merged.push(one[i]);
//       i++;
//     } else {
//       merged.push(two[j]);
//       j++
//     }
//   }

//   while (i < one.length) {
//     merged.push(one[i]);
//     i++;
//   }

//   while (j < two.length) {
//     merged.push(two[j]);
//     j++
//   }
//   return merged;
// }

/*
Time complexity => o(n)
Space complexity => o(n)
*/

const mergeArrays = (one, two) => {
  let i = 0; 
  let j = 0;
  let mergeIndex = 0;
  let merged = [];

  while (mergeIndex < (one.length + two.length)) {
    if (one[i] < two[j] || j >= two.length) {
      merged.push(one[i]);
      i++;
    } else {
      merged.push(two[j]);
      j++;
    }
    mergeIndex++;
  }
  return merged;
}

const myArray = [3, 4, 6, 10, 11, 15];
const alicesArray = [1, 5, 8, 12, 14, 19];
console.log(mergeArrays(myArray, alicesArray));
