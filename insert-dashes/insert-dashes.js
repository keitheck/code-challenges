var num = 454793;

function insertDash(num) {
    var splitArr = num.toString();
    var stringArr = splitArr.split('');
    var numArr = [];
    var oddEven = [];
    
    for(var i = 0; i < stringArr.length; i++){
      var tempNum = parseInt(stringArr[i]);
      numArr.push(tempNum);
      var tempOddEven = (tempNum % 2);
      oddEven.push(tempOddEven);
      
    }
    console.log(numArr);
    console.log(oddEven);
    var modArr = numArr;
    var j = 0;
    var k = 1;
    for(j = 0; j < oddEven.length; j++){
      if(oddEven[j] && oddEven[j + 1] === 1){
          modArr.splice([j + k], 0, '-');
          k++;
          }
    }
    console.log(modArr);
    var output = modArr.join('');
    return(output);
   }

   insertDash();