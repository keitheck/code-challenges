function tribonacci(signature,n){
    var tribonacciArr = signature;
    if (n === 0) {
      return([]);
      } else if (n === 1) {
        return([tribonacciArr[0]]);
      } else if (n === 2) {
        return([tribonacciArr[0],tribonacciArr[1]]);
      } else { 
        for (var i = 0; i < n - 3; i++){    
          var slicedArr = tribonacciArr.slice(-3); 
          var reducedArr = (slicedArr[0] + slicedArr[1] + slicedArr[2]);
          tribonacciArr.push(reducedArr);
        }
        return(tribonacciArr);
      }
  }