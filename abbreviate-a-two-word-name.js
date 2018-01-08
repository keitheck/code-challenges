function abbrevName(name){
    var nameArr = name.split(' ');
    var intArr = [];
      for (var i = 0; i < nameArr.length; i++){
        var initial = nameArr[i].slice(0,1);
        initial = initial.toUpperCase();
        intArr.push(initial);
      }
      return(intArr.join('.'));
  }