/*
SOME RECURSIVE
Write a function called sumRecursive that takes in an array and a callback function. If the callback returns true on any of the values in the array, the function should return true. If none of the values input into the callback return true, the function should return false.

Test Cases:
const isOdd = val => val%2!== 0;
const greaterThanTen = val => val>10;

someRecursive([1,2,2,2,], isOdd) // true
someRecursive([4,2,10,14,], isOdd) // false
someRecursive([10, 9, 12, 7], greaterThanTen) // true

APPROACH:
- Base Case:
  - we've gone through the entire array
  - return false
  - if a value had returned true this would have happened prior

- Recursive Case:
  - we want to keep going if callback(currentVal) returns false
- 2nd base case?
  - otherwise we want to return true
*/

function someRecursive(array, cb) {
  if (array.length === 0) return false;
  if (!cb(array.pop())) return someRecursive(array, cb);
  return true;
}
