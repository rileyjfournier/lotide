const assertArraysEqual = require("../assertArraysEqual");

assertArraysEqual([1,2,3], [1,2,3]);
assertArraysEqual([1,2,3], [1,2,"3"]);
assertArraysEqual([1,2,3], [0,2,3]);
assertArraysEqual([1,2,3], [1,2,3,4]);
assertArraysEqual(['one',2,"three"], ['one',2,"three"]);