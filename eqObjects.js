const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');

const eqObjects = function(object1, object2) {
  const keysObject1 = Object.keys(object1);
  const keysObject2 = Object.keys(object2);
  if (keysObject1.length !== keysObject2.length) {
    return false;
  }
  for (const key in object1) {
    const value1 = object1[key];
    const value2 = object2[key];

    if (Array.isArray(value1)) {
      if (!eqArrays(value1,value2)) {
        return false;
      }
    } else {
      if (object1[key] !== object2[key]) {
        return false;
      }
    }
  }
  return true;
};

module.exports = eqObjects;

//TEST CODE
//const ab = { a: "1", b: "2" };
//const ba = { b: "2", a: "1" };
/*
const ab = { a: [1,2], b: [2,2] };
const ba = { b: [2,2], a: [1,2] };

console.log(assertEqual(eqObjects(ab, ba), true));

// const abc = { a: "1", b: "2", c: "3" };
const abc = { a: "1", b: "2"};
console.log(assertEqual(eqObjects(ab, abc),false));
*/