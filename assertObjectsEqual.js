// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: [ ${actual} ] === [ ${expected} ]`)
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`)
  };
};


const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if(eqObjects(actual, expected)){
    console.log(`✅✅✅ Assertion Passed: [ ${inspect(actual)} ] === [ ${inspect(expected)} ]`)
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: [ ${inspect(actual)} ] !== [ ${inspect(expected)} ]`)
  };
};

const obj1 = { name: "John", age: 30 };
const obj2 = { age: 30, name: "John" };
const obj3 = { name: "Jane", age: 25 };

// Compare objects and log appropriate messages
assertObjectsEqual(obj1, obj2); // Should pass
assertObjectsEqual(obj1, obj3);