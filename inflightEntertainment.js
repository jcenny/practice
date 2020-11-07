/*
Time complexity => o(n)
Space complexity => o(n)
*/
const inflightEntertainment = (flightLength, movieLengths) => {
  let movies = new Set();
  for (let i = 0; i < movieLengths.length; i++) {
    let currentLength = movieLengths[i];
    let targetLength = flightLength - currentLength;
    if (movies.has(targetLength)) {
      return true;
    }
    movies.add(currentLength);
  }
  return false;
};

let movies1 = [1, 2, 3, 4, 5, 6, 7];
console.log('should be true: ', inflightEntertainment(7, movies1));
let movies2 = [3, 8, 3];
console.log('should be true: ', inflightEntertainment(6, movies2));
let movies3 = [2, 4];
console.log('should be false: ', inflightEntertainment(1, movies3));