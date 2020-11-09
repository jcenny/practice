/*
Given an array nums of n integers where n > 1,  
  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].


Input:  [1,2,3,4]
Output: [24,12,8,6]

Constraint: It's guaranteed that the product of the elements of any 
prefix or suffix of the array (including the whole array) fits in a 32 bit integer.

Note: Please solve it without division and in O(n).

[]
1 2 3 4
  i
    j

[
  2 * 3 * 4,
  1 * 3 * 4,
  1 * 2 * 4,
  1 * 2 * 3
]    

Before
[1, 1, 1 * 2, 1 * 2 * 3]

After
[2 * 3 * 4, 3 * 4, 4, 1]
*/

const productExceptSelf = (arr) => {
  let result = [];
  let productBefore = 1;
  // iterate through array to accumlulate product before
  for (let i = 0; i < arr.length; i++) {
    result.push(productBefore);
    productBefore *= arr[i];
  }

  let productAfter = 1;
  for (let j = arr.length - 1; j >= 0; j--) {
    result[j] *= productAfter;
    productAfter *= arr[j]
  }

  return result;
}


function product(array) {
  let result = [];
  let productBefore = 1;
  for (let i = 0; i < array.length; i++) {
    result.push(productBefore);
    productBefore *= array[i];
  }
  
  let productAfter = 1;
  for (let j = array.length - 1; j >= 0; j--) {
    result[j] = result[j] * productAfter;
    productAfter *= array[j]
  }
  return result
}