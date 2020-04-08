/*
IS SUBSEQUENCE
Write a function called isSubsequence, that takes in two strings and returns whether the first string is a substring of the second string. Specifically, the function should check if the characters in the first are present and in the same order of appearance as the second string.

The function MUST be at least  O(n+m)/O(1) time/space.

Test cases
  isSubsequence('hello', 'hello world') //true
  isSubsequence('sing', 'sting') //true
  isSubsequence('abc', 'abracadabra') //true
  isSubsequence('abc', 'cba') // false

APPROACH
- optimization check if the first string length is greater than the second return false
- go through the characters of the strings
- use pointer for first string that iterates up once that character has been found in the second
- if we can iterate fully through the first string, then the first string is present in the second string
*/

function isSubsequence(sub, str) {
  if (sub.length > str.length) return false;
  let subIdx = 0;
  let strIdx = 0;
  while (strIdx < str.length) {
    const strChar = str[strIdx];
    const subChar = sub[subIdx];
    if (subIdx === sub.length) return true;
    if (subChar === strChar) subIdx++;
    strIdx++;
  }
  return false;
}
