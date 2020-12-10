/*
1 2 3
1 2 3
3 3 1

1 10 20
2 100 100

[ [ 49, 73, 58 ],
  [ 30, 72, 44 ],
  [ 78, 23, 9 ],
  [ 40, 65, 92 ],
  [ 42, 87, 3 ],
  [ 27, 29, 40 ],
  [ 12, 3, 69 ],
  [ 9, 57, 60 ],
  [ 33, 99, 78 ],
  [ 16, 35, 97 ] ]

*/

function minCost(cost) {
  // create material cost map
  let costMap = {};
  for (let i = 0; i < cost.length; i++) {
    for (let j = 0; j < cost[i].length; j++) {
      if (!costMap[i]) costMap[i] = [cost[i][j]];
      else costMap[i].push(cost[i][j]);
    }
  }
  // create house set;
  let houseSet = new Set();
  let minCost = [];
  // iterate through map costs and select minimum cost if house has not been added to set
  for (let material in costMap) {
    const possibleCosts = costMap[material];
    let currentMin = Infinity;
    let currentHouse;
    possibleCosts.forEach((val, houseIndex) => {
      if (!houseSet.has(houseIndex)) {
        if (currentMin > val) {
          currentMin = val;
          currentHouse = houseIndex;
        }
      }
    });
    houseSet.add(currentHouse);
    minCost += currentMin;
  }
  return minCost;
}
