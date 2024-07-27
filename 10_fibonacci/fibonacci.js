const fibonacci = function(num) {

    if (num==0) return 0;
    else if (num<0) return 'OOPS';
    

    fib = [0, 1, 1];
    for (i=3; i<=num; i++){
        fib[i] = fib[i-1]+fib[i-2];
        console.log(fib[i], i, num);
    }
    return fib.slice(-1).pop();
};

// Do not edit below this line
module.exports = fibonacci;
