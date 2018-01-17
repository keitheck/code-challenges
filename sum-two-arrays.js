'use strict'

var arr1 = [1,2,3,4,5,6,7,8,9,10];
var arr2 = [11,22,33,44,55,66,77,88,99,100];

function arrayPlusArray(arr1, arr2) {
 var sumArr1 = arr1.reduce((a, b) => a + b, 0);
 var sumArr2 = arr2.reduce((a, b) => a + b, 0);
  return sumArr1 + sumArr2;
}

arrayPlusArray();
