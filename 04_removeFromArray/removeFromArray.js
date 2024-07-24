function filter_item(item, item_to_filter){
    if (typeof item == typeof item_to_filter){
        return true;
    }
    return false;


}

const removeFromArray = function(array, ...nums) {
    let filtered = array;

   // if (Array.isArray(nums)){
    //    for (const number of nums){
    //        filtered = array.filter(num => num != number);
     //   }
        
    //}
    //else{
    for (const num of nums){
        
        //filtered = filtered.filter(number => ((number != num)));
       filtered = filtered.filter(function (number) {
        if (typeof number == typeof num){
            return num!=number;
        }
        return true;

       });
    }

    //for arg in filter_list, check if it exists in array. if it is, remove.
    
    //}
    
    console.log('this is a test : ', filtered);
    return filtered;

};

// Do not edit below this line
module.exports = removeFromArray;
