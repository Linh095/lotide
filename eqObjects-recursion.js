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

  if (typeof thing1 !== typeof thing2) {
    return false;

  } else if (Array.isArray(thing1)) {
    if (!eqArrays(thing1, thing2)) {
      return false;
    } 

  } else if ((thing1 === null && thing2 !== null) || (thing2 === null && thing1 !== null) ) {
    return false;

  } else if (typeof thing1 !== 'object') {
    if (thing1 !== thing2) {
      return false;
    }
  } else {
    for (const key in thing1) {
      if (!eqObjects(thing1[key], thing2[key])) {
        return false;
      }
    }
  }
  return true;
}
  

// console.log(eqObjects(null,[null]));

//TEST CODE
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false