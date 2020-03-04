const eqArrays = function(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let x = 0; x < array1.length; x++) {
      if (array1[x] !== array2[x]) {
        return false;
      }
    }
    return true;
  }
};

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

const assertObjectsEqual = function(object1, object2) {
  let isSameBoolean = eqObjects(object1,object2);
  if (isSameBoolean ? console.log(`✔️✔️✔️ Assertion Passed: ${object1} === ${object2}`) : console.log(`❌️❌️❌️ Assertion Failed: ${object1} !== ${object2}`));
};

//TEST CODE
// const ab = { a: [1,2], b: [2,2] };
// const ba = { b: [2,2], a: [1,2] };
// assertObjectsEqual(ab,ba);

// const abc = { a: "1", b: "2"};
// assertObjectsEqual(ab, abc);
