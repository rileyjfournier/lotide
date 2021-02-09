const eqArrays = require('./eqArrays');

// this function should return true if both objects have identical keys && values
// otherwise return false

const eqObjects = function(object1, object2) {
  let object1Keys = Object.keys(object1);
  let object2Keys = Object.keys(object2);
  if (object1Keys.length !== object2Keys.length) { 
    return false;   // IFFFF* both objects have the same # of keys, proceed, else false
  } 
  for (const key of object1Keys) {           // for every key (array val in this case) in object1
      let arr1 = [];
      let arr2 = [];
    if (Array.isArray(object1[key]) && Array.isArray(object2[key])) {
      arr1 = object1[key];
      arr2 = object2[key];
      if (eqArrays(arr1, arr2)) {
        return true;
      }
      return false;
     } 
    if (object1[key] !== object2[key]) {
        return false;
    }
  }
  return true;
};


module.exports = eqObjects;