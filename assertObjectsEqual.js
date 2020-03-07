const eqObjectsRecursion = require('./eqObjectsRecursion');

const assertObjectsEqual = function(object1, object2) {
  let isSameBoolean = eqObjectsRecursion(object1,object2);
  if (isSameBoolean ? console.log(`✔️✔️✔️ Assertion Passed: ${object1} === ${object2}`) : console.log(`❌️❌️❌️ Assertion Failed: ${object1} !== ${object2}`));
};

module.exports = eqObjectsRecursion;

//TEST CODE
// const ab = { a: [1,2], b: [2,2] };
// const ba = { b: [2,2], a: [1,2] };
// assertObjectsEqual(ab,ba);

// const abc = { a: "1", b: "2"};
// assertObjectsEqual(ab, abc);
