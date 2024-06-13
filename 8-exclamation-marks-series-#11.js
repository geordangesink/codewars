/*
JavaScript

Replace all vowel to exclamation mark in the sentence. aeiouAEIOU is vowel.
*/

let replace = s => s.split("").reduce((acc,c) => ["a","e","i","o","u"].includes(c.toLowerCase()) ? acc + "!" : acc + c,"");