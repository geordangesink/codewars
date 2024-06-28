/*
JavaScript

DESCRIPTION:
Your task is to construct a building which will be a pile of n cubes. The cube at the bottom will have a volume of 
𝑛^3n , the cube above will have volume of

(𝑛−1)^3

and so on until the top which will have a volume of 

1^3
.

You are given the total volume m of the building. Being given m can you find the number n of cubes you will have to build?

The parameter of the function findNb (find_nb, find-nb, findNb, ...) will be an integer m and you have to return the integer n such as 
if such a n exists or -1 if there is no such n.

Examples:
findNb(1071225) --> 45

findNb(91716553919377) --> -1
*/

function findNb(m) {
    // create variable for Sum and "n" (or the base of the power function)
    let sum = 0;
    let base = 0;
    
    // increase n as long as sum is smaler than m
    while ( m > sum ){
      base++;
      sum += Math.pow( base, 3 );
    }
    
    // returne base (n) if the sum is same as m
    return sum == m ? base : -1;
  }