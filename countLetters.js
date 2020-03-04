const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else  {
    return console.log(`❌️❌️❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  const string = str.toLowerCase();
  let lettersCounted = {};
  for (const letter of string) {
    if (lettersCounted[letter] === undefined) {
      //console.log(letter);
      lettersCounted[letter] = 1;
    } else {
      lettersCounted[letter] = lettersCounted[letter] + 1;
    }
  }
  return lettersCounted;
};

//TEST CODE
//console.log(countLetters("Lighthouse Lab"));