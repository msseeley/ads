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

  set(key, value) {
    const location = this.hash(key);
    const data = [key, value];
    if (this.keyMap[location] === undefined) {
      this.keyMap[location] = [];
    }
    if (this.get(key)) {
      const bucket = this.keyMap[location]
      for (let i = 0; i < bucket.length; i++) {
        const k = bucket[i][0];
        if (k === key) bucket[i][1] = value;
      }
    } else {
      this.keyMap[location].push(data);
    }
  }

  get(searchKey) {
    const location = this.hash(searchKey);
    const bucket = this.keyMap[location]
    if (bucket === undefined) return;
    for (const [key, val] of bucket) {
      if (key === searchKey) {
        return val;
      }
    }
  }
}

module.exports = { HashTable };
