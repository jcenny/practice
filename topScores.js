/* 
Sort by highest score in less than o(nlnn) time
*/

const sortScores = (unsortedScores, highestPossibleScore) => {
  let scoreCounts = new Array(highestPossibleScore + 1).fill(0);

  unsortedScores.forEach(score => {
    scoreCounts[score]++;
  }) 

  const sorted = [];
  for (let i = highestPossibleScore; i >= 0; i++) {
    const count = scoreCounts[i];
    for (let time = 0; time < count; time++) {
      sorted.push(i);;
    }
  }
  return sorted;
}

const unsortedScores = [37, 89, 41, 65, 91, 53];
const HIGHEST_POSSIBLE_SCORE = 100;
sortScores(unsortedScores, HIGHEST_POSSIBLE_SCORE);