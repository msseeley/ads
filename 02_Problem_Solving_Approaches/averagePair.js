/*
AVERAGE PAIR
Write a function called averagePair. Given a sorted array of integers and a target average, determine if there is a pair in the array whose average is equal to the target average. There may be more than one pair in the target.

Function MUST be O (n)/O(1) time/space

Test Cases:
averagePair([1, 2, 3], 2.5) // true
averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8) //true
averagePair([-1, 0, 3, 4, 4, 5, 6], 4.1) // false
averagePair([], 2) // false

APPROACH
- establish pointers at the start and end of the array
- take the avg of the values at the indices of the pointers
- based on the average
  - return true if average is equal to the target average
  - move start pointer to the right if the average is less than the target average
  - move end pointer to the left if the average is greater than the target average
*/

function averagePair(array, target) {
  let start = 0;
  let end = array.length - 1;
  while (start < end) {
    const avg = (array[start] + array[end]) / 2;
    if (avg === target) return true;
    if (avg > target) start++;
    else end--;
  }
  return false;
}

