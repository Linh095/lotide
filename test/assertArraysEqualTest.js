const assertArraysEqual = require('../assertArraysEqual');
const assert = require("chai").assert;

describe("Testing assertArraysEqual function", function() {
  it ("should return \'Arrays are equal\' if array1 is [1,2,3] and array2 is [1,2,3]", function() {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), "Arrays are equal");
  });

  it ("should return \'Arrays are not equal\' if array1 is [1,2,\"3\"] and array2 is [1,2,3]", function() {
    assert.strictEqual(assertArraysEqual([1, 2, '3'], [1, 2, 3]), "Arrays are not equal");
  });

});


