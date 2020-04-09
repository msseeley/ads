/*
FIND THE LONGEST SUBSTRING
Write a function called findLongestSubString, which accepts a string and returns the length of the longest substring of unique characters.
Time complexity must be O(n)

Test Cases
  findLongestSubString('') //0
  findLongestSubString('rithmschool') // 7
  findLongestSubString('thisisawesome') // 6
  findLongestSubString('thecatinthehat') // 7
  findLongestSubString('bbbbb') //1

APPROACH
- sliding window approach where the left idx(start) moves and contracts based on the chars encountered.
- iterate through the string
- keep a overall maxLength
- pointer that keeps track of the start position of the substring currently being tabulated
- dictonary of the characters visited and their index (to potentially reset the start point once a unique substring has an end)
  - resetting starting point:
    - should go to the index ahead of the first instance of the duplicate char
    - unless that first instance if behind the current start of the substring (ie it's not even included in the current substring range we're looking at), in which case the start shouldn't change at all.
*/

function findLongestSubString(str) {
  let maxLength = 0;
  let cache = {};
  let start = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (cache[char] > -1) {
      maxLength = Math.max(maxLength, i - start);
      start = Math.max(cache[char] + 1, start);
    }
    cache[char] = i;
  }
  return maxLength;
}
