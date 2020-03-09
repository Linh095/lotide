const head = require("../head");
const assert = require("chai").assert;

describe("Testing Head Function", function() {
  it ("should return 1 as the head of [1,2,3]", function() {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it ("should not return 2 as the head of [1,2,3]", function() {
    assert.notStrictEqual(head([1, 2, 3]), 2);
  });

});