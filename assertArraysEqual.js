const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  let isSameBoolean = eqArrays(array1,array2);
  if (isSameBoolean ? console.log(`✔️✔️✔️ Assertion Passed: ${array1} === ${array2}`) : console.log(`❌️❌️❌️ Assertion Failed: ${array1} !== ${array2}`));
};

module.exports = assertArraysEqual;

/* TEST CODE
assertArrayEqual([1, 2, 3], [1, 2, 3]); // => true
assertArrayEqual([1, 2, 3], [3, 2, 1]); // => false

assertArrayEqual(["1", "2", "3"], ["1", "2", "3"]); // => true
assertArrayEqual(["1", "2", "3"], ["1", "2", 3]); // => false
*/