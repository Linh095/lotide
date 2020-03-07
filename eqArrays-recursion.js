
const eqArrays = function (array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  } else {
    for (let x = 0; x < array1.length; x++) {
      if (Array.isArray(array1)) {
        if (!eqArrays(array1[x], array2[x])) {
          return false;
        }
      } else if (array1[x] !== array2[x]) {
        return false;
      }
    }
    return true;
  }
}



console.log(eqArrays([[2, 3], [4]], [[2, 3], [4]])); // => true
console.log(eqArrays([[2, 3], [4]], [[2, 3], [4, 5]])); // => false
console.log(eqArrays([[2, 3], [4]], [[2, 3], 4])) // => false