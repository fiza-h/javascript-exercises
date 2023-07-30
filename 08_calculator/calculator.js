const add = function(num1, num2) {
	return num1 + num2;
};

const subtract = function(num1, num2) {
	return num1 - num2;
};

const sum = function(array) {
  let sum = 0;
	array.forEach(element => {
    sum += element;
  });
  return sum;
};

const multiply = function(array) {
  let ans = 1;
  array.forEach(element => {
    ans *= element;
  });
  return ans;
};

const power = function(num1, num2) {
	return num1 ** num2;
};

const factorial = function(num) {
	if (num==0 || num==1) {
    return 1;
  }
  let ans = 1;
  while (num!=0) {
    ans *= num;
    num--;
  }
  return ans;
};

factorial(5);
// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
