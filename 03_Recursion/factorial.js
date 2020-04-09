/*
FACTORIAL
Write a function called factorial which takes in a number, n, and returns the value of n!. Remember that 0! = 1.

Test Cases:
factorial(1) // 1
factorial(2) // 2
factorial(4) // 24
factorial(7) // 5040

APPROACH:
- base case is when n === 0
- because a factorial basically is a multiplication of each number from 1 to the factorial number, multiply the decremented number

4 = 4*3*2*1 = 24
*/

function factorial(n) {
  if (n === 0) return 1;
  return n * factorial(n - 1);
}
