'use strit';

function checkTheBucket(bucket){
  var gold = bucket.filter( x => x == 'gold');
  return( gold.length >= 1 ? true : false);
}
