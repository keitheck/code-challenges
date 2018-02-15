'use strict';

function stringClean(s){
  var regex = /[^0-9]/gi;
  var matched = s.match(regex);

if(matched === null) {
  return('');
  } else {
  return matched.join('');
  }
}