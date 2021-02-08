const assert = require('chai').assert;
const assertEqual = require('../assertEqual');

describe("Testing - assertEqual", () => {

  it('should return true if actual === expected', () => {
    assert.strictEqual(assertEqual(1, 1), true);
    assert.strictEqual(assertEqual('riley', 'riley'), true);
  });

  it('should return false if actual !== expected', () => {
    assert.strictEqual(assertEqual("Lighthouse Labs", "Bootcamp"), false);
    assert.strictEqual(assertEqual(1, 3), false);
  });

});
