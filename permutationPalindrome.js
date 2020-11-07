// const permutationPalindrome = (str) => {
//   let charCount = {};
//   let char;
//   for (let i = 0; i < str.length; i++) {
//     char = str[i];
//     console.log(char, charCount)
//     if (!charCount[char]) charCount[char] = 1;
//     else charCount[char]++;
//   }

//   let odd = 0;
//   for (var key in charCount) {
//     if (charCount[key] % 2 !== 0) {
//       odd++;
//     }
//   }
//   return odd <= 1;
// }

const permutationPalindrome = (str) => {
  let oddChar = new Set();
  for (let char of str) {
    if (oddChar.has(char)) {
      oddChar.delete(char);
    } else {
      oddChar.add(char);
    }
  }
  return oddChar.size <= 1
}

let str1 = 'aabcd';
let str2 = 'aabbcd';
console.log('should be false: ', permutationPalindrome(str1));
console.log('should be false: ', permutationPalindrome(str2));

