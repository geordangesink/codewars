/*
JavaScript

DESCRIPTION:
Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

Examples:
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

function longest(s1, s2) {
    // Concatenate both strings and convert to Set to get unique characters
    let uniqueChars = new Set([...s1, ...s2]);
  
    // Convert Set back to array and sort alphabetically
    let sortedChars = [...uniqueChars].sort();
  
    // Join sorted array into a string and return
    return sortedChars.join('');
  }