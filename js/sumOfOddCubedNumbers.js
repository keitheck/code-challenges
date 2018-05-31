'use strict';

function cubeOdd(arr) {
  for(var j = 0; j < arr.length; j++){
    if(isNaN(arr[j])) {
      total = undefined;
      return total;
    }
  }
  var cubed = arr.map(x => x * x * x);
  var remainder = cubed.map(y => y % 2);
  var remainderNormal = remainder.map(y => y * y);
  var sum = 0;
  for(var i = 0; i < remainder.length; i++) {
    if(remainderNormal[i] === 1){
    sum = sum + cubed[i]
    }
  }
  return sum;
}
