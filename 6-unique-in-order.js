/*
JavaScript

DESCRIPTION:
Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

For example:

uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
uniqueInOrder([1,2,2,3,3])       == [1,2,3]
*/
var uniqueInOrder=function(iterable){
    // create array for result
    let iterableResult = new Array();
    // push first char to array
    if ( iterable .length > 0 ){
      iterableResult.push(iterable[0])
    }
    // check next char and push to array if not the same as previous char
    for (var i = 1; i < iterable.length; i++){
      if ( iterable[i] !== iterable[i-1] )
        iterableResult.push(iterable[i])
    }
    return iterableResult
    
  }