/*
Input: "abcabcbb"
Output: 3 
 [ a, b, c]

length = j - i
a b c a b c b b
      i  
            j

p w w k e w
  i
    j
*/


// const lengthOfLongestSubstring = (s) => {
//   let i = 0;
//   let j = 0;
//   let count = 0;
//   let set = new Set();

//   while (j < s.length) {
//     let char = s.charAt(j);
//     if (!set.has(char)) {
//       set.add(char);
//       j++;
//       count = Math.max(count, j - i);
//     } else {
//       set.delete(s.charAt(i));
//       i++;
//     }
//   }
//   return count;
// }

var lengthOfLongestSubstring = function(s) {
  let i = 0;
  let j = 0;
  let max = 0;
  let storage = {};
  let char;
  while (i < s.length && j < s.length) {
    char = s.charAt(j);
    if (storage[char] === undefined) {
      storage[char] = j;
      j++;
      max = Math.max(max, j - i);
    } else {
      delete storage[s.charAt(i)];
      i++;
    }
  }
  return max;
};

const string = 'abcabcbb';
console.log('shoule be 3: ',lengthOfLongestSubstring(string));
const string2 = 'au';
console.log('shoule be 3: ', lengthOfLongestSubstring(string2))