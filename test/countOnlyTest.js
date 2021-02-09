const assert = require('chai').assert;
const countOnly = require('../countOnly');

describe("Testing - countOnly", () => {

  it("should only count the items given in the second argument", () => {
    const firstNames = ["Karl", "Salima", "Agouhanna", "Fang", "Kavith", "Jason", "Salima", "Fang", "Joe"];
    const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false});
    assert.strictEqual(result1["Jason"], 1);
    assert.strictEqual(result1["Karima"], undefined)
    assert.strictEqual(result1["Fang"], 2)
  });

});