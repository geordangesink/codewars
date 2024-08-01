/*
JavaScript

Description:
A format for expressing an ordered list of integers is to use a comma separated list of either

individual integers
or a range of integers denoted by the starting integer separated from the end integer in the range by a dash, '-'. The range includes all integers in the interval including both endpoints. It is not considered a range unless it spans at least 3 numbers. For example "12,13,15-17"
Complete the solution so that it takes a list of integers in increasing order and returns a correctly formatted string in the range format.

Example:

solution([-10, -9, -8, -6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]);
// returns "-10--8,-6,-3-1,3-5,7-11,14,15,17-20"
*/

function solution(list) {
  // array to store consecutive numbers and one for answer
  let consecutiveNumber = new Array();
  let answer = new Array();

  for (i = 0; i < list.length; i++) {
    // add to consecutive number array if its the first int OR a consecutive of the last
    if (
      consecutiveNumber == [] ||
      consecutiveNumber[consecutiveNumber.length - 1] === list[i] - 1
    ) {
      consecutiveNumber.push(list[i]);
    }
    // dending on length of consecutive create string or push each int to answer array
    else {
      checkConsecutive(consecutiveNumber);
      consecutiveNumber = [list[i]]; // set consecutive array to current int
    }
  }
  checkConsecutive(consecutiveNumber); // process leftover ints in consecutive array

  function checkConsecutive(consecutiveNumber) {
    // create string if consecutive was longer or same than 3 and push to answer
    if (consecutiveNumber.length >= 3) {
      let range = `${consecutiveNumber[0]}-${
        consecutiveNumber[consecutiveNumber.length - 1]
      }`;
      answer.push(range);
    } else {
      // push each int to answer if consecutive was shorter than 3
      consecutiveNumber.forEach((n) => answer.push(n));
    }
  }
  // join to string
  return answer.join(",");
}
