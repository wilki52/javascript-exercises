const reverseString = function(string) {
    let reverse_string = "";

    reverse_string = string.split("").reverse().join("");
    return reverse_string;
};

// Do not edit below this line
module.exports = reverseString;
