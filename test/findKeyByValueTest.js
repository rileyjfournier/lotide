const assert = require('chai').assert;
const assertEqual = require('../assertEqual');
const findKeyByValue = require('../findKeyByValue');

describe("Testing - findKeyByValue", () => {

  it("should return the key of given value", () => {
    const bestTVShowsByGenre = {
      sci_fi: "The Expanse",
      comedy: "Brooklyn Nine-Nine",
      drama: "The Wire"
    };
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  })

});