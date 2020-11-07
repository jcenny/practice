/*

Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
Output: [[1,5],[6,9]]

Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
Output: [[1,2],[3,10],[12,16]]
Explanation: Because the new interval [4,8] overlaps with [3,5],[6,7],[8,10].

Input: intervals = [], newInterval = [5,7]
Output: [[5,7]]

Input: intervals = [[1,5]], newInterval = [2,3]
Output: [[1,5]]

Input: intervals = [[1,5]], newInterval = [2,7]
Output: [[1,7]]

I: intervals (arrays in arrays), new interval array 
O: merged intervals (arrays in arrays)
C: none
E: [] => return new interval array


*/

var mergeIntervals = (intervals) => {
  let result = [intervals[0]];
  for (let i = 1; i < intervals.length; i++) {
    const prev = result[result.length - 1];
    const current = intervals[i];
    if (current[0] <= prev[1]) {
      prev[1] = Math.max(prev[1], current[1]);
    } else {
      result.push(current);
    }
  }
  return result;
}

var insert = function(intervals, newInterval) {
    if (intervals === null || intervals.length === 0) return [newInterval];
    let inOrder = [];
    let added = false;
    for (let i of intervals) {
      if (!added && newInterval[0] < i[0]) {
        inOrder.push(newInterval)
      }
      inOrder.push(i);
    }
    if (!added) {
      inOrder.push(newInterval)
    }
    return mergeIntervals(inOrder);
};

console.log('should be [[1,5],[6,9]]: ', insert([[1,3],[6,9]], [2,5]));
console.log('should be [[1,2],[3,10],[12,16]]: ', insert([[1,2],[3,5],[6,7],[8,10],[12,16]], [4,8]));
console.log('should be [[5,7]]: ', insert([], [5,7]));
console.log('should be [[1,5]]: ', insert([[1,5]], [2,3]));
console.log('should be [[1,7]]: ', insert([[1,5]], [2,7]));