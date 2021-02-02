const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`👍👍👍 Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`💩💩💩 Assertion Failed: ${actual} !== ${expected}`);
  }
};

const tail = function(arr) {
  let newArr = [];
  for (let i = 1; i < arr.length; i++) {
    newArr.push(arr[i]);
  }
  return newArr;
};

const words = ["Hello", "Lighthouse", "Labs"];
const moreWords = [];
const evenMoreWords = ["Hello"];

console.log(tail(words));
console.log(tail(moreWords));
console.log(tail(evenMoreWords));

assertEqual(words.length, 3);