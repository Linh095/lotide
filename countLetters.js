const assertEqual = require('./assertEqual');

const countLetters = function(str) {
  let string = str.toLowerCase();
  string = string.replace(/\s/g,"");
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

module.exports = countLetters;
//TEST CODE
//console.log(countLetters("Lighthouse Lab"));