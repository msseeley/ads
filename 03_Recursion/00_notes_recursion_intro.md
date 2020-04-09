# **INTRO TO RECURSION**

## Contents
- definition
- the call stack
- structure of a recursive function
- examples
- writing recursion iteratively
- common issues
- recusion with in helper functions
- pure recursion

# Definition
A process, in this case a function, that calls itself.

# The Call Stack
A mechanism for an interpreter (like the JavaScript interpreter in a web browser) to keep track of its place in a script that calls multiple functions — what function is currently being run and what functions are called from within that function, etc.
 - actually a stack data structure

## Function Processing
 - functions are added to the stack top of the stack when they're invoked
 - functions are processed like a stack of pancakes, from the top of the stack down
    - _the last function to be added, is the first function to be processed._
 - functions are removed when they _return a value_

# Recursion and The Call Stack
Recursive functions call themselves and therefore keep adding to the call stack.
- Because a recursive function calls itself, it won't resolve or return a value in the call stack until it's inner call has resolved.
  - recursive functions need to have a stop condition (aka a base case) otherwise each call will infinitely propogate another call and eventually overwhelm the call stack.
  - the last call from the recursive function, that fulfills it's base case, is the first call to resolve and return.
      - this will cause the next to last recursive function on the stack to resolve and so forth

# Structure of a Recursive Function
Recursive functions should have a base case and a recursive call.
  - **base case** should be a stopping condition and what should be returned when that stopping condition is met.
    - should not include a recursive call
  - **recursive call** should call itself on a modified input.
    - modifying the input prevents looping infinitely.
    - the recursion should be doing some work on the data, otherwise it wouldn't be useful.
    - modification of the data can be done outside of the actual recurisve function call, as long as the data is in there.

# Examples

## Count Down
Function will perform a count down from a given number.

### Test Case
countDown(5)
```
5
4
3
2
1
All Done!
```

```
function countDown(n){
  //base case
  if(n===0){
    console.log('All Done!');
    return;
  }
  console.log(n);
  countDown(n-1);
}
```

## Sum Range
Return the sum of all the numbers from 1 to n.

### Test Case
sumRange(3) // 6
1+2+3

```
function sumRange(n){
  if(n===1)return 1;
  return n + sumRange(n-1);
}
```

## Factorial
Function to calculate what the factorial of a given integer is.<br>
_ie 4! = 1*2*3*4 = 24_
```
function factorial(n){
  if(n < 0) return "please enter a positive integer"
  if(n === 0 || n === 1)return 1;
  return n * factorial(n-1);
}
```

# Writing Recursion Iteratively
Often recursion can be don iteratively with loops. In terms of run-time, this can be more efficient.

```
function countDown(n){
  for(let i = n, n > 0; i--){
    console.log(n);
  }
  console.log('All Done!');
}

function sumRange(n){
  let sum = 0;
  for(let i=n; i > 0; i--){
    sum += n;
  }
  return sum;
}

function factorial(n){
  let factorial = 1;
  for(let i = n; n > 0; i--){
    factorial*=n;
  }
  return factorial;
}
```
# Common Issues
1. missing base-case or the base case doesn't return/stop the recursive case from executing.<br>
  error: maximum callstack size exceeded.<br>
  stack overflow!
2. base case returns the wrong value.

# Recusion within Helper Functions
Common problem solving pattern to use a recursive function as a helper function nested within another function.
- often used when needing to compile an collection of data ie in an array

## Form
```
function outterFunc(){
  const outterScopedVariable  = []

  function recursiveHelperFunc(input){
    //base case
    //modify outterScopeVariable
    recursiveHelperFunc(input - modified)
  }
  recursiveHelperFun(input)
  return outerScopedVariable
}
```

## Example
### Collect Odd Values
Collect and return the odd values present in this array.

```
function collectOdds(array){
  let odds = [];

  function helperOddCompiler(arr){
    if(arr.length === 0)return;
    if(arr[arr.length - 1] % 2 !== 0) odds.push(arr[arr.length - 1]);
    helperOddCompiler(arr.pop())
  }
  helperOddCompiler(array)
  return odds;
}
```

# Pure Recursion
## Helpful data methods that doesn't mutate data:
- Arrays
  - slice, spread operator, concat
- Strings are immutable
  - slice, substr, substring
- Objects
  - Object.assign(), ... (spread operator)

## Example using Collect Odd Values

- odds is set to the result of the recursive call
- the call stack will keep stacking recursive calls until it hits the base case
  - first call will the be the last processed
    - array: [1,2,3,4,5] odds: [1,3,5]
  - last call with be the first processed
    - array: [] odds: []
  - second to last call
    - array [1] odds: [1]

```
function collectOdds(array){
  let odds = [];

  //base case
  if(array.length === 0 ) return odds;

  //check if odd
  if(array[array.length - 1] %2 !== 0){
    odds.push(array[array.length - 1]);
  }

  odds = odds.concat(collectOdds(array.slice(array.length-1)));
  return odds;
}
```