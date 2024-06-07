/*
Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

Series:

1 
+
1/4
+
1/7
+
1/10
+
1/13
+
1/16
+
… 

You will need to figure out the rule of the series to complete this.
*/

function SeriesSum(n) {
    let denominator = 1;
    let result = 0;
    for (i = 0; i < n; i++){
      result += 1/denominator;
      denominator += 3;
    }
    result = String(Math.round(result * 100)/100);
    while (result.length < 4){
      if (result.length == 1){
        result += "."
      }
      result += "0"
    }
    return result
  }