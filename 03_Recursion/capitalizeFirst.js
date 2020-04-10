/*
 CAPTIALIZE FIRST
 Write a function called capitalizeFirst that takes in an array of strings and returns an array with the first letter of each string capitalized.

 APPROACH:
 -base case:
  empty array, returns an empty array
 -capitalization:
  takes a single string (from the beginning or end)
  capitalizes the string
  concatenates that to the recusive call
 - recursive case:
  decremented (from beginning or end)
*/

function capitalizeFirst(array) {
  if (array.length === 0) return [];
  else {
    const cap = [array[0][0].toUpperCase() + array[0].slice(1)];
    return cap.concat(capitalizeFirst(array.slice(1, array.length)));
  }
}
