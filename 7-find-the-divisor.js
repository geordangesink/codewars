/*
JavaScript

Create a function named divisors/Divisors that takes an integer n > 1 and returns an array with all of the integer's divisors(except for 1 and the number itself), from smallest to largest. If the number is prime return the string '(integer) is prime' (null in C#, empty table in COBOL) (use Either String a in Haskell and Result<Vec<u32>, String> in Rust).
*/

function divisors(integer) {
    let divisorsOfInteger = new Array();
    for (i = 2; i < integer; i++)
      {
        if ( Math.round(integer/i) == integer/i )
          {
            divisorsOfInteger.push(i);
          }
      }
    return (divisorsOfInteger.length > 0) ? divisorsOfInteger : `${integer} is prime`;
  };