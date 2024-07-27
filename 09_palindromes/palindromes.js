const palindromes = function (string) {
    let left = 0;
    let right = string.length;
    let arr = string.replace(/\W/g, '').toLowerCase().split('');

    let length1= arr.length/2;
    let length2 = arr.length/2
    if (arr.length % 2 !== 0){
        length2 = arr.length/2+1;
    }
    console.log(arr.toString());



    console.log(arr.slice(0, length1));
    console.log(arr.slice(length2).reverse());
    return (arr.slice(0, length1).toString() === arr.slice(length2).reverse().toString()); 
};

// Do not edit below this line
module.exports = palindromes;
