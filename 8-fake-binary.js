/*
JavaScript

Given a string of digits, you should replace any digit below 5 with '0' and any digit 5 and above with '1'. Return the resulting string.
*/

function fakeBin(x){
    let stringSum = "";
    for (i = 0; i < x.length; i++){
      if (x[i] < 5){
        stringSum += "0";
      }
      else{
        stringSum += "1";
      }
    }
    return stringSum;
  }