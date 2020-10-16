/*
abababababababababababababababababab
i
 j

*/

const uniqueSubstrings = (s) => {
  let result = new Set();
  for (let i = 0; i < s.length; i++) {
    for (let j = i + 1; j <= s.length; j++) {
      const substring = s.substring(i, j);
      result.add(substring);
    }
  }

  return result.size;
}

console.log('should be 71: ', uniqueSubstrings('abababababababababababababababababab'))