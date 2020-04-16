# INTRO TO SEARCHING
##contents
- what is a search algorithm?
- linear search on arrays
- binary search on sorted arrays
- naive string search
- KMP string search


# Linear Search
Iteraterates through each element in the collection of data. At each iteration the search algorithm checks to see if the value matches the search criteria.

## JS methods that employ Linear Search:
- indexOf()
- includes()
- find()
- findIndex()

## Implmentation
This search returns the index value of the target if it's present, or -1 if it is not present. It will return the first instance of target if multiple instances exist. This is essentially the workings of .indexOf() method.

```
function linearSearch(arr, target){
  for(let i = 0; i < arr.length; i++){
    if(arr[i] === target) return i
  }
  return -1
}
```
Time efficiency: O (n)
Space efficiency: O (1)

# Binary Search
Takes in a sorted, collection of values with indexes. It finds the midpoint index and compares the midpoint value to the search target. Based on the relationship and the sorting scheme of the collection it moves to left or right section of the array. It then repeats it's midpoint approach, only within the confines of the section it has moved to.

## Implementation
```
function binarySearch(arr, target){
  let l = 0;
  let r = arr.length-1;
  while(l <= r){
      const m = Math.floor((l+r)/2);
      const mid = arr[m];
      if(mid > target) r = m - 1;
      else if(mid < target ) l = m + 1;
      else return m;
  }
  return -1;
}
```

Time Efficiency: O (log n)
Space Efficiency: O (1)

