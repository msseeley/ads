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

- Test Cases<br>
   ```
   same([1,2,3],[4,1,9]) // true
   same([1,2,3],[1,9]) // false
   same([1,2,1],[4,4,1]) //false must be the same frequency
   ```

```
function same(array1, array2){
  if(array1.length !== array2.length) return false;
  freq = {};

  for(const val of array1){
    const square = val^2;
    freq[square] ? freq[square]++ : freq[square] = 1;
  }

  for(const sqr of array2){
    if(!freq[sqr]) return false;
    else freq[sqr]--;
  }
  return true;
}
```


