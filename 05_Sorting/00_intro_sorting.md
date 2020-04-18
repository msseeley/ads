# INTRODUCTION TO SORTING

## Contents
- What is sorting?
- Built in JS Array.prototype.sort()
- Elementary Sorting Algorithms
- Bubble Sort
- Selection Sort
- Insertion Sort


# What is Sorting?
A way of rearranging a collection of data. There are various well-known methods of sorting. These methods have generally understood run-times, but efficiency will largely depend on the data set. <br>
Neat Visualization: https://www.toptal.com/developers/sorting-algorithms

# JavaScript Array.prototype.sort
A sorting method built into JS that takes an array and sorts its values in place (it does not create a copy of the array). The method can take a comparator function to determine sorting order. It will default to sorting values in ascending order by their unicode value.
The comparator function takes two parameters (a, b), where a represents the first number value and b repesents ths second number value (in terms of intital order of values in the array)<br>

Sorting number values based on value returned by comparator function:<br>
- negative number  a is before b in placement
- positive number a is after b in placement
- 0 a and b are seen as equivalent

### Examples
```
[5, 7, 3, 5, 9].sort((a, b) => a - b) // [3, 5, 5, 7, 9]

[5, 7, 3, 5, 9].sort((a, b) => b - a) // [9, 7, 5, 5, 3]

```

Docs: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort


# Bubble Sort
Iterates through an array comparing two values at a time, and swapping those values based on order specified. It will continually iterate through the array until there are no swaps to be made.
The term "bubble" refers the the effect where numbers that are supposed to be at the end of the array will 'bubble up' to the top.

### Example
Sorting in ascending order smallest to greatest.<br>

```
[5, 7, 3, 5, 9]
Iteration 1
 1st) 5 <= 7  no swap [5, 7, 3, 5, 9]
 2nd) 7 <= 3  swap    [5, 3, 7, 5, 9]
 3rd) 7 <= 5  swap    [5, 3, 5, 7, 9]
 4th) 7 <= 9  no swap [5, 3, 5, 7, 9]

If(there has been a swap) iterate again...

[5, 3, 5, 7, 9]
Iteration 2
  1st) 5 <= 3  swap    [3, 5, 5, 7, 9]
  2nd) 5 <= 5  no swap [3, 5, 5, 7, 9]
  3rd) 5 <= 7  no swap [3, 5, 5, 7, 9]
  4th) 7 <= 9  no swap [3, 5, 5, 7, 9]

If(there has been a swap) iterate again....

[3, 5, 5, 7, 9]
Iteration 3
  1st) 3 <= 5  no swap [3, 5, 5, 7, 9]
  2nd) 5 <= 5  no swap [3, 5, 5, 7, 9]
  3rd) 5 <= 7  no swap [3, 5, 5, 7, 9]
  4th) 7 <= 9  no swap [3, 5, 5, 7, 9]
```

### Implementation

```
function bubbleSort(array){
  let swapped = true;
  let sortLength = array.length;
  while(swapped){
    swapped = false;
    for(let i = 1; i < sortLength; i++){
      if(array[i] < array[i-1]){
        swap(array, i, i-1)
        swapped = true;
      }
    }
    sortLength--;
  }
  return array
}

function swap(array, idxA, idxB){
  [array[idxA], array[idxB]] = [array[idxB], array[idxA]]
}

```

Time Complexity: O (n^2)
However, if the data is nearly sorted O(n)
