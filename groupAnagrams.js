/*
I: array of strings
O: array of arrays
C: none
E: [""] => [[""]]

{
  e:
  a:
  t:
}

Time complexity => o(n * mlogm), n is strs, m is length of longest word
Space complexity => o(n)
*/

const groupAnagrams = (strs) => {
  let result = {};
  let word;
  let sorted;
  for (let i = 0; i < strs.length; i++) {
    word = strs[i];
    sorted = word.split('').sort().join('');
    if (!result[sorted]) {
      result[sorted] = [word];
    } else {
      result[sorted].push(word);
    }
  }
  console.log(result)
  return Object.values(result);
}

const strs1 = ["eat","tea","tan","ate","nat","bat"]
const strs2 = [""];
const strs3 = ["a"];
console.log('should be [["bat"],["nat","tan"],["ate","eat","tea"]]: ', groupAnagrams(strs1));
console.log('should be [[""]]: ', groupAnagrams(strs2));
console.log('should be ["a"]: ', groupAnagrams(strs3));
