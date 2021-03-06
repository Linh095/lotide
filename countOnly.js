const assertEqual = require('./assertEqual');

const countOnly = function(allItems, itemsToCount) {
  const results = {};
  for (const itemToCount in itemsToCount) {
    //check to see if item should be counted (will return true)
    if (itemsToCount[itemToCount]) {
      let counter = 0;
      //loop through all items and compare it to the item that is to be counted
      for (const item of allItems) {
        if (item === itemToCount) {
          counter++;
        }
      }
      if (counter === 0) {
        counter = undefined;
      }
      //assign item name and number of time it occurs to result
      results[itemToCount] = counter;
    }
  }
  return results;
};

module.exports = countOnly;

//TEST CODE
/*
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const whatToCount = { "Jason": true, "Karima": true, "Fang": true };

const result1 = countOnly(firstNames, whatToCount);

console.log(assertEqual(result1["Jason"], 1));
console.log(assertEqual(result1["Karima"], undefined));
console.log(assertEqual(result1["Fang"], 2));
*/
