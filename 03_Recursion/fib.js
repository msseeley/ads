/*
Fib
Write a recursive function called fib which accepts a number and returns the nth number in the Fibonacci sequence. Recall that the Fibonacci sequence is the sequence of whole numbers which start with 1 and 1 and where every number thereafter is equal to the sum of the previous two numbers.

Fib sequence:
1, 1, 2, 3, 5, ...

Test Cases:
fib(4) // 3
fib(10) // 55
fib(28) // 317811
fib(35) // 9227465

APPROACH:
- base case(s):
  - there are two base cases.
   n === 1 => 1;
   n === 0 => 0;
- recursive case sum of the previous two numbers
  - 1st previous number is n-1
  - 2nd previous number is n-2
  - example 4th number in the fib sequence is 3
    fib(4-1) + fib(4-2)
    fib(3) + fib(2)
    2 + 1 = 3
*/

function fib(n) {
  if (n < 2) return n;
  return fib(n - 1) + fib(n - 2);
}
