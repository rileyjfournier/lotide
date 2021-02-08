// function to check if arrays are equal and logging the evaluation
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

//function checking whether they are equal (true) or not (false)
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

// function that removes stated items (itemsToRemove) from the source
// and returns a new array (updated source)
const without = function(source, itemsToRemove) {
  let eqChecker = [];
  for (const element of source) {
    eqChecker.push(element);
  }
  for (let i = 0; i < eqChecker.length; i++) {
    for (let j = 0; j < itemsToRemove.length; j++) {
      if (itemsToRemove[j] === eqChecker[i]) {
        eqChecker.splice(i, 1);
      }
    }
  }
  console.log(eqChecker);
};

without([1, 2, 3], [1]);
without(["1", "2", "3"], [1, 2, "3"]);

console.log();

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);

console.log();

assertArraysEqual(words, ["hello", "world", "lighthouse"]);

module.exports = without;