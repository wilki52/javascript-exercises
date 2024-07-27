const findTheOldest = function(people) {

    // console.log(people.sort((a, b)=>{
    //     return ((a.yearOfDeath-a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) ? 1  : -1 ;
    // }));
    return people.sort((a, b)=>{
        if (!('yearOfDeath' in a)){
            a['yearOfDeath'] = (new Date()).getFullYear();

        }
        if (!('yearOfDeath' in b)){
            b['yearOfDeath'] = (new Date()).getFullYear();
        }
        return ((a.yearOfDeath-a.yearOfBirth) < (b.yearOfDeath - b.yearOfBirth)) ? 1 : -1;
    })[0];


};

// Do not edit below this line
module.exports = findTheOldest;
