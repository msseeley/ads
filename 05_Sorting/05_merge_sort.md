# Merge Sort
Splits an array into smaller and smaller elements until it is a single element. Orders the element and merges them back together in order--recursion here can be useful.

### Example
Merge sort can be broken up into two functions. A function that handles the merging to two arrays and a function that handles the recursive aspect of building up an entirely merged array.

## Example Merging Two Sorted Arrays together
```
merged []

[1, 3, 6]  [4, 5, 8, 9, 10,11]    1 < 4  merged = [1], a++
 ^          ^
 a          b

[1, 3, 6]  [4, 5, 8, 9, 10,11]    3 < 4  merged = [1, 3], a++
    ^       ^
    a       b

[1, 3, 6]  [4, 5, 8, 9, 10, 11]    6 > 4  merged = [1, 3, 4], b++
       ^    ^
       a    b

[1, 3, 6]  [4, 5, 8, 9, 10, 11]    6 > 5  merged = [1, 3, 4, 5], b++
       ^       ^
       a       b
[1, 3, 6]  [4, 5, 8, 9, 10, 11]    6 < 8  merged = [1, 3, 4, 5, 6], a++
       ^          ^
       a          b

[1, 3, 6]  [4, 5, 8, 9, 10, 11]   8  merged = [1, 3, 4, 5, 6, 8], b++
         ^        ^
         a        b

[1, 3, 6]  [4, 5, 8, 9, 10, 11]   9  merged = [1, 3, 4, 5, 6, 8, 9], b++
         ^           ^
         a           b

[1, 3, 6]  [4, 5, 8, 9, 10, 11]   10  merged = [1, 3, 4, 5, 6, 8, 9 ,10], b++
         ^               ^
         a               b

[1, 3, 6]  [4, 5, 8, 9, 10, 11]   11  merged = [1, 3, 4, 5, 6, 8, 9, 10, 11], b++
         ^                  ^
         a                  b

merged = [1, 3, 4, 5, 6, 8, 9, 10, 11]
```
### Implementation Merging Two Sorted Arrays
```
function merge(a, b){
  const merged = [];
  let idxC = 0;
  let idxD = 0;
  const longest = a.length >= b.length ? a : b;
  const shortest = a.length >= b.length ? b : a;
  while(idxC < longest.length){
    if(idxD >= shortest.length){
      merged.push(longest[idxC]);
      idxC++;
    }
    else{
      const valC = longest[idxC];
      const valD = shortest[idxD];
      if(valC <= valD){
        merged.push(valC);
        idxC++;
      }
      else{
        merged.push(valD);
        idxD++;
      }
    }
  }
  return merged;
}
```

### Example Recursive Call Merge Sort
```
[12, 3, 10, 14, 9, 5, 1]

        mergeSort([12, 3, 10, 14, 9, 5, 1])
                |                     |
    mergeSort([12, 3, 10])           mergeSort([ 14, 9, 5, 1])
        |            |                     |                |
mergeSort([12])  mergeSort([3,10])   mergeSort([14, 9])  mergeSort([5,1])
                 |         |             |        |            |     |
                 |     mergeSort([10])   |   mergeSort([9])    | mergeSort([1])
             mergeSort([3])          mergeSort([14])       mergeSort([5])

left => [12]
     => [12] , [3] [10]
     => [12], [3, 10]
     => [3, 10, 12]

right => [14] [9] , [5] [1]
      => [9, 14], [1, 5]
      => [1, 5, 9, 14]

[3, 10, 12] , [1, 5, 9, 14]

[1, 5, 9, 10, 12, 14]
```

### Implementation Recursive Call Merge Sort
```
function mergeSort(array){
  if(array.length <= 1) return array;
  const mid = Math.floor(array.length/2);
  let left = mergeSort(array.slice(0,mid));
  let right = mergeSort(array.slice(mid));
  return merge(left, right)
}

```

Time Complexity: O (n log n)
 - decompositions log n
 - comparisons n
Space Complexity: O (n)