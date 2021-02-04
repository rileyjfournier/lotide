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
  if (Object.keys(object1).length !== Object.keys(object2).length) { 
    return false;   // IFFFF* both objects have the same # of keys, proceed, else false
  } else {
    for (const key of Object.keys(object1)) {  // for every key (array val in this case) in object1
      if (object1[key] === object2[key]) {     // if the value of THIS key is equal in both objects
        return true;                           // return turn
      } else {                                 // else false
        return false;
      }
    }
  }
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };
const abc = { a: "1", b: "2", c: "3"};
const cd = { c: "1", d: ["2", 3] };
const cd2 = { c: "1", d: ["2", 3, 4] };
const dc = { d: ["2", 3], c: "1" };

// console.log(eqObjects(ab, abc));
assertEqual(eqObjects(cd, dc), true);
assertEqual(eqObjects(cd, cd2), false);
assertEqual(eqObjects(ab, ba), true);
assertEqual(eqObjects(ab, abc), false);
