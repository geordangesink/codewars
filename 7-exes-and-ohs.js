/*
JavaScript

Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.
*/

function XO(str) {
    let o = str.toLowerCase().split("o");
    let x = str.toLowerCase().split("x");
    
    return ((x.length-1) == (o.length-1)) ? true : false;
  }