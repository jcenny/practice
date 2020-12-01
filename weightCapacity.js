/*
1 3 5 max => 7
output: 1 + 5 = 6

1 3 5
  i 
    j
  
4 8 5 9 max => 20
output: 4 + 5 + 9

4 5 8 9
*/

function weightCapacity(weights, maxCapacity) {
  let sums = [];
  const calcCombinations = (current, idx) => {
    if (current <= maxCapacity) sums.push(current);
    for (let i = idx; i < weights.length; i++) {
      calcCombinations(current + weights[i], i + 1);
    }
  }
  calcCombinations(0, 0)
  return Math.max(...sums);
}

console.log('should be 18: ', weightCapacity([4, 8, 5, 9], 20));
console.log('should be 6: ', weightCapacity([1, 3, 5], 7))