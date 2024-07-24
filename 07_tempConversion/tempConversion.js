const roundToFirstDecimal = function(number) {
  return Math.round(number *10)/10;

}
const convertToCelsius = function(fahrenheit) {
  let celsius = (fahrenheit - 32)* (5/9);
  return roundToFirstDecimal(celsius);
};

const convertToFahrenheit = function(celsius) {
  let fahrenheit = (9/5)*celsius + 32;
  return roundToFirstDecimal(fahrenheit);
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
