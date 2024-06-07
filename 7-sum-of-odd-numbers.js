/*
Given the triangle of consecutive odd numbers:

Calculate the sum of the numbers in the nth row of this triangle (starting at index 1)
*/

function rowSumOddNumbers(n) {
    let startingNumber = 1;
    let increase = 0;
    for (i = 1; i < n; i++){
      startingNumber += 2 + increase;
      increase += 2;
    }
    let sum = startingNumber;
    for (i = 1; i < n; i++){
      startingNumber += 2;
      sum += startingNumber;
    }
    return sum;
  }