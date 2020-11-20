/*
Input: nums = [1,2,3]
Output:
[
  [3],
  [1],
  [2],
  [1,2,3],
  [1,3],
  [2,3],
  [1,2],
  []
]
                []
        [1]       [2]   [3]
    [1,2] [1,3]  [2,3]
  [1,2,3]

*/
var subsets = function(nums) {
  let result = [];

  const dfs = (current, idx) => {
    result.push(current);
    for (let i = idx; i < nums.length; i++) {
      dfs(current.concat(nums[i]), i + 1);
    }
  }
  
  dfs([], 0)
  return result;
};

console.log('should be [[3],[1],[2],[1,2,3],[1,3],[2,3],[1,2],[]]', subsets([1, 2, 3]))