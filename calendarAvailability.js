const mergeCalendars = (cal1, cal2) => {
  
}

const calendarAvailability = (cal1, daily1, cal2, daily2) => {

}


/*
merged: [[9:00, 11:30], [12:00, 14:30], [14:30, 15:00], [16:00, 18:00]]
daily merged, max start, min end: [10:00, 18:30]
*/

let calendar1 = [['9:00', '10:30'], ['12:00', '13:00'] ['16:00', '18:00']];
let dailyBound1 = ['9:00', '20:00'];
let calendar2 = [['10:00', '11:30'], ['12:30', '14:30'], ['14:30', '15:00'], ['16:00', '17:00']];
let dailyBound2 = ['10:00', '18:30'];
let duration = 30;
console.log('should be [[11:30, 12:00], [15:00, 16:00], [18:00, 18:30]]', calendarAvailability(calendar1, dailyBound1, calendar2, dailyBound2));