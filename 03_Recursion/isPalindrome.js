/*
IS PALINDROME
Write a function called isPalindrome that takes in a string and returns whether the string is a palindrome or not.

Test cases:
isPalindrome('awesome') //false
isPalindrome('tacocat') //true
isPalindrome('amanaplanacanalpanama') //true

APPROACH:
  recursive only
   - Base Cases:
      if there's only one ltr it's the same reversed
      if there's two ltrs compare see if they're equal
   - Recursive Case:
      compare the ends of the string
      if they're the same ltr continue with recursive call
      input decrement by taking the beginning and end characters off
      if not return false

  recursive helper
    - use reverse string recursion (see reverse.js)
    - compare initial string with reversed string

*/

//recursive only
function isPalindrome(str) {
  if (str.length === 1) return true;
  if (str.length === 2) return str[0] === str[1];
  if (str[0] === str.slice(-1)) isPalindrome(str.slice(1, -1))
  return false;
}

//helper recursive
function isPalindrome(string) {
  function reverse(str) {
    if (str.length === 1) return str;
    return str.slice(-1) + reverse(str.slice(0, -1))
  }
  return string === reverse(string)
}
