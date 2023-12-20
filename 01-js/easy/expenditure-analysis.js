/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

function calculateTotalSpentByCategory(transactions) {
  const map = new Map();
  transactions.map((tran) => {
    if(map.has(tran.category)){
      map.set(tran.category, map.get(tran.category) + tran.price);
    }
    else{
      map.set(tran.category, tran.price);
    }
  })

  let result = [];
  for(let x of map.keys()){
    console.log(x);
    result.push({ 
      category: x,
      totalSpent: map.get(x),
    });
  }

  return result;
}

module.exports = calculateTotalSpentByCategory;
