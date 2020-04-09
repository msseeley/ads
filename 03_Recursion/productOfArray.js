/*
PRODUCT OF ARRAY
Write a function called product of array, which takes in an array of number the product of them all

Test cases:
productOfArray([1,2,3]) // 6
productOfArray([1,2,3,10]) // 60

APPROACH:
- Base case is when the array is empty.
    - return 1 because multiplying product later  0 will result in 0;
- Recursive case multiplying the first value in the current array times whatever the recursive case produces.
*/


function productOfArray(array) {
  if (array.length === 0) return 1;
  return array[0] * productOfArray(array.slice(1));
}
