// - Find the largest increase between two elements when going from left to right. If there is no increase return -1. (this is like the apple stocks hack-hour)
// Ex: 

const elements = [1,6,5,10,8,7];

// 2-10 -> 7
// 5-10 -> 5
// 1-10 -> 9
// 7-10 -> 3
// returns 9

//loop through the array
//grab difference and push the differences into a saved array
//return the max of that array

function highestProfit(elements) {
  let results = [];
  let highest = 0;
  for(let i = elements.length-1; i >= 0; i--) {
    for(let j = elements.length-2; j >=0; j--) {
      difference = elements[i] - elements[j]
      if(difference > highest) {
        highest = difference
      }
    }
    elements.pop()
  }
  if(highest <= 0) {
    return -1
  } else {
    return highest
  }
}

function bestProfit(stock_prices_yesterday) {
  if (!Array.isArray(stock_prices_yesterday) || !stock_prices_yesterday.length) return 0;
  let buy = stock_prices_yesterday[0];
  let profit = 0;
  for (let i = 0; i < stock_prices_yesterday.length; i++) {
    buy = Math.min(buy, stock_prices_yesterday[i])
    profit = Math.max(profit, stock_prices_yesterday[i] - buy)
  }
  return profit === 0 ? -1 : profit;
}

// bestProfit(elements)

highestProfit(elements)