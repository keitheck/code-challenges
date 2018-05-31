function repeatStr (n, s) {
    var i = 0;
    var arr = [];
      while (i < n) {
        arr.push(s);
        i++;
        }  
      return(arr.join(''));
    }