// const eqArrays = function(arr1, arr2) {
//   if (arr1.length !== arr2.length){
//     return false;
//   }
//   // let match = true;
//   for (let i = 0; i < arr1.length; i++){
//     if (arr1[i] !== arr2[i]){
//       return false;
//     }
//   }
//   return true;
// }

const eqArrays = require("./eqArrays");

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: [ ${actual} ] === [ ${expected} ]`)
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`)
  };
};

module.exports = assertArraysEqual;

// assertArraysEqual([1,2,3],[1,2,3])
// assertArraysEqual([1,2,3,4],[1,2,3,5])