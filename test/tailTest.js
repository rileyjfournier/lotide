const assert = require('chai').assert
const tail = require('../tail');

describe("Testing - tail", () => {

  it("should return the tail of an array", () => {
    let words = ["Hello", "Lighthouse", "Labs"];
    assert.strictEqual(tail(words)[0] + ', ' + tail(words)[1], "Lighthouse, Labs");
  });
  
  it("returned value should be an array", () => {
    let words = ["Hello", "Lighthouse", "Labs"];
    assert.isArray(tail(words));
  });

});