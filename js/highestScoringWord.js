function high(x){
  console.log(x);
  var wordArr = x.toLowerCase().split(' ');
  var alph = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  var largestSum = 0
  var scoreArr = [];
  for(var i = 0; i < wordArr.length; i++) {
//     console.log(wordArr[i]);
    var wordSplitArr = wordArr[i].split('');
    var sum = 0;
    for(var j = 0; j < wordSplitArr.length; j++){
      for(var k = 0; k < alph.length; k++)
        if(wordSplitArr[j] === alph[k]) {
          sum = sum + k + 1;
        }
//       console.log('current sum', sum)
    }
      scoreArr.push(sum);
      console.log("scoreArr", scoreArr);
  }
  var largestScoreIndex = scoreArr.indexOf(Math.max(...scoreArr));

  console.log(largestScoreIndex);

    return(wordArr[largestScoreIndex]);
}
