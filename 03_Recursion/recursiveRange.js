/*
RECURSIVE RANGE
Write a function that takes in a number and returns the sum of all the values between 0 and the number.

Test Cases:
recursiveRange(6) // 21
recursiveRange(10) // 55

APPROACH:
- base case is 0. Lowest possible number in the range
- recursive case is to add onto the previous number

*/

function recursiveRange(n) {
  if (n === 0) return 0;
  return n + recursiveRange(n - 1);
}
