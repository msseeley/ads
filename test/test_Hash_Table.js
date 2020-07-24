const { expect } = require('chai');
const { HashTable } = require('../10_Hash_Tables/HashTable');

describe("hash function", () => {
  it("returns a number that is less than the length of the overall HashTable", () => {
    const hT = new HashTable(10);
    const key = 'pink';
    const hashedValue = hT.hash(key);
    expect(typeof hashedValue).to.equal('number');
    expect(hashedValue).to.be.lessThan(hT.keyMap.length);
  });
  it("returns consistent outputs for inputs", () => {
    const hashTable = new HashTable(10);
    const key = "key";
    const arrayLength = 10
    const output = hashTable.hash(key, arrayLength);
    expect(output).to.equal(hashTable.hash(key, arrayLength));
    expect(output).to.not.equal(undefined);
    //other possible tests would be for speed and collisions
  });
  it("does not create duplicate outputs with different inputs", () => {
    const hashTable = new HashTable(10);
    const key1 = "key";
    const key2 = "key two";
    const arrayLength = 10;
    expect(hashTable.hash(key1, arrayLength)).to.not.equal(hashTable.hash(key2, arrayLength))
  })
});
describe.only("set & get methods", () => {
  it("sets and gets the key based on the hashed value", () => {
    const hT = new HashTable(10);
    hT.set('blue', 'azure');
    expect(hT.get('blue')).to.equal('azure');
    hT.set('yellow', 'canary');
    expect(hT.get('yellow')).to.equal('canary');
    hT.set('green', 'emerald');
    expect(hT.get('green')).to.equal('emerald');
  });
  it("accommodates collisions with separate chaining", () => {
    const hT = new HashTable(10);
    hT.set('blue', 'azure');
    hT.set('pink', 'salmon');
    expect(hT.get('blue')).to.equal('azure');
    expect(hT.get('pink')).to.equal('salmon');
  });
  it("get method returns undefined if the key does not exist", () => {
    const hT = new HashTable(10);
    expect(hT.get('orange')).to.equal(undefined);
  })
});
