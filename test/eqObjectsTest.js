const assert = require('chai').assert;
const eqObjects = require('../eqObjects');
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

describe("Testing - eqObjects", () => {

  it("should return true if both objects are the same", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const abc = { a: "1", b: "2", c: "3"};
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(assertEqual(eqObjects(cd, dc), true), true);
    assert.strictEqual(assertEqual(eqObjects(ab, ba), true), true);
  });

  it("should return false if the objects are NOT the same", () => {
    const ab = { a: "1", b: "2" };
    const ba = { b: "2", a: "1" };
    const abc = { a: "1", b: "2", c: "3"};
    const cd = { c: "1", d: ["2", 3] };
    const cd2 = { c: "1", d: ["2", 3, 4] };
    const dc = { d: ["2", 3], c: "1" };
    assert.strictEqual(assertEqual(eqObjects(cd, cd2), true), false);
    assert.strictEqual(assertEqual(eqObjects(ab, abc), true), false);
  })

});



// assertEqual(eqObjects(cd, dc), true);
// assertEqual(eqObjects(cd, cd2), false);
// assertEqual(eqObjects(ab, ba), true);
// assertEqual(eqObjects(ab, abc), false);