const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else  {
    return console.log(`❌️❌️❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const letterPositions = function(str) {
  const string = str.toLowerCase();
  let results = {};

  for (const letterIndex in string) {
    const letter = string.charAt(letterIndex);
    if (results[letter] === undefined) {
      results[letter] = [parseInt(letterIndex)];
    } else {
      results[letter].push(parseInt(letterIndex));
    }
  }
  delete results[' '];
  return results;
};
//TEST CODE
/*
const expected = {
  l: [0],
  i: [1, 11],
  g: [2],
  h: [3, 5, 15, 18],
  t: [4, 14],
  o: [6, 19],
  u: [7, 20],
  s: [8, 21],
  e: [9, 16, 22],
  n: [12]
};

const results = letterPositions("lighthouse in the house");

console.log(results;
console.log(expected);

testBoolean = true;
for (const letter in results){
  if (results.letter === expected.letter){
    testBoolean = false;
  }
};

console.log(assertEqual(testBoolean, true));

*/