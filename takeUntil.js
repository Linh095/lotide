const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] !== array2[x]) {
        return false;
      }
    }
    return true;
  }
};

const assertArraysEqual = require('./assertEqual');

//MAIN FUNCTION
const takeUntil = function(array, callback) {
  let results = [];
  for (const element of array) {
    if (callback(element)) {
      return results;
    }
    results.push(element);
  }
};

module.exports = takeUntil;

//TEST CODE
// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);console.log(assertArraysEqual(results1,[ 1, 2, 5, 7, 2 ]));

// console.log('---');

// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const results2 = takeUntil(data2, x => x === ',');
// console.log(assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]));
