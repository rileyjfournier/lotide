const assert = require('chai').assert
const middle = require("../middle");

describe("Testing - middle", () => {

  it("should return the middle value (as an array)", () => {
    assert.isArray(middle([1,2,3,4,5]));
  });

  it("should return the middle value '3' of an array '[1,2,3,4,5]'", () => {
    assert.strictEqual(middle([1,2,3,4,5])[0], 3);
  });

  it("should return the middle two values (3,4) if array.length is an even number ([1,2,3,4,5,6])", () => {
    assert.strictEqual(middle([1,2,3,4,5,6])[0].toString() + ',' + middle([1,2,3,4,5,6])[1].toString(), '3,4')
  });

});
