/*
JavaScript

DESCRIPTION:
Build Tower
Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

For example, a tower with 3 floors looks like this:

[
  "  *  ",
  " *** ", 
  "*****"
]
And a tower with 6 floors looks like this:

[
  "     *     ", 
  "    ***    ", 
  "   *****   ", 
  "  *******  ", 
  " ********* ", 
  "***********"
]
*/

function towerBuilder(nFloors) {

    // starting cariables and values 
    let charAmount = nFloors === 1 ? 1 : ((nFloors - 1) * 2 ) + 1;
    let stars = "*";
    let whiteSpaceSide = "";
    let tower = new Array();
    
    // create left and right whitespace for top floor
    for ( i = 0; i < nFloors - 1; i++ ){
      whiteSpaceSide += " ";
    }
    // create floor and push to array
    for ( i = 0; i < nFloors; i++ ){
      tower.push(whiteSpaceSide + stars + whiteSpaceSide)
      // adjust values for next floor
      stars += "**";
      whiteSpaceSide = whiteSpaceSide.split("").slice(1).join("");
    }
    
    return tower;
  }