//function import to test middle function
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

//main function
const assertArrayEqual = function(array1, array2) {
  let isSameBoolean = eqArrays(array1,array2);
  if (isSameBoolean ? console.log(`✔️✔️✔️ Assertion Passed: ${array1} === ${array2}`) : console.log(`❌️❌️❌️ Assertion Failed: d: ${array1} !== ${array2}`));
};

const middle = function(array) {
  let middle = [];
  if (array.length < 3) {
    return middle;
  } else if (array.length % 2 !== 0) {
    middle.push(array[(array.length - 1) / 2]);
    return middle;
  } else {
    middle = array.slice((array.length / 2 - 1), (array.length / 2 + 1));
    return middle;
  }
};

//TEST CODE
assertArrayEqual(middle([1]),[]); // => []
assertArrayEqual(middle([1, 2]), []); // => []
assertArrayEqual(middle([1, 2, 3]), [2]); // => [2]
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArrayEqual(middle([1, 2, 3, 4]),[2,3]); // => [2, 3]
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]