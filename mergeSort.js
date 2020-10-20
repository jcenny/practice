const merge = (arr1, arr2) => {
  // create pointers for each array
  let i = 0;
  let j = 0;
  let result = [];
  // while the end of either array isnt reached
  while (i < arr1.length && j < arr2.length) {
    // compare the array values at pointers, push to result array if lower
    // if lower, increment current pointer, and continue comparing
    if (arr1[i] > arr2[j]) {
      result.push(arr2[j]);
      j++;
    } else {
      result.push(arr1[i]);
      i++;
    }
  }
  // when end of an array is reached, check which pointer has not reached end and add remaining elements to result. 
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

// console.log(merge([1, 10, 50], [2, 14, 99, 100]))

const mergeSort = (arr) => {
  // break up arr into halves until you have 1 element or an empty array
  // merge the arrays as you sort them
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let arr1 = mergeSort(arr.slice(0, mid));
  let arr2 = mergeSort(arr.slice(mid));
  return merge(arr1, arr2);
} 

console.log(mergeSort([1, 10, 100, 99, 14, 2, 50]));
// [1, 2, 10, 14, 50, 99, 100]


