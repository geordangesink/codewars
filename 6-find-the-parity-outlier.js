/*
JavaScript

You are given an array (which will have a length of at least 3, but could be very large) containing integers. 
The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. 
Write a method that takes the array as an argument and returns this "outlier" N.
*/

function findOutlier(integers){
    let firstInt = integers[0]%2 == 0;
    let secondInt = integers[1]%2 == 0;
    let thirdInt = integers[2]%2 == 0;
    
    if (firstInt && secondInt || //checking for at least two even numbers
       firstInt && thirdInt ||
       secondInt && thirdInt)
    {
      for (i = 0; i < integers.length; i++)
      {
        if(integers[i]%2 != 0)
        {
          return integers[i];
        }
      }
    }
    else
    {
      for (i = 0; i < integers.length; i++)
      {
        if(integers[i]%2 == 0)
        {
          return integers[i];
        }
      }
    }
  }