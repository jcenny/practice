const getMaxProfit = (prices) => {
  let max = 0;
  let i = 0;
  let j = i + 1;
  while (j < prices.length) {
    const diff = prices[j] - prices[i];
    max = Math.max(max, diff);
    if (prices[i] > prices[j]) {
      i = j;
    }
    j++;
  }
  return max;
}

// const getMaxProfit = (prices) => {
//   let max = 0;
//   let min = prices[0];
//   for (let i = 1; i < prices.length; i++) {
//     const currentPrice = prices[i];
//     const profit = currentPrice - min;
//     max = Math.max(profit, max);
//     min = Math.min(min, currentPrice)
//   }
//   return max;
// }

const stockPrices = [10, 7, 5, 8, 11, 9];
console.log('should be 6: ', getMaxProfit(stockPrices));