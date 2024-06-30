/*
JavaScript

DESCRIPTION:
The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

Examples
"din"      =>  "((("
"recede"   =>  "()()()"
"Success"  =>  ")())())"
"(( @"     =>  "))((" 

Notes
Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!
*/

function duplicateEncode(word){
    // set input variable to lower case
    let input = word.toLowerCase();
    let answer = [];
    // for every character
    for ( i = 0; i < input.length; i++ ){
      let charAmountInWord = 0;
      // check if current character is in word more than once
      for ( x = 0; x < input.length; x++ ){
        if ( input[x] == input[i] ){
          charAmountInWord++;
        }
      }
      // push answer according to char count
      if ( charAmountInWord > 1 ){
        answer.push(")");
      }
      else if ( charAmountInWord == 1 ){
        answer.push("(");
      }
    }
    return answer.join("");
}