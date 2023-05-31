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

const assertArraysEqual = function(actual, expected) {
  if (eqArrays(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: [ ${actual} ] === [ ${expected} ]`)
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`)
  };
};

// ACTUAL FUNCTION
const middle = function(array) {
  //...
  let arr = []
  if (array.length < 2){
    return arr;
  }else{
    if (array.length % 2 === 1){
      arr.push( array[Math.floor(array.length / 2)])
      return arr;
    }
    else{
      arr.push(array[Math.floor((array.length / 2))-1],array[Math.floor((array.length / 2))] )
      return arr;
    }
  }
}
// TEST CODE
// ...

console.log(middle([1, 2, 3])) // => [2, 3]
// console.log(middle([1, 2, 3, 4, 5, 6])) // => [3, 4]