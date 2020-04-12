/**
STRING VALUES
Write a function called stringValues which takes in an object and returns an array of all the strings present within the object.

Test Case:
const obj = {
    stuff: "foo",
    data: {
        val: {
            thing: {
                info: "bar",
                moreInfo: {
                    evenMoreInfo: {
                        weMadeIt: "baz"
                    }
                }
            }
        }
    }
}

collectStrings(obj) // ["foo", "bar", "baz"])


APPROACH:
- create array to store strings
- loop through the object
- push any values that are strings
- recurse on any object values
  - array should concatentate returned array from recursive call
- return the array
*/


function collectStrings(obj) {
  let strValues = [];

  for (let key in obj) {
    const val = obj[key];
    if (typeof val === 'string') {
      strValues.push(val);
    }
    else if (typeof val === 'object' && !Array.isArray(val)) {
      strValues = strValues.concat(collectStrings(val));
    }
  }
  return strValues;
}
