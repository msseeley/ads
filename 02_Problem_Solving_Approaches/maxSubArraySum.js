/*
MAX SUB ARRAY SUM
Given an array of integers and a number 'n', write a function that finds the maximum sum of a subarray with the length of n.
The subarray must consist of consecutive integers.

Complexity MUST be O(n)/ O(1) time/space.

Test Cases
  maxSubArraySum([100, 200, 300, 400], 2) // 700
  maxSubArraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
  maxSubArraySum([-3, 4, 0, -2, 6, 1], 2) // 5
  maxSubArraySum([2,3], 3) // null

APPROACH
- possibility check whether n is larger than the given array
- iterate through the array n spaces and get an initial sum
- save intial sum to a maxSum variable
- iterate through the rest of the nums continuing from where the first iteration left off
   - calculate the working sum
      - if the array is [0,1,2,3,4,5,6,7,8] sub array length is 3
      - [0,1,2]initial array sum = 3 length
      - [0][1,2,3] second array sum = 6
      - take away the value of the array at the first index of the initial subarray
      - add the value of the array next idx 3
      - current idx - n (size of the window) calculates the idx of the previous array
      - idx 3 is the next idx - 3 (size of the array) = 0 idx value of the first element
      - [1][2,3,4] 4-3 = 1 idx value
   - compare this working sum to the maxSum which will be assinged to the maximum value between itself and the working sum
- return the maxSum
*/


function maxSubArraySum(array, n) {
  if (array.length < n) return null;
  let maxSum = -Infinity;
  for (let i = 0; i < n; i++) {
    maxSum += array[i];
  }
  let workingSum = maxSum;
  for (let i = n; i < array.length; i++) {
    workingSum = workingSum - array[i - n] + array[i];
    maxSum = Math.max(maxSum, workingSum);
  }
  return maxSum;
}
