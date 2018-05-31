'use strict';

function find_average(array) {
  var index = array.length;
  var sum = array.reduce( (a,b) => a + b);
  return(sum / index);
