# Quick Sort
Divides and concurs with a recursive approach to apply sorting logic. The sorting logic is based around choosing a "pivot point" and placing remaining values to the left and right of the pivot point based on sorting order. For example, all the values less than the pivot point are placed to the left of it and all the values greater than the pivot poin are placed to the right. This sorting is done in place and therefore does not necessitate creating another array.

## Example
Quick Sort can be broken into the main recursive function called "quickSort", which employs another function, called "pivot", that swaps the values in the array around a pivot point. The pivot function also employs it's own helper function called "swap" which takes care of swapping values in the array.

## Pivot
Pivot taes a pivot value as a comparison, in this case the first index value, and a swapIdx which keeps track of the index where the pivot value will eventually end up. Pivot iterates through all the values in the array (or the range of the array given). For every value that is less than the pivot point value, it increases the swap index and then swaps the values at the swap index and current iteration.
By the end of the iteration the pivot point will be followed by all the values that are lower than it, with the swap index pointing to the last value that is lower than the pivot value. The last swap that happens is that of the pivotValue and the swapindex. Thus returning an array of values with lower values to the left of the pivot value and higher values to the right of the pivot value.

p = pivotValue
s = swapIdx
i = iteration

[8, 9, 3, 5, 26]  p = 8  8 < 9 s = s
 s  i

[8, 9, 3, 5, 26]  p = 8  8 > 3 s++, swap s, i
 s     i

[8, 3, 9, 5, 26]  p = 8  8 > 5 s++, swap s, i
    s     i

[8, 3, 5, 9, 26]   p = 8 8 < 26 s = s
       s      i

last swap s and p
[5, 3, 8, 9, 26]
       p      i
       s

returns s

## quick sort example

[8, 3, 5, 9, 26]

pivot([8, 3, 5, 9, 26]) // 2 [5, 3, 8, 9, 26]

left = [5, 3, 8] [3, 5, 8]
        left = [3, 5]
              left = [3]
              right = [5]
        right = [8]
right = [9, 26]
        left = [9]
        right = [26]


## Implementation

```
function swap(array, a, b){
  return [array[a], array[b]] = [array[b], array[a]];
}

function pivot(array, start=0, end=array.length-1){
  let pivot = array[start];
  let swapIdx = start;
  for(let i = start+1; i<=end; i++){
    if(pivot > array[i]){
      swapIdx++;
      swap(array, swapIdx, i);
    }
  }
  swap(array, start, swapIdx);
  return swapIdx;
}

function quickSort(array, left = 0, right = array.length - 1){
  if(left >= right) return array;
  const pivot = pivot(array, left, right);
  quickSort(array, 0, pivot);
  quickSort(array, pivot+1, right);
}

```