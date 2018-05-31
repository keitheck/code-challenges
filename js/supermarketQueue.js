function queueTime(customers, n) {
    console.log(customers, n);
    var totalCheckoutTime = customers.reduce(add, 0);
      function add(a, b) {
          return a + b;
      }
    console.log(totalCheckoutTime);
    var output = (totalCheckoutTime / n);
    console.log('output',output)

    var longestTime = Math.max(...customers);

    if (output >= longestTime){
      return(output);
    } else {
      return(longestTime);
    }

}
