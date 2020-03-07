 const assertEqual = require('./assertEqual');

//HEAD FUNCTION
const head = function(array) {
  return array[0];
};

module.exports = head;
//test code
//console.log(head([1, 2, 3]));
//assertEqual(head([5,6,7]), 5);
//assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");