# Radix Sort
Is a special sorting algorithm is applied to sorting numbers. It does not compare numbers to each other. Instead, it goes through the digits of each number (right to left). At each digit it sorts the entire array of numbers into placeholder positions based on the value of that number. When a larger digit place is visited and one of the values isn't that large (would ostesibly be 0), it is then put into the 0 placeholder (in order). When all the numbers are in the numbers are in the 0 placeholder they are ordered.

## Example

array [12, 1, 9, 254, 25]

bucket [ , , , , , , , , , ]
        0 1 2 3 4 5 6 7 8 9

number of iteration is based on the highest number of digits in number
iteration count = 3 (254 has three numbers and is the highest digit count)

first iteration looking @ 1s place

  bucket [ , 1, 12, , 254, 25, , , , 9]
          0  1   2 3  4    5  6 7 8 9

  new array [1, 12, 254, 25, 9]

second iteration looking @ 10s place

  bucket [ [01, 09], 12, 25, , , 254, , , , ]
              0      1   2  3 4   5  6 7 8 9
  new array [1, 9, 12, 25, 254]

third iteration looking @ 100s place

  bucket [ [001, 009, 012, 025], ,254 , , , , , , , ]
                  0             1  2   3 4 5 6 7 8 9
  new array = [1, 9, 12, 25, 254]

  return new array [1, 9, 12, 25, 254]

## Implementation
Radix sort employs three helper functions to break down being able to count the digits in a number,  finding the largest digit count, get a digit at a particular place.

### Get a Digit at a particular place
```
function getDigit(num, place){
  return Math.floor(Math.abs(num)/Math.pow(10, place)) %10;
}
```
### Finding the largest digit count
Asks 10 to what power (floored to avoid decimals) gives us this number? And then adds on 1 to account for the placement of the digit (10s ,100s, 1s etc place).
```
function digitCount(num){
  if(num === 0) return 1;
  //log10(0) = -Infinity
  return Math.floor(Math.log10(Math.abs(num))) + 1;
}
```
### most digits
```
function mostDigits(nums){
  let max = 0;
  for(let i = 0; i<nums.length; i++){
    max = Math.max(digitCount(nums[i]), max)
  }
  return max;
}
```

### radix sort

```
function radixSort(nums){
  const iterations = mostDigits(nums);
  let sorted = [];
  for(let i = 0; i < iterations; i++){
    let buckets = Array.from({length:10}, () => []);
    for(let k = 0; k < nums.length; k++){
      const num = nums[k];
      const digit = getDigit(num, i);
      buckets[digit].push(num);
    }
    sorted = [].concat(...buckets);
  }
  return sorted;
}
```