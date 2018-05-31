'use strict';

function century(year) {
  var hundreds = 0;
  var counter = 0;
  while (counter < year){
    if (counter % 100 == 0){
      hundreds++;
    }
    counter++;
  }
  return hundreds;
}
