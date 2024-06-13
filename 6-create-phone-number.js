/*
JavaScript

Write a function that accepts an array of 10 integers (between 0 and 9), that returns a string of those numbers in the form of a phone number.
*/

function createPhoneNumber(numbers){
    numbers.splice(6,0,"-")
    numbers.splice(3,0," ")
    numbers.splice(3,0,")")
    numbers.unshift("(")
    return numbers.reduce((acc,c)=>acc + String(c),"");
  }