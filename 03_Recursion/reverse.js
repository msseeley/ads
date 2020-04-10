/*
REVERSE
Write a function called reverse that takes in a string and returns a new string in reverse.

Test cases:
reverse("awesome") // "emosewa"
reverse("hello") // "olleh"

APPROACH:
- base case
  recursion should stop when the string is empty
  return an empty string
  formate for returning a string value
- recursive case:
  starts with the end of the current string and concatenates
  decrements the string by the last character.
*/

function reverse(str) {
  if (str.length === 0) return '';
  return str.slice(-1).concat(reverse(str.slice(0, -1)));
}


