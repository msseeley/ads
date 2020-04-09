# **INTRO TO BIG O**

## Contents
  1. What does Big O allow us to do?
  2. What is Big O?
  3. How can we simplify Big O expressions?
  4. What is **Time Complexity** and **Space Complexity**
  5. How can we evaluate the **Time** and **Space** complexity of algorithms?
***
# 1. What does Big O allow us to do?
- _Provides a vocabulary to talk about code performance_:<br>
  numeric representation of the efficiency in terms of time and space of a particular algorithm.

- _Is a metric to consider some trade-offs_: <br>
  mainly around performance, as opposed to other metrics such as maintainability

- _Can be a diagnostic tool for debugging code_:<br>
  understanding runtime, crashes, painpoints

- _Understanding of this is used as a proxy for overall coding ability and proficieny in job interviews_:<br>
  accompanied by code challenges focused on algorithms and data structures

# 2. What is Big O?
A way of approximating the behavior of the runtime (time complexity) or memory useage (space complexity) of an algorithm relative to it's input.<br>

_It always measures the worst case scenario._<br>

**time complexity** is the estimated time it takes for an algorithm to run
**space complexity** (aka auxilliary space complexity) is the estimated space an algorithm uses while running

## Why are these estimations as opposed to exact measurements?
While it's possible to calculate run-time and space used, these measurements vary even on the same machine, and certainly will vary across different machines and software. Runtimes can also differ across the size and structure of data, so different test cases will have different run-times making it difficult to assess the relative efficacy of different approaches.

## Counting operations
Instead of timing code in seconds, we count the number of operations the computer has to perform.

### Example
```
OBJECTIVE: return a number that is the sum of all the integer values from 1 to the value of n

inputs and outputs:
1 = 1 (1)
2 = 3 (1+2)
3 = 6 (1+2+3)


//Func A
function addUpToVersionA(n){
  let sum = 0;
  for(let i=1; i<=n; i++){
    sum += i;
  }
}

//Func B
function addUpToVersionB(n){
  return n*(n+1)/2;
}


```
Both of these function return a number that is the sum 1 to the value of n. But the number of operations is different. <br>

_Func A performs a += operation in a loop, which means every single time it loops it performs and operation. So the number of operations grows the bigger n is. It's a linear time performance_

_Func B performs 3 operations – multiplication, addition, and division. It's generally a constant time performance_

In terms of efficiency, Func B has a shorter run time.

## Big O notations (fastest to slowest):
- O(1) &rarr; constant growth
- O(n) &rarr; linear growth
- O(n^2) &rarr; quadratic growth
- O (n log n) &rarr; linearithmic growth<br>
- O(log n) &rarr; logarithmic growth<br>
- O (c^n) &rarr; exponential growth
- O(n!) &rarr; factorial growth

... more notations to come

# 3. Simplifying Big O notation

## Prioritizing the highest order value

- _drop co-efficients_<br>
O (3n) &rarr; O(n) <br>
O (n+10) &rarr; O(n)

- _drop smaller terms_<br>
O (n^2 + 3n) &rarr; O (n^2)<br>

## Big O short cuts
### Time Space Complexity
- _Constant time operations_
  - addition, subtraction, multiplication, modulo
  - variable assignment
  - accessing elements in array by index
  - accessing elements in an object by key<br>
- _Loops_
  - complexity is length of loop x complexity of code executed in the loop
### Space Time Complexity
- _Constant space_
  - Primitives (booleans, numbers, undefined, null)
- _O(n) space_
  - strings, arrays where n is the length
  - objects where n is the number of keys

Note to self, blog article to read:

https://adrianmejia.com/most-popular-algorithms-time-complexity-every-programmer-should-know-free-online-tutorial-course/