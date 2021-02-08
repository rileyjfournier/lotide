const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const findKey = (obj, callback) => {
  for (const name in obj) {
    if (callback(obj[name])) {
      return name;
    }
  }
  return false;
}

const example1 = findKey({
  "Blue Hill": { stars: 1 },
  "Akaleri":   { stars: 3 },
  "noma":      { stars: 2 },
  "elBulli":   { stars: 3 },
  "Ora":       { stars: 2 },
  "Akelarre":  { stars: 3 }
}, student => student.stars === 2) // this should return "noma"

assertEqual(example1, "noma");


module.exports = findKey;