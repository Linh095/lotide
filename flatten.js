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

const assertArraysEqual = function(array1, array2) {
  let isSameBoolean = eqArrays(array1,array2);
  if (isSameBoolean ? console.log(`✔️✔️✔️ Assertion Passed: ${array1} === ${array2}`) : console.log(`❌️❌️❌️ Assertion Failed: d: ${array1} !== ${array2}`));
};

//MAIN FUNCTION
const flatten = function(array) {
  let flattenedArray = [];
  for (let x = 0; x < array.length; x++) {
    if (Array.isArray(array[x])) {
      const littleArray = array[x];
      for (let y = 0; y < littleArray.length; y++){
        flattenedArray.push(littleArray[y]);
      }
    } else {
      flattenedArray.push(array[x]);
    }
  }
  return flattenedArray;
}

//TEST CODE
//assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);
