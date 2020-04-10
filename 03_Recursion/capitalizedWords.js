/*
CAPITALIZE WORDS
write a function that takes in an array of strings and returns an array with all the ltrs in the array capitalized.

Test Case:
let words = ['i', 'am', 'learning', 'recursion'];
capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION'];

APPROACH
- base case:
  - smallest iteration of the array / last iteration of the array
  - return and all-capitalized version

- recursive case
  - iterates down by making the array smaller
  - return value is accumulated from recursive returns

*/

function capitalizeWords(array) {
  if (array.length === 1) return [array[0].toUpperCase()];
  const shouting = [array[0].toUpperCase()];
  return shouting.concat(capitalizeWords(array.slice(1)));
}
