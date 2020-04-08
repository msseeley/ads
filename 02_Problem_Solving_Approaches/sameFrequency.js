/*
FREQUENCY COUNTER
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

The function MUST have an Time Complexity of O (n).

Test Cases:
sameFrequency(182, 281) // true
sameFrequency(34, 14) //true
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222)// false

APPROACH:
 - translating the numbers into something iterable -> string
 - small optimization if the two strings aren't equal they can't have same frequency of digits
 - create variable to store frequencies
 - go through one string and store frequencies
 - go through the other string and decrement from frequencies
    - if value isn't in frequencies the strings or the value is 0 (falsey) return false
      - the strings don't have the same num of frequencies
    - if the valuse is in frequencies decrement it
 - if going through the second string doesn't return a false, strings must have same frequencies
 - return true
*/

function sameFrequency(numA, numB) {
  const strA = numA.toString();
  const strB = numB.toString();
  if (strA.length !== strB.length) return false;
  const freq = {};
  for (const val of strA) {
    freq[val] = (freq[val] || 0) + 1;
  }
  for (const val of strB) {
    if (!freq[val]) return false;
    freq[val]--;
  }
  return true
}
