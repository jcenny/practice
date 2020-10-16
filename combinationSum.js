/*
Input: candidates = [2,3,6,7], target = 7,
A solution set is:
[
  [7],
  [2,2,3]
]

Input: candidates = [2,3,5], target = 8,
A solution set is:
[
  [2,2,2,2],
  [2,3,3],
  [3,5]
]

2 3 5

remaining: 8 - 2
[2, 2, 2, 2]





*/


var combinationSum = function(candidates, target) {
  let results = [];

  const recursive = (remaining, idx, arr) => {
    if (remaining < 0) return
    if (remaining === 0) {
      results.push(arr.slice());
    }
    for (let i = idx; i < candidates.length; i++) {
      arr.push(candidates[i]);
      recursive(remaining - candidates[i], i, arr)
      arr.pop();
    }
  }

  recursive(target, 0, [])
  return results;
};

console.log(combinationSum([2,3,5], 8))