const assert = require('chai').assert;
const eqArrays = require('../eqArrays');

describe("Testing - eqArrays", () => {

  it("should return true if arr1 === arr2", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
    assert.strictEqual(eqArrays(['1', '2', '3'], ['1', '2', '3']), true);
  });
  
  it("should return false if arr1 !== arr2", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, '2', 3]), false);
  });

});