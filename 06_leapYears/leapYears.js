const leapYears = function(year) {

    //for something to be a leapyear, all 2 must be true.
    //must be divisible by four
    //must not be divisible by 100 unless they are divisible by 400.
    if (year % 4 !=0){
        return false;
    }
    if (year%400!=0 && year %100 ==0){
        return false;
    }

    return true;

    //must be divisible by 4.
    //and must be (not divisib)

};

// Do not edit below this line
module.exports = leapYears;
