/*
JavaScript

Given an array of integers.

Return an array, where the first element is the count of positives numbers and the second element is sum of negative numbers. 0 is neither positive nor negative.

If the input is an empty array or is null, return an empty array.
*/

function countPositivesSumNegatives(input) {
    let arra = [0,0]
    
    if (input == null){
      return []
    }
    
    for (i = 0; i < input.length; i++){
      if (input[i] < 0){
        arra[1] += input[i]
      }
      else if (input[i] > 0){
        arra[0] += 1
      }
    }
    if (arra[0] > 0 || arra[1] != 0){
      return arra
    }
    else{
      return []
    }
  }