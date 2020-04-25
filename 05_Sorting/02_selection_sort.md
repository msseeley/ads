# Selection Sort
Iterates through and compares pairs of values trying to find the lowest value. Once it has finished iterating, swap the lowest value with the value at the starting index and then repeat this process through the entire array moving the starting index down.

### Example

iteration 1:
  starting minimum is @ idx: 0
  swap with idx: 4
  [*12, 8, 3, 27, 1, 9]

iteration 2:
  starting minimum is @ idx 1
  swap with idx: 2
  [1, *8, 3, 27, 12, 9]

iteration 3:
  starting minimum is @ idx 2
  no swap
  [1, 3, *8, 27, 12, 9]

iteration 4:
  swap with idx: 5
  [1, 3, 8, *27, 12, 9]

iteration 5:
  starting minimum is @ idx 3
  no swap
  [1, 3, 8, 9, *12, 27]

iteration 6
  starting minimum is @ idx 4
  no swap
  [1, 3, 8, 9, 12, *27]

### Implementation
```
function swap(array, idxA, idxB){
  const temp = array[idxA];
  array[idxA] = array[idxB];
  array[idxB] = temp;
}

function selectionSort(array){
  for(let i = 0; i < array.length; i++){
    let minIdx = i
    console.log(minIdx)
    for(let j = i + 1; j < array.length; j++){
      minIdx = array[minIdx] > array[j] ? j: minIdx;
    }
    if(minIdx !== i){
      swap(array, minIdx, i)
    }
  }
  return array
}

```
