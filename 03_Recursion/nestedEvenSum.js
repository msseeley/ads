/*
NESTED EVEN SUM
Write a function called nestedEvenSum that takes in an object and sums all the even numbers in the object and any nested objects.

Test Cases:
var obj1 = {
  outer: 2,
  obj: {
    inner: 2,
    otherObj: {
      superInner: 2,
      notANumber: true,
      alsoNotANumber: "yup"
    }
  }
}

var obj2 = {
  a: 2,
  b: {b: 2, bb: {b: 3, bb: {b: 2}}},
  c: {c: {c: 2}, cc: 'ball', ccc: 5},
  d: 1,
  e: {e: {e: 2}, ee: 'car'}
};

nestedEvenSum(obj1); // 6
nestedEvenSum(obj2); // 10


APPROACH:
- variable to hold the sum
- loop through the obj
- check values of object
    - holds even number => add to the sum
    - is an object => recurse
- return the sum
*/


function nestedEvenSum(obj) {
  let sum = 0;
  for (let key in obj) {
    const val = obj[key]
    if (typeof val === 'number' && val % 2 === 0) sum += val
    if (typeof val === 'object') sum += nestedEvenSum(val)
  }
  return sum;
}
