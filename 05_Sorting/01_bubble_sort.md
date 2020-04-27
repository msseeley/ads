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

Space Complexity: O (1)