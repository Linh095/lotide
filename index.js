const head   = require('./head');
const tail   = require('./tail');
const middle = require('./middle');
const map = require('./map');
const eqArrays   = require('./eqArrays');
const eqArraysEqual   = require('./eqArraysEqual');
const eqArraysRecursion = require('./eqArraysRecursion');
const eqObjects  = require('./eqObjects');
const eqObjectsRecursion = require('./eqObjectssRecursion');
const assertArraysEqual = require('./assertArraysEqual');
const assertEqual = require('./assertEqual');
const assertObjectsEqual = require('./assertObjectsEqual');
const findKey = require('./findKey');
const findKeyByValue = require('./findKeyByValue');
const flatten = require('./flatten');
const letterPosition = require('./letterPosition');
const takeUntil = require('./takeUntil');
const without = require('./without');


module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  map: map,
  eqArrays: eqArrays,
  eqArraysEqual: eqArraysEqual,
  eqArraysRecursion: eqArraysRecursion,
  eqObjects: eqObjects,
  eqObjectsRecursion: eqObjectsRecursion,
  assertArraysEqual: assertArraysEqual,
  assertObjectsEqual: assertObjectsEqual,
  assertEqual: assertEqual,
  findKeyByValue: findKeyByValue,
  findKey: findKey,
  flatten: flatten,
  letterPosition: letterPosition,
  takeUntil: takeUntil,
  without: without
};