// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else  {
    return console.log(`❌️❌️❌️❌️ ❌️  Assertion Failed: d: ${actual} !== ${expected}`);
  }
};

// TEST CODE
//assertEqual(1, 1);
