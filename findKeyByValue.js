const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else  {
    return console.log(`❌️❌️❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function (object, value) {
  for (const key in object) {
    if (object[key] === value) {
      return key;
    }
  }
  return undefined;
};

//TEST CODE
/*
const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama"));
console.log(assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined));
*/