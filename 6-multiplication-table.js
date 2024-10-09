/*
JavaScript

Description:
Your task, is to create N×N multiplication table, of size provided in parameter.

For example, when given size is 3:

1 2 3
2 4 6
3 6 9
For the given example, the return value should be:

[[1,2,3],[2,4,6],[3,6,9]]
*/

multiplicationTable = function (size) {
  const outerArr = [];

  // have as many outer arrays as size number
  for (var i = 1; i <= size; i++) {
    const innerArr = [];

    // have as mayn inner arrays as size number
    for (var x = 1; x <= size; x++) {
      innerArr.push(i * x); // multiplication cell
    }

    outerArr.push(innerArr);
  }
  return outerArr;
};
