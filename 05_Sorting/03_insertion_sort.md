# Insertion Sort
Iterates through the collection and gradually builds a sorted portion by examining the currently iterated value and insterts it in order relative to the previous values it's iterated over.

### Example

[12, 6, 3, 24, 8, 4]

12, 6 => [6, 12, 3, 24, 8, 4]
12, 3 => [3, 6, 12, 24, 8, 4]
12, 24 => [3, 6, 12, 24, 8, 4]
24, 8 => [3, 6, 8, 12, 24, 4]
24, 4 => [3, 4 6, 8, 12, 24]

### Implmentation
```
function swap(array, a, b){
  return [array[a], array[b]] = [array[b], array[a]];
}

function insertionSort(array){
  for(let i = 1; i<array.length; i++){
    const val = array[i];
    if(array[i] < array[i-1]){
      for(let k = i-1; k >= 0 && array[k] > val; k--){
        if(array[k] > val) swap(array, k+1, k);
      }
    }
  }
  return array;
}

<!-- using var which doesn't keep variable scoped inside the second loop -->

function insertionSort(array){
  for(let i = 1; i<array.length; i++){
    const val = array[i];
    if(array[i] < array[i-1]){
      for(var k = i-1; k >= 0 && array[k] > val; k--){
        array[k+1] = array[k];
      }
      array[k+1] = value;
    }
  }
  return array;
}

```
Time complexity:
  O(n^2) with completely unsorted data
  O(n) with mostly sorted data
Space complexity: O(1)

Useful in cases where you have continuous data coming in, it doesn't need all the data at once.
ie ordering a queue by priority?