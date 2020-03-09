const assertArraysEqual = require('./assertEqual');

//main function
const without = function(array1, array2) {
  let filteredArray = [];
  //first for loop - goes through all elements in array 1
  for (let x = 0; x < array1.length; x++) {
    const element = array1[x];

    //this is what you are missing now - its a variable that keeps track of whether or not something is the same
    let noGoodBoolean = false;

    //second loop - goes through all elements in array 2
    for (let y = 0; y < array2.length; y++) {
      if (element === array2[y]) {
        noGoodBoolean = true;
      }
    }

    //once we have the answer - is it the same as ANY of the elements in array 2
    if (noGoodBoolean === false) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

module.exports = without;

//TEST CODE
/*
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

//test to see if the the original array is modified
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/