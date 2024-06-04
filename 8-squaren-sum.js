/*
JavaScript

Complete the square sum function so that it squares each number passed into it and then sums the results together.
*/

function squareSum(numbers){
    let result = 0
    for (i = 0; i < numbers.length; i++){
      result += numbers[i]*numbers[i]
    }
    return result
  }