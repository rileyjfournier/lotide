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

const middle = function(arr) {
  let newArr = [];
  let middleIndex = 0;
  for (const element of arr) {
    newArr.push(element);
  }
  if (arr.length < 3) {
    console.log([]);
  } else if (arr.length >= 3 && arr.length % 2 === 0) {
    middleIndex = (newArr.length / 2) 
    console.log(newArr.slice(middleIndex - 1, middleIndex + 1))
  } else {
    middleIndex = ((newArr.length + 1) / 2)
    console.log(newArr.slice(middleIndex - 1, middleIndex))
  }
};

testArr = [];
testArr1 = [1];
testArr2 = [1, 2];
testArr3 = [1, 2, 3];
testArr4 = [1, 2, 3, 4];
testArr5 = [1, 2, 3, 4, 5];
testArr6 = [1, 2, 3, 4, 5, 6];


middle(testArr4);
assertArraysEqual(testArr4, [1, 2, 3, 4]);
console.log()

middle(testArr5);
assertArraysEqual(testArr5, [1, 2, 3, 4, 5]);
console.log()

middle(testArr6);
assertArraysEqual(testArr6, [1, 2, 3, 4, 5, 6]);