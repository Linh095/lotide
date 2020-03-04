const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`);
  } else  {
    return console.log(`❌️❌️❌️ Assertion Failed: ${actual} !== ${expected}`);
  }
};

const eqObjects = function(object1, object2) {
  const keysObject1 = Object.keys(object1);
  const keysObject2 = Object.keys(object2);
  if (keysObject1.length !== keysObject2.length) {
    return false;
  }
  for (const key in object1) {
    if (object1[key] !== object2[key]) {
      return false;
    }
  }
  return true;
};

//TEST CODE
/*
const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
console.log(assertEqual(eqObjects(ab, ba), true));

const abc = { a: "1", b: "2", c: "3" };
console.log(assertEqual(eqObjects(ab, abc),false));
*/