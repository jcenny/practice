/* 
Time Complexity => o(n)
Space Complexity => o(1)
*/

const cafeOrderChecker = (takeOut, dineIn, served) => {
  if (takeOut.length + dineIn.length !== served.length) return false;
  let takeOutIndex = 0;
  let dineInIndex = 0;
  let servedIndex = 0;
  while ((takeOutIndex + dineInIndex) < served.length) {
    if (served[servedIndex] === takeOut[takeOutIndex]) {
      takeOutIndex++;
    } else if (served[servedIndex] === dineIn[dineInIndex]) {
      dineInIndex++;
    } else {
      return false;
    }
    servedIndex++;
  } 
  return true;
}

let takeOutOrders = [17, 8, 24];
let dineInOrders = [12, 19, 2];
let servedOrders = [17, 8, 12, 19, 24, 2];
console.log('should be true: ', cafeOrderChecker(takeOutOrders, dineInOrders, servedOrders));