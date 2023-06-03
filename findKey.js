// FUNCTION IMPLEMENTATION
const assertEqual = function(actual, expected) {
  if (actual === expected){
    console.log(`✅✅✅ Assertion Passed: [ ${actual} ] === [ ${expected} ]`)
  }else {
    console.log(`🛑🛑🛑 Assertion Failed: [ ${actual} ] !== [ ${expected} ]`)
  };
};

const findKey = function(obj,callBackKey){
  let val;
  for (const name in obj){
    if (callBackKey(obj[name])){
      val = name;
      return val; 
    }
  }
};

assertEqual("noma", findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, x => x.stars === 2))// => "noma"




// function(x) {
//   if (x["stars"] ===2){
//     return x
//   }
// }