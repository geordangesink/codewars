/*
JavaScript

accepts two integer arrays of equal length
compares the value each member in one array to the corresponding member in the other
squares the absolute value difference between those two values
and returns the average of those squared absolute value difference between each member pair.


Examples:
[1, 2, 3], [4, 5, 6]              -->   9   because (9 + 9 + 9) / 3
[10, 20, 10, 2], [10, 25, 5, -2]  -->  16.5 because (0 + 25 + 25 + 16) / 4
[-1, 0], [0, -1]                  -->   1   because (1 + 1) / 2
*/

var solution = function( firstArray, secondArray ) {
    let differenceSquared = new Array();
    for ( var i = 0; i < firstArray.length; i++ ){
        differenceSquared.push(Math.pow( ( Math.abs( firstArray[i]-secondArray[i] ) ) ,2 ) );
    }
    
    return differenceSquared.reduce( ( acc,c )=> acc + c , 0 ) / differenceSquared.length;
}