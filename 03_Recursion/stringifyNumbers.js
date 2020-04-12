/*
STRINGIFY NUMBERS
Write a function called stringifyNumbers, which takes an object and converts all of it's numbers to strings. The function should not mutate the object.

Test Case:

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj)

{
    num: "1",
    test: [],
    data: {
        val: "4",
        info: {
            isRight: true,
            random: "66"
        }
    }
}

APPROACH:
- declare new object to hold new values
- loop through the object
- base case:
  values that are number are turned into a string
  values that aren't numbers are kept as is
- recursive case:
   values that are objects, recurse
return object
*/

function stringifyNumbers(obj) {
  const result = {}
  for (let k in obj) {
    const val = obj[k];
    if (typeof val === 'number') {
      result[k] = val.toString();
    } else if (typeof val === 'object' && !Array.isArray(val)) {
      result[k] = stringifyNumbers(val)
    } else {
      result[k] = obj[k]
    }
  }
  return result;
}
