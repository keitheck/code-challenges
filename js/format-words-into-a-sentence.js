'use strict';

function formatWords (words) {
    if (!words) return '';
  var wordarr = words.filter(arr => arr);
  var string = wordarr.join(", ").replace(/,([^,]*)$/, ' and$1');
  return string;
}
