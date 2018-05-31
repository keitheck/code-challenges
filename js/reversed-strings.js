'use strict';

function solution(str){
  var arr = str.split('');
  var reverseArr = [];
  for(var i = arr.length - 1; i >= 0 ; i--) {
    reverseArr.push(arr[i]); }
 var final = reverseArr.join("");
  return(final); }
