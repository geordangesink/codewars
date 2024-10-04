/*
JavaScript

Description:
Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

function solution(string) {
  let resultArr = string.split("");
  let n = 0; // number of upper cases

  // for every character add space at index if it is upper case
  for (var i = 0; i < string.length; i++) {
    const char = string[i];
    if (char.toLowerCase() !== char) {
      resultArr.splice(i + n, 0, " "); // +n because array grows
      n++;
    }
  }
  return resultArr.join("");
}
