/*
JavaScript

Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

For example (Input --> Output):

39 --> 3 (because 3*9 = 27, 2*7 = 14, 1*4 = 4 and 4 has only one digit, there are 3 multiplications)
999 --> 4 (because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2, there are 4 multiplications)
4 --> 0 (because 4 is already a one-digit number, there is no multiplication)
*/

function persistence(num) {
    // make array to use reduce method
    let numArray = String( num ).split("");
    let amountMultiplied = 0;
    
    // while ammount of digits is biger than 10, multiply digits and set num array to result (as array)
    while ( numArray.length > 1 ){
      amountMultiplied++;
      numArray = String( numArray.reduce( (acc,c) => acc * parseInt(c), 1 ) ).split("");
    }
    
    // return number of times the while loop ran
    return amountMultiplied;
  }