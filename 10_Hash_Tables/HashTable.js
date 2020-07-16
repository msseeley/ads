//The charCodeAt() method returns an integer between 0 and 65535 representing the UTF-16 code unit at the given index.

const hashFunction = (key, length) => {
  let total = 0;
  const prime = 31; //prime numbers decrease collisions
  for (let i = 0; i < Math.min(key.length, 100); i++) {
    const char = key[i];
    const value = char.charCodeAt(0) - 96;
    total += (total * prime + value) % length;
  }
  return total;
}

class HashTable {

}

module.exports = { HashTable, hashFunction };
