// return console.log(`✔️✔️✔️ Assertion Passed: ${actual} === ${expected}`)
// return console.log(`❌️❌️❌️ Assertion Failed: ${actual} !== ${expected}`)

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

//MAIN FUNCTION
const eqObjects = function(thing1, thing2) {
  // if (typeof thing1 !== "object" || typeof thing2 !== "object") {
  //   return console.log("One or both arguements are not objects")
  // }
  if (typeof thing1 !== typeof thing2) {
    return false;
  } else if (typeof thing1 === "array") {
    if (!eqArrays(thing1, thing2)) {
      return false;
    }
  } else if (thing1 === null) {
    if (thing2 !== null) {
      return false;
    }
  } else if (typeof thing1 === "object") {

    console.log(Object.keys(thing1)
    .length, Object.keys(thing2).length)

    if (Object.keys(thing1)
      .length !== Object.keys(thing2).length) {
      return false;
    } else {
      for (const key in thing1) {
      console.log("key is ", key);
      eqObjects(thing1[key], thing2[key]);
      }
    }
    
  } else {
    if (thing1 !== thing2) {
      return false;
    }
  }
  return true;
}

console.log(eqObjects(2,[]));

//TEST CODE
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 }) // => false