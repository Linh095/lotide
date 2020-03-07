const assertEqual = require('./assertEqual');

const tail = function(array) {
  let tailArray = [];
  for (let x = 1; x < array.length; x++) {
    tailArray.push(array[x]);
  }
  return tailArray;
};

module.exports = tail;

/* Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/
