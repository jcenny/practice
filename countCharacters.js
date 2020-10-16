/*

Input: words = ["cat","bt","hat","tree"], chars = "atach"
Output: 6
Explanation: 
The strings that can be formed are "cat" and "hat" so the answer is 3 + 3 = 6.

Input: words = ["hello","world","leetcode"], chars = "welldonehoneyr"
Output: 10
Explanation: 
The strings that can be formed are "hello" and "world" so the answer is 5 + 5 = 10.

I: array of words, string 
O: number of chars in words that can be found in string
C: none
E: none
*/

// var makeStorage = function(chars) {
//   let storage = {};
//   let char;
//   for (let i = 0; i < chars.length; i++) {
//     char = chars[i];
//     if (!storage[char]) {
//       storage[char] = 1
//     } else {
//       storage[char]++;
//     }
//   }
//   return storage;
// }

// var countCharacters = function(words, chars) {
//   let result = 0;
//   for (let j = 0; j < words.length; j++) {
//     let storage = makeStorage(chars);
//     let size = 0;
//     for (let k = 0; k < words[j].length; k++) {
//       if (storage[words[j][k]] && storage[words[j][k]] !== 0) {
//         storage[words[j][k]]--;
//         size++;
//       } else {
//         break;
//       }
//     }
//     if (size === words[j].length) result += size;
//   }
//   return result;
// };

var countCharacters = function(words, chars) {
  // constant countChar space
  let countChar = new Array(26).fill(0);
  let char;

  // Time complexity o(m) m => length of chars
  for (let i = 0; i < chars.length; i++) {
    char = chars.charCodeAt(i) - 97;
    if (!countChar[char]) {
      countChar[char] = 1
    } else {
      countChar[char]++;
    }
  }

  let result = 0;
  let charCode;
  // o(n * m * x) n => words, m => chars, x => length of words
  for (let j = 0; j < words.length; j++) {
    let storage = countChar.slice();
    let size = 0;
    for (let k = 0; k < words[j].length; k++) {
      charCode = words[j].charCodeAt(k) - 97;
      if (storage[charCode] && storage[charCode] !== 0) {
        storage[charCode]--;
        size++;
      } else {
        break;
      }
    }
    if (size === words[j].length) result += size;
  }
  return result;
};

let words1 = ["cat","bt","hat","tree"];
let chars1 = "atach";
let words2 = ["hello","world","leetcode"];
let chars2 = "welldonehoneyr";

console.log('should be 6: ', countCharacters(words1, chars1));
console.log('should be 10: ', countCharacters(words2, chars2));