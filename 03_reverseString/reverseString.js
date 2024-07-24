const reverseString = function(string) {
    let reverse_string = "";

    for (let i=string.length-1; i>-1; i--){
        reverse_string+= string[i];
    }
    return reverse_string
};

// Do not edit below this line
module.exports = reverseString;
