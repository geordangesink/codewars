/*
JavaScript

Description:
This time no story, no theory. The examples below show you how to write function accum:

Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

function accum(s) {
  let result = "";

  // for every char
  for (var i = 0; i < s.length; i++) {
    let currentChar = s[i];
    // append upper case char and repeat char for index amount
    result += currentChar.toUpperCase() + currentChar.toLowerCase().repeat(i);
    // if it is the last char dont end with '-'
    if (i !== s.length - 1) {
      result += "-";
    }
  }
  return result;
}
