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
This search returns the index value of the target if it's present, or -1 if it is not present.
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