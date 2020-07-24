//The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

class HashTable {
  constructor(size) {
    this.keyMap = new Array(size);
  }

  hash(key) {
    let total = 0;
    const prime = 31; //prime numbers decrease collisions
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      const value = key[i].charCodeAt(0) - 96;
      total = (total * prime + value) % this.keyMap.length;
    }
    return total;
  }

  set(key) {
    const location = this.hash(key);
  }

}

module.exports = { HashTable };
