const eqArrays = function(arr1, arr2) {
  let eqChecker = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      eqChecker += 1;
    } 
  }
  if (eqChecker === arr1.length && eqChecker === arr2.length) {
    return true;
  } else {
    return false;
  }
};

const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

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

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3"};
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };

console.log(eqArrays(cd["d"], cd2["d"]))
console.log(eqObjects(cd, cd2));
console.log(eqObjects(ab, ba))
console.log(eqObjects(cd, dc))
console.log(eqObjects(ab, abc))
console.log(eqObjects(ab, cd))

// console.log(eqObjects(ab, abc));
// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);


module.exports = eqObjects;