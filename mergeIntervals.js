/*
Input: [[1,3],[2,6],[8,10],[15,18]]
Output: [[1,6],[8,10],[15,18]]
Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into [1,6].

Input: [[1,4],[4,5]]
Output: [[1,5]]
Explanation: Intervals [1,4] and [4,5] are considered overlapping.


[[1,3],[2,6],[8,10],[15,18]]
// I: array of intervals
// O: array of merged intervals
// C: n/a
// E: one interval or empty interval

// time complexity => sort nlogn + iterating through intervals n = nlogn + n
// storage => sort array n + result array n => 2n or n

// sort intervals by start, this allows us to know that the next start value will always be equal or greater than
// when to merge?
  // merge if the start of the second value is less than or equal to the first end value
// edge cases, empty or with one interval, return the current intervals

*/

const mergeIntervals = (intervals) => {
  // handle edge case of one interval or empty interval
  if (intervals <= 1) return intervals;
  // sort intervals by start
  intervals = intervals.sort((a, b) => {
    return a[0] - b[0];
  })
  // create result array, with first interval
  let result = [intervals[0]];
  let last = result.length - 1;
  // iterate through array starting at second value,
  for (let i = 1; i < intervals.length; i++) {
    // compare the start of the current value to be less than or equal to the result end value,
    const currentStart = intervals[i][0];
    const currentEnd = intervals[i][1];
    if (currentStart <= result[last][1]) {
      // if true, replace result end value with end value of current 
      result[last] = [result[last][0], currentEnd];
    } else {
      // if false, push current interval into result
      result.push([currentStart, currentEnd]);
    }
  }
  return result;
}

console.log('[[1,6],[8,10],[15,18]]:', mergeIntervals([[1,3],[2,6],[8,10],[15,18]]));
console.log('merge [[1,5]]:', mergeIntervals([[1,4],[4,5]]));
console.log('edge case [[1,5]]:', mergeIntervals([[1,5]]));
console.log('more than 2 merge [[1,6], [7,8]]:', mergeIntervals([[1,4],[4,5],[5,6], [7,8]]));