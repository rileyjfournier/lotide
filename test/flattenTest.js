const assert = require('chai').assert;
const flatten = require('../flatten');

describe("Testing = flatten", () => {

  it("should flatten all nested elements into one array, x of elements === array.length", () => {
    assert.strictEqual(flatten([1, 2, [3, 4], 5, [6]]).length, 6);
  });

});