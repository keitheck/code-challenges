'use strict';

function mutateMyStrings(stringOne, stringTwo) {
var stringOneArr = stringOne.split('');
var stringTwoArr = stringTwo.split('');

var output = [stringOne + '\n'];

  for(var i = 0; i < stringOneArr.length; i++) {
    if(stringOneArr[i] !== stringTwoArr[i]) {
      stringOneArr[i] = stringTwoArr[i];
      output.push(stringOneArr.join('') + '\n');
    }
  }
  var final = output.join('');
  return final;
}
