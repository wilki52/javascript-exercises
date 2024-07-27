const add = function(...nums) {
  return nums.reduce((sum, item)=> sum+ item, 0);
};


const subtract = function(...nums) {
  return nums.slice(1).reduce((sum, item)=> sum- item, nums[0]);
};

const sum = function(arr) {
	return arr.reduce((sum, item)=>sum+item, 0);
};

const multiply = function(...nums) {
  return nums.reduce((product, item)=> product*item, 1);
};

const power = function(base, exp) {
  let result = 1;
  for (let i =0; i<exp; i++){
    result*=base;
  }

  return result;
	
};

const factorial = function(integer) {
  let result = 1;
	for (let i = integer; i>0; i--){
    result *=i;

  }
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
