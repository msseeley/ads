/*
IS PALINDROME
Write a function called isPalindrome that takes in a string and returns whether the string is a palindrome or not.

Test cases:
isPalindrome('awesome') //false
isPalindrome('tacocat') //true
isPalindrome('amanaplanacanalpanama') //true

APPROACH:

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
