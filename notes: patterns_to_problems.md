# **Paterns to Problem Solving**
Looking at _some_ common patterns in solutions or approaches to problem solving.

## Contents
- Frequency Counter
- Multiple Pointers
- Sliding Window
- Divide and Conqueor
- Dynamic Programming
- Greedy Algorithms
- Backtracking

## **Frequency Counters**
Using an object to count and store the frequencies a multiple pieces of data.
- Often O (n)
- Avoids using nested loops (O(n^2)) with arrays and strings

### Example
- Prompt<br>
_Write a function called "same," which accepts two arrays. The function should return true if every value in the first array has its corresponding value squared in the second array. The frequency of values must be the same, but the order of the values in each array does not matter._<br>

- Test Cases
   ```
   same([1,2,3],[4,1,9]) // true
   same([1,2,3],[1,9]) // false
   same([1,2,1],[4,4,1]) //false must be the same frequency
   ```

```
function same(array1, array2){
  //rule out unequal arrays
  if(array1.length !== array2.length) return false;

  //create object for storing frequencies
  freq = {};

  //go through the first array and store frequencies
  for(const val of array1){
    const square = val^2;
    freq[square] ? freq[square]++ : freq[square] = 1;
  }

  //go through the second array
  for(const sqr of array2){
    //rule out values that aren't in freq
    //remember
    if(!freq[sqr]) return false;
    else freq[sqr]--;
  }
  return true;
}
```

## **Multiple Pointers**
Using pointers to create multiple points of references in a linear structure like a linked list, array, string.

### Example
### Left and Right Pointers
- Prompt<br>
_Write a function called "sumZero," which accepts a sorted array of integers. The function should find the first pair where the sum is 0. Return an array that includes either both values that sum to zero or undefined if there are no pairs._


- Test Cases
```
sumZero([-3,-2,-1, 0, 1,2,3]) // [-3,3]
sumZero([-2, 0,1,3]) // undefined
sumZero([1,2,3]) //undefined
```

```
function sumZero(array){
  let idxA = 0;
  let idxB = array.length-1;
  while(idxA < idxB){
    const a = array[idxA];
    const b = array[idxB];
    const sum = a + b;
    if(sum === 0) return [a,b]
    if((a > 0 && b > 0) || (a < 0 && b < 0) ) break;
    if( sum > 0 ) idxA++;
    else idxB--;
  }
}

```

### Pointers next to each other
- Prompt<br>
_Implement a function called "countUniqueValues," which accepts a sorted array and counts the unique values in the array. There can be negative numbers in the array._

- Test Cases
```
countUniqueValues([1,1,1,1,1,1,2]) // 2
countUniqueValues([1,2,3,4,5,5,5,12,13]) // 7
countUniqueValues([]) // 0
countUniqueValues([-2,-1,-1,0,1]) // 4
```

```
function countUniqueValues(array){
  let count = 1;
  for(let i = 1; i < array.length; i++){
    const ahead = array[i]
    const behind = array[i-1]
    if(behind !== ahead)count++;
  }
  return count
}
```

## **Sliding Window**
Taking a view of an array or string which changes but doesn't re-iterate with the conditions of the problem.
 - useful for keeping track of a subset of data

### Example
###  Max Subarray Sum
- Prompt<br>
_Implement a function which accepts an array of integers and a number called **n**. The function should calculate the subset, with the size of n integers, that sum to the largest posible amount. The subset should be of consecutive numbers present in the array._

- Test Cases:
```
maxSubArray([1,2,5,2,8,1,5], 2)  // 10 (2 + 8)
maxSubArray([1,2,5,2,8,1,5],4) // 17 (2 + 5 + 2 + 8)
maxSubArray([4,2,1,6], 1) // 6 (6)
maxSubArray([4,2,1,6,2], 4) // 13
maxSubArray([]) // null
```
```
function maxSubArray(array, n){
  if(array.length < n) return null;
  let maxSum = 0;
  for(let i = 0; i < n; i++){
    maxSum += array[i];
  }

  let tempSum = maxSum;
  for(let j = n; j < array.length; j++){
    // subtract the first idx of the old sub array sum, add the next value for the new subarray sum
    tempSum = tempSum - array[j-num] + array[j];

    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

```