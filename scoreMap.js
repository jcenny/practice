function createScoreMap() {
  const scoreMap = {};
  for (let i = 300; i < 600; i++) {
    scoreMap[i] = 'Poor,0';
  }
  for (let j = 600; j < 700; j++) {
    scoreMap[j] = 'Fair,1';
  }
  for (let k = 700; k < 750; k++) {
    scoreMap[k] = 'Good,2';
  }
  for (let l = 750; l < 800; l++) {
    scoreMap[l] = 'Excellent,3'
  }
  return scoreMap;
}

function codingScoreReportPercent(scores) {
  const scoreMap = createScoreMap();
  let totalCount = {};
  // calculate total count of each level
  for (let i = 0; i < scores.length; i++) {
    const currentScore = scores[i];
    const currentLevel = scoreMap[currentScore];
    if (currentLevel) {
      if (totalCount[currentLevel]) totalCount[currentLevel]++;
      else totalCount[currentLevel] = 1;
    } else if (currentScore >= 800) {
      // handle elite level
      if (totalCount['Elite,4']) totalCount['Elite,4']++;
      else totalCount['Elite,4'] = 1;
    }
  }
  
  // iterate through total count and calculate percentage
  let percentages = [];
  for (let level in totalCount) {
    const count = totalCount[level];
    const percent = Math.floor((count/scores.length) * 10000)/ 100;
    const levelOrder = level.split(',');
    percentages.push([percent,levelOrder[0], levelOrder[1]]);
  }
  
  // sort by level
  percentages.sort((a, b) => b[2] - a[2]);
  // sort by percentage;
  percentages.sort((a, b) => b[0] - a[0]);
  
  const result = percentages.map((level) => {
    // format percentages to be 2 decimals
    let percentFormatted = level[0].toString();
    if (percentFormatted.length !== 4) percentFormatted += '.'
    while (percentFormatted.length <= 4) {
      percentFormatted += '0';
    }
    return `${level[1]}: ${percentFormatted}%`
  })
  return result;
}
