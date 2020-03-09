const eqArrays = require('./eqArrays');

const assertArraysEqual = function(array1, array2) {
  let stringToDisplay = "";
  if(eqArrays(array1,array2)) {
    stringToDisplay += "Arrays are equal"
  } else {
    stringToDisplay += "Arrays are not equal"

  }
 return stringToDisplay
};



module.exports = assertArraysEqual;

// `✔️✔️✔️ Assertion Passed: ${array1} === ${array2}`
//`❌️❌️❌️ Assertion Failed: ${array1} !== ${array2}`

console.log(assertArraysEqual([1, 2, 3], [1, 2, 3]));