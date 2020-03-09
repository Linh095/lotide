
//TEST CODE
/*
assertArraysEqual(middle([1]),[]); // => []
assertArraysEqual(middle([1, 2]), []); // => []
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]
*/
const assert = require("chai").assert;
const middle = require("../middle");

describe("Testing middle function", () => {
  it ("should return empty array when passed empty array", () => {
    assert.deepEqual(middle([]), []);
  })
  it ("should return empty array when passed array with one element [1]", () => {
    assert.deepEqual(middle([1]), []);
  })
  it ("should return 2 array when passed [1,2,3]", () => {
    assert.deepEqual(middle([1,2,3]), [2]);
  })

  it ("should return [2,3] when passed [1,2,3,4]", () => {
    assert.deepEqual(middle([1,2,3,4]), [2,3]);
  })


});
