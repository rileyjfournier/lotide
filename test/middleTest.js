const assertArraysEqual = require("../assertArraysEqual");
const middle = require("../middle");

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