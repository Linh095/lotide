const eqArrays = require('./eqArrays');

//MAIN FUNCTION
const eqObjectsRecursion = function(thing1, thing2) {

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
      if (!eqObjectsRecursion(thing1[key], thing2[key])) {
        return false;
      }
    }
  }
  return true;
}
  
module.exports = eqObjectsRecursion;

//TEST CODE
// console.log(eqObjects(null,[null]));
// console.log(eqObjects({ a: { z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => true

// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: { z: 1 }, b: 2 })); // => false
// console.log(eqObjects({ a: { y: 0, z: 1 }, b: 2 }, { a: 1, b: 2 })); // => false