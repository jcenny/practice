const partitionLabels = (str) => {
  // create a map
  let charMap = {};
  // iterate through string, and store last occurence of char
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    charMap[char] = i;
  }
  // create a max
  let max = 0;
  let start = 0;
  let result = [];
  // iterate through string and update max
  for (let i = 0; i < str.length; i++) {
    const current = str[i];
    max = Math.max(max, charMap[current]);
    // if current index is equal to max => partition
    if (i === max) {
      result.push(i - start + 1); 
      start = i + 1;
    }
  }
  return result;
}

console.log('should be [9,8,7]', partitionLabels("ababcbacadefegdehijhklij"));