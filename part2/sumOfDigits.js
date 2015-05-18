function sumOfDigits(num) {
    num=num+"";

    if(!num) return 0;
    
    var test = parseInt(num[0])
      , rem  = num.substr(1)
    ; 

    return (isNaN(test) ? 0 : test) + sumOfDigits(rem);
}

module.exports = sumOfDigits;
