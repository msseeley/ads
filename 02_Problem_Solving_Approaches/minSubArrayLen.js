/*
MINIMUM SUBARRAY LENGTH
Write a function called minSubArrayLen, which accepts two parameters - an array of positive integers and a number 'n'. This function should return the length of the smallest length of consecutive subarray with a sum greater than or equal to n. If there isn't one return 0 instead.

Complexity MUST be O(n)/O(1) Time/Space.


Test Cases:
  minSubArrayLen([2, 3, 1, 2, 4, 3], 4) // 1
  minSubArrayLen([2, 1, 6, 5, 4], 9) //2
  minSubArrayLen([1, 2, 3], 35) //0

APPROACH:
 - creating a window with pointers
 - create pointers for left and right of the current subArray
 - variables for workingSum (starts at first value array) and minLen(initially infinity)
 - iterate through with pointers
    - pointers move forward under different conditions
      - left++ when the workingSum is >= n, which means sub array maybe able to shrink
      - right++ when the workingSum is < n, which means the sub array needs to expand
    - if the workingSum >= n the length of the current sub array should be calculated
      - start - end + 1 (0 indexed)
  - if the minLen === Infinity we've never found a sum that meets the criteria and return 0
  - else return the minLen
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
