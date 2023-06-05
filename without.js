const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: [ ${actual} ] === [ ${expected} ]`)
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`)
  };
};

const eqArrays = function(arr1, arr2) {
  if (arr1.length !== arr2.length){
    return false;
  }
  // let match = true;
  for (let i = 0; i < arr1.length; i++){
    if (arr1[i] !== arr2[i]){
      return false;
    }
  }
  return true;

}

const words = ["hello", "world", "lighthouse"];


const without = function(source, itemsToRemove) {
  return source.filter((item) => !itemsToRemove.includes(item));
};

const last = without(words, ["lighthouse"]);
// no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(last, ["hello", "world"]);// test if the without function is same as the array from ItermsToRemove