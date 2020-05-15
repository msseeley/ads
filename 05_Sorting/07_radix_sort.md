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