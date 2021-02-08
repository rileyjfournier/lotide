const assertArraysEqual = function(arr1, arr2) {
  let eqChecker = 0;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] === arr2[i]) {
      eqChecker += 1;
    } 
  }
  if (eqChecker === arr1.length && eqChecker === arr2.length) {
    console.log(`${arr1} is equal to ${arr2}`);
  } else {
    console.log(`${arr1} is NOT equal to ${arr2}`);
  }
};


const map = function(arr, callback) {
  const newArr = [];
  for (let word of arr) {
    newArr.push(callback(word));
  }
  return newArr;
};

const words = ["books", "games", "coffee", "plants", "sweaters"];

const results1 = map(words, word => word[0]);
const results2 = map(words, word => word[1]);
const results3 = map(words, word => word[3]);

assertArraysEqual([ 'b', 'g', 'c', 'p', 's' ], results1)
assertArraysEqual([ 'o', 'a', 'o', 'l', 'w' ], results2)
assertArraysEqual([ 'o', 'm', 'f', 'a', 'e' ], results3)


module.exports = map;