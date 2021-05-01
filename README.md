# Kargo Online Assessment
#### Software Engineer Intern Position
#### Candidate: Jiyang Jenny Zhou

## Question
Convert an array of integers into an array of strings representing the phonetic equivalent of the integer.

## Example
* Given an array: [3, 25, 209], print “Three,TwoFive,TwoZeroNine” into stdout.
* Given an array: [10, 300, 5], print “OneZero,ThreeZeroZero,Five” into stdout.

## Approach
### NumberConverter function
Create a hashmap to construct mapping between integers and their corresponding phonetic string names. For each number in the given array, loop through each digit, find its name from the mapping and append to the current string. Once all digits are transformed, add the current number string to the result array.
