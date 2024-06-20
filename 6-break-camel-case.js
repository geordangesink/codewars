/*
JavaScript

Complete the solution so that the function will break up camel casing, using a space between words.

"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
    // make an array to store result
    let resultAsArray = new Array();
    
    // loop over string input
    for ( i = 0; i < string.length; i++ ){
      // if char is an uppercase add space before next char
      if ( string[i].toUpperCase() == string[i] ){
        resultAsArray.push(" ");
        resultAsArray.push(string[i]);
      }
      else{
        resultAsArray.push(string[i]);
      }
    }
    // return result array as string
    return resultAsArray.join("");
  }