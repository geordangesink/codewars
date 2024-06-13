/*
JavaScript

You are going to be given an array of integers. Your job is to take that array and find an index N where the sum of the integers to the left of N is equal to the sum of the integers to the right of N.

If there is no index that would make this happen, return -1.
*/


function findEvenIndex(arr)
{
  let arrLeft = new Array();
  let arrRight = new Array();
  let arrLeftSum = 0;
  let arrRightSum = 0;
  for (i = 0; i < arr.length; i++)
  {
    for (x = 0; x < i; x++)
    {
      arrLeft.push(arr[x])
    }
    arrRight = arr.slice(i+1);

    arrLeftSum = arrLeft.reduce((acc,c)=> acc +c,0);
    arrRightSum = arrRight.reduce((acc,c)=> acc+c,0);
    
    if ( arrLeftSum == arrRightSum )
    {
      return i;
    }
    arrLeft = [];
  }
  return -1;
}