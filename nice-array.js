'use strict';

function isNice(arr){
  if(arr.length === 0) return(false);
  var count = 0;
  for(var i = 0; i < arr.length; i++){
    if(arr.includes(arr[i] + 1) || arr.includes(arr[i] - 1)){
      count++;
    }
  }
  if(arr.length === count){
    return(true);
  } else {
    return(false);
  }
};
