//main function
const assertArraysEqual = require('./assertEqual');

const middle = function(array) {
  let middle = [];
  if (array.length < 3) {
    return middle;
  } else if (array.length % 2 !== 0) {
    middle.push(array[(array.length - 1) / 2]);
    return middle;
  } else {
    middle = array.slice((array.length / 2 - 1), (array.length / 2 + 1));
    return middle;
  }
};

module.exports = middle;

//TEST CODE
/*
assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]
*/