/*
Time complexity: nlogn + n => nlogn
Space complexity: n
*/

const mergeMeetingTimes = (meeting) => {
  // deep copy
  const meetings = JSON.parse(JSON.stringify(meeting));
  // sort meetings by startTime
  meetings.sort((a, b) => {
    return a.startTime - b.startTime
  });
  let result = [meetings[0]];
  let current;
  let prev;
  // iterate through meetings starting at 2nd value
  for (let i = 1; i < meetings.length; i++) {
    // compare current start time to recent end time,
    prev = result[result.length - 1]
    current = meetings[i]
    if (current.startTime <= prev.endTime) {
      prev.endTime = Math.max(prev.endTime, current.endTime);
    } else {
      result.push(current);
    }
  }
  return result;
}

let meetings = [
  { startTime: 0,  endTime: 1 },
  { startTime: 3,  endTime: 5 },
  { startTime: 4,  endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9,  endTime: 10 },
];

let meetings2 = [
  { startTime: 1, endTime: 2 }, { startTime: 2, endTime: 3 }
]

console.log(`should be [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 8 },
  { startTime: 9, endTime: 12 }
]: `, mergeMeetingTimes(meetings));
console.log(`should be [{startTime: 1, endTime: 3}]: `, mergeMeetingTimes(meetings2));