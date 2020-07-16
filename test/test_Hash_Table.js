const { expect } = require('chai');
const { HashTable, hashFunction } = require('../10_Hash_Tables/HashTable');

describe.only("hash function", () => {
  it("returns consistent outputs for inputs", () => {
    const key = "key";
    const arrayLength = 10
    const output = hashFunction(key, arrayLength);
    expect(output).to.equal(hashFunction(key, arrayLength));
    expect(output).to.not.equal(undefined);
    //other possible tests would be for speed and collisions
  });
});
