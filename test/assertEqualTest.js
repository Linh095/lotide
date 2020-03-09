const assert = require("chai").assert;
const assertEqual = require("../assertEqual");

describe ("testing assertEqual", function () {
  it ("should return true if two things are the same", function() {
    const word = "lighthouse";
    const word2 = "lighthouse";
    assert.isTrue(assertEqual(word, word2));
  });

  it ("should return false if two things are not the same", function() {
    const word = "3";
    const word2 = 3;
    assert.isFalse(assertEqual(word, word2));
  })
})