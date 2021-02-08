const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKeyByValue = function(obj, val) {
  // let newArr = Object.keys(obj);      // our newArr = [x, z, y,...n]
  for (const genre in obj) {          // for every key of our obj
    if (obj[genre] === val) {         // if our obj[key] value === given val
      return obj[genre];              // return the key name
    }
  }
};

const bestTVShowsByGenre = {
  sci_fi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama: "The Wire"
};

console.log(findKeyByValue(bestTVShowsByGenre, "Wrong Title"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Expanse"));
console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
console.log(findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine"));
assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


module.exports = findKeyByValue;