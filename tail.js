const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else  {
    return console.log(`❌️❌❌️❌️️    Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(array) {
  let tailArray = [];
  for (let x = 1; x < array.length; x++) {
    tailArray.push(array[x]);
  }
  return tailArray;
};


/* Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
*/
