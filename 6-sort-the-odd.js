/*
JavaScript

Task
You will be given an array of numbers. You have to sort the odd numbers in ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
*/

function sortArray(array) {
    // created sorted array of odd numbers
    let oddNumbersSorted = array.filter( n => n % 2 != 0).sort((a,b) => a-b);
    let resultArray = array
  
    // create index counter for odd number array to insert appropiate odd number into resultArray
    let indexOddCounter = 0;
    // if the number is odd, replace it with the appropiate odd number from sorted array
    resultArray.forEach( (n , i) => {
      if ( n % 2 != 0 ){
        resultArray[i] = oddNumbersSorted[ indexOddCounter ];
        indexOddCounter++;
      }
  
    });
    
    return resultArray;
  }