/*
FREQUENCY COUNTER
Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
The function MUST have an Time Complexity of O (n).

Test Cases:
sameFrequency(182, 281) // true
sameFrequency(34, 14) //true
sameFrequency(3589578, 5879385) // true
sameFrequency(22,222)// false
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
