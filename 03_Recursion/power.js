/*
POWER
Write a function called power which takes in a base and exponent and returns the value of the base to the exponent. This function should only handle positive values, eg disregard negatives in your implementation.

Test cases:
  power(2,0) // 1
  power(2,2) // 4
  power(2,4) // 16

APPROACH:
- base case is when the exponent is 0 which will always be 1
- recursive case
    - base should not change
    - exponent needs to decrement
    - base * recursive call

Walk through:
first call, last processed
2 * power(2, 3) 2 * 8 = 16
    2 * power(2, 2) 2 * 4 = 8
        2 * power(2,1) 2 * 2 => 4
            2 * power(2, 0) => 2 * 1 => 2 last call, first processed
*/

function power(base, exp) {
  if (exp === 0) return 1;
  return base * power(base, exp - 1);
}

