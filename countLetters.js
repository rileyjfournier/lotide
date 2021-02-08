const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const countLetters = function(str) {
  let newObj = {};
  for (const letter of str) {
    if (letter !== " ") {
      if (newObj[letter]) {
        newObj[letter] += 1;
      } else {
        newObj[letter] = 1;
      }
    }
  }
  console.log(newObj);
};

const strExample = "hello my name is riley";

countLetters(strExample);

assertEqual(strExample, "hello my name is riley");

module.exports = countLetters;