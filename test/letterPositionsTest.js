const assert = require('chai').assert;
const assertArraysEqual = require('../assertArraysEqual');
const letterPositions = require('../letterPositions');

describe("Testing - letterPositions", () => {

  it("should return an array with the letter position (index) of specified character", () => {
    assert.strictEqual(assertArraysEqual(letterPositions("hello").e, [1]), true);
  });

});



assertArraysEqual(letterPositions("hello").e, [1]);