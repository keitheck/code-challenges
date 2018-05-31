function fixTheMeerkat(arr) {
    var reverseArr = [];
    for (var i = arr.length -1; i >= 0; i--){
      var tempVar = arr.splice(i,1);
      tempVar = tempVar.toString();
      reverseArr.push(tempVar); 
    }
    return(reverseArr);
   }