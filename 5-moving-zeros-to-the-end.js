/*
JavaScript

Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.
*/

function moveZeros(arr) {
    let result = new Array();
    let zeroCounter = 0;

    // creates the array without 0's while counting number of 0's
    for(i = 0; i < arr.length; i++)
    {
      if(arr[i] === 0)
      {
        zeroCounter += 1;
      }
      else
      {
        result.push(arr[i])
      }
    }

    // appends 0's to array
    for (i = 0; i < zeroCounter;i++)
    {
      result.push(0);
    }
    
    return result;
  }