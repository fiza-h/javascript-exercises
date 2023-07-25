const convertToCelsius = function(temp) {
  let celsius = (temp - 32) * (5 / 9);
  return parseFloat(celsius.toFixed(1));
};

const convertToFahrenheit = function(temp) {
  let fahrenheit = (temp * 9/5) + 32;
  return parseFloat(fahrenheit.toFixed(1));
};

convertToCelsius(100)
convertToCelsius(32)
// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
