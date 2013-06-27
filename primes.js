#!/usr/bin/env node

checkPrimality = function(num){
    var isPrime = true;
    for (var i=2; i<num; i++){
        var m = 0;
        m = num%i;
        if (m == 0){
           isPrime = false;
        }
    }
    return isPrime;
}

var fs = require('fs');
var outfile = "primes.txt";

var nPrime = 0;
var n = 2;
while (nPrime < 100) {
    isNumPrime = checkPrimality(n);
    if (isNumPrime==true){
       if (nPrime == 99){
          outString = n;
       }
       else{
          outString = n + ",";
       }
       fs.appendFile(outfile, outString);
       nPrime = nPrime + 1
    }
    n = n + 1
}
