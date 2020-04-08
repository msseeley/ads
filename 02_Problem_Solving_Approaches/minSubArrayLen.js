/*
MINIMUM SUBARRAY LENGTH
Write a function called minSubArrayLen, which accepts two parameters - an array of positive integers and a number 'n'. This function should return the length of the smallest length of consecutive subarray with a sum greater than or equal to n. If there isn't one return 0 instead.

Complexity MUST be O(n)/O(1) Time/Space.


Test Cases:
  minSubArrayLen([2, 3, 1, 2, 4, 3], 4) // 1
  minSubArrayLen([2, 1, 6, 5, 4], 9) //2
  minSubArrayLen([1, 2, 3], 35) //0

APPROACH:
 - set working sum to the first value
 - set minLength to Infinity
 - pointers left and right starting at the beginning of the array
 - difference (size of the array) right - left +1
 -
*/

function minSubArrayLen(array, n) {
  let left = 0;
  let workingSum = array[left];
  let right = left + 1;
  let minLen = Infinity;
  while (right < array.length && left < right) {
    if (minLen === 1) return 1;
    if (workingSum >= n) {
      minLen = Math.min(minLen, (right - left + 1))
      workingSum -= array[left];
      left++;
    } else {
      right++;
      workingSum += array[right];
    }
  }
  return minLen === Infinity ? 0 : minLen;
}
