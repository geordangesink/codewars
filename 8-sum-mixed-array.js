/*
JavaScript

Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

Return your answer as a number.
*/

let sumMix = (x) => x.reduce((acc,c) => acc + parseInt(c),0);