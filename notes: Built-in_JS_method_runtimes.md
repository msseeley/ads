# **Built-In JS Data Structures & Methods Runtimes**

# Contents
- Understand Big O context of JS Objects & Arrays
- Compare & Contrast Runtimes for DS and built-in methods



## Big O & Objects
_Clarification technically an Array is a kind of object. Object in this context is referring to the data structure with a key-value lookup._ <br><br>
Objects are useful for storage of data where order doesn't matter and you need fast insertion and removal.
- In JS objects function as a **hashmap**

### Runtimes
- insertion &rarr; O (1)
- removal &rarr; O (1)
- search &rarr; O (n)
- access &rarr; O (1)

### Common Methods
#### _O (n) Linear_
- Object.keys(object) &rarr; returns array of all its keys
- Object.values(object) &rarr; returns array of all its values
- Object.entries(object) &rarr; returns array of all its  entries

#### _O (1) Constant_
- Object.hasOwnProperty(property) &rarr; returns a boolean response to if it has the specified property as its own property (as opposed to inheriting it)


## Big O & Arrays
_Clarification built-in arrays in Javascript are resize-able, which is not true of all arrays in programming languages. When we talk about arrays here, we're actually talking about is closer to what is often referred to as a Dynamic Array or Array List._ <br><br>
Arrays are often useful because they can store data in a specific order.

### Runtimes

- access (with valid idx number) &rarr; O (1)
- insertion & removal
  - to the end of the array &rarr; O (1)
  - to the beginning of the array &rarr; O (n)
    - all other items need to be re-indexed
- search (unsorted data) &rarr; O (n)

### Common Methods
#### _O (1) Constant_
- array.push() &rarr; adds an item to the end of array
- array.pop() &rarr; removes an item from the end of array

#### _O (n) Linear_
- array.unshift() &rarr; adds an item to the beginning of the array
- array.shift() &rarr; removes an item from the beginning of the array
- array.concat(array) &rarr; merges one or more arrays
  - can be O (n + m + ...) if multiple arrays
- array.slice(startIdx, endIdx) &rarr; returns a shallow copy of a portion of an array
- array.splice(startIdx) &rarr; changes the contents of an array by removing or replacing existing elements and/or adding new elements
- array.forEach(callback(currentElem, idx)) &rarr; executes a provided function once per array element
- array.map(callback(currentElem, idx)) &rarr; creates a new typed array with the results of calling a provided function on every element in this typed array
- array.filter(callback(currentElem, idx)) &rarr; creates a new array with all elements that pass the test implemented by the provided function
- array.reduce(callback(accumulator, currentValue)) &rarr; executes a reducer function (that you provide) on each element of the array, resulting in a single output value

#### _O(n logn) Linearithmic_
- array.sort(compareFunc) &rarr; sorts the elements of an array _in place_ and returns the sorted array.