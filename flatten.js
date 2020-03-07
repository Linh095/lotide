const assertArraysEqual = require('./assertEqual');

//MAIN FUNCTION
const flatten = function(array) {
  let flattenedArray = [];
  for (let x = 0; x < array.length; x++) {
    if (Array.isArray(array[x])) {
      const littleArray = array[x];
      for (let y = 0; y < littleArray.length; y++) {
        flattenedArray.push(littleArray[y]);
      }
    } else {
      flattenedArray.push(array[x]);
    }
  }
  return flattenedArray;
};

module.exports = flatter;
//TEST CODE
//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
