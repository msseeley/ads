/*
ARE THERE DUPLICATES
Implement a function called areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates amongst the arguments that are passed in.

Function MUST be one of two RunTime/SpaceTimes:
1. space O (n) time O(n)
2. space O (1) time O(n logn)

Test Cases:
  areThereDuplicates(1, 2, 3) // false
  areThereDuplicates(1, 1, 4, 5) // true
  areThereDuplicates('a', 'b', 'c') // false

APPROACH:
Space: O(n) Time: O(n)
  - create a set to store arguments
  - compare set size to arguments length
    - if they are not equal, then it's TRUE they have duplicates
    - if they are equal,, then it's FALSE that they have duplicates
*/

function areThereDuplicates(...args) {
  return Set(args).size !== args.length;
}
