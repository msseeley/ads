const { expect } = require('chai');
const { HashTable } = require('../10_Hash_Tables/HashTable');

describe.only("hash function", () => {
  it("returns consistent outputs for inputs", () => {
    const hashTable = new HashTable();
    const key = "key";
    const arrayLength = 10
    const output = hashTable.hash(key, arrayLength);
    expect(output).to.equal(hashTable.hash(key, arrayLength));
    expect(output).to.not.equal(undefined);
    //other possible tests would be for speed and collisions
  });
  it("does not create duplicate outputs with different inputs", () => {
    const hashTable = new HashTable();
    const key1 = "key";
    const key2 = "key two";
    const arrayLength = 10;
    expect(hashTable.hash(key1, arrayLength)).to.not.equal(hashTable.hash(key2, arrayLength))
  })
});
