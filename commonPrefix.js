/*
abcabcd  => 
 bcabcd
  cabcd
   abcd
    bcd
     cd
      d

*/


function commonPrefix(inputs) {
  let sums = inputs.map((string) => {
    return string.length
  })

  const isCommon = (suffix, removed) => {
    let i = 0;
    let j = 0;
    while (j < removed.length) {
      if (suffix[i] !== removed[j]) {
        break;
      }
      i++;
      j++;
    }
    return j;
  }

  for (let i = 0; i < inputs.length; i++) {
    let currentSum = sums[i];
    for (let k = 1; k < inputs[i].length; k++) {
      const suffix = inputs[i].substring(k);
      const toRemove = inputs[i].substring(0, k + 1);
      currentSum += isCommon(suffix, toRemove)
    }
    sums[i] = currentSum;
  }

  return sums
}
