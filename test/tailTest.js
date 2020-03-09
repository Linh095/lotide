const tail = require("../tail");
const assert = require("chai").assert;

describe("Testing Tail function", () => {
  it("should return [2,3] as the tail for [1,2,3]", () => {
    assert.deepEqual(tail([1,2,3]), [2,3]);
  });

  it (`should return ["there", "people"] as tail for ["hi", "there", "people"] `, () => {
    assert.deepEqual(tail(["hi", "there", "people"]),["there", "people"]);
  })
})

