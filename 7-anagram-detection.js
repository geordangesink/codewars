/*
JavaScript

DESCRIPTION:
An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

Note: anagrams are case insensitive

Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

Examples
"foefet" is an anagram of "toffee"

"Buckethead" is an anagram of "DeathCubeK"
*/

// write the function isAnagram
var isAnagram = function(test, original) {
    // set variables as array
    let initial = original.toLowerCase().split("");
    let check = test.toLowerCase().split("");
    let charsReplaced = 0;
    
    // check if ammount of chars is same
    if ( initial.length != check.length ){
      return false;
    }else {
    
      // loop through every original index
      for ( i = 0; i < initial.length; i++ ){
        // check every test char if equal
        for ( x = 0; x < check.length; x++ ){
          if ( initial[i] == check[x] ){
            // set to different non-string value for further iteration
            initial[i] = 0;
            check[x] = null;
            charsReplaced++;
          }
        }
        
      }
      // check if matched chars are same as string length
      return check.length == charsReplaced ? true : false;
    }
  };