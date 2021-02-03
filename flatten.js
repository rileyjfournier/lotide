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

const flatten = function(arr) {
  let newArr = [];
  for (const element of arr) {
    if (Array.isArray(element)) {
      for (const val of element) {
        newArr.push(val);
      }
    } else {
      newArr.push(element);
    }
  }
  console.log(newArr);
};

let coolArr = [1, 2, 3, [4, 5], [6]];
flatten([1, 2, [3, 4], 5, [6]]);
flatten([23, 10, [1, 2], 4, 1, [3, 5]])
flatten(coolArr);
console.log(coolArr);