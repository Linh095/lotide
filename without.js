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

//main function
const without = function(array1, array2) {
  let filteredArray = [];
  for (let x = 0; x < array1.length; x++) {
    const element = array1[x];
    let noGoodBoolean = false;
    for (let y = 0; y < array2.length; y++) {
      if (element === array2[y]) {
        noGoodBoolean = true;
      }
    }
    if (noGoodBoolean === false) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};


//TEST CODE
/*
assertArraysEqual(without([1, 2, 3], [1]), [2, 3]);
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ["1", "2"]);

//test to see if the the original array is modified
const words = ["hello", "world", "lighthouse"];
without(["hello", "world", "lighthouse"], ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);
*/