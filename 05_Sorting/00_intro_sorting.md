# INTRODUCTION TO SORTING

## Contents
- What is sorting?
- Built in JS Array.prototype.sort()
- Elementary Sorting Algorithms(see other files)
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

