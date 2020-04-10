/*
FLATTEN
write a function called flatten which takes in a nested array -- of unknown depth -- and returns a flattened array of all the values.

Test Cases:
flatten([1, 2, 3, [4, 5] ]) // [1, 2, 3, 4, 5]
flatten([1, [2, [3, 4], [[5]]]]) // [1, 2, 3, 4, 5]
flatten([[1],[2],[3]]) // [1,2,3]
flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]) // [1,2,3]

APPROACH:
- loop through the array
- create an array to contain flattened values
- Base Case:
  - if the value isn't an array
  - it just gets added to the array
- Recursive Case:
  - if the array is an array
  - run it through the recursion
- return flattened values
*/

function flatten(nested) {
  let flat = [];
  for (const val of nested) {
    flat = Array.isArray(val) ?
      flat.concat(flatten(val)) : flat.concat(val)
  }
  return flat;
}
