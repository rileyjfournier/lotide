const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');

describe("Testing - assertArraysEqual", () => {

  it("returns true if 'arr1' is equal to 'arr2'", () => {
    assert.strictEqual(assertArraysEqual([1,2,3], [1,2,3]), true);
    assert.strictEqual(assertArraysEqual(['one',2,"three"], ['one',2,"three"]), true);
  });

  it("returns false if 'arr1' is NOT equal to 'arr2'", () => {
    assert.strictEqual(assertArraysEqual([1,2,3], [1,2,"3"]), false);
    assert.strictEqual(assertArraysEqual([1,2,3], [0,2,3]), false);
  });

});