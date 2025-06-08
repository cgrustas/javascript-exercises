const add = function(x, y) {
  return x + y;
};

const subtract = function(x, y) {
	return x - y;
};

const sum = function(numbers) {
  return numbers.reduce(((total, curr) => total + curr), 0);
};

const multiply = function(numbers) {
  return numbers.reduce(((product, multiplicand) => product * multiplicand), 1);
};

const power = function(base, exponent) {
  return base ** exponent;
};

const factorial = function(number) {
  let product = 1;
  for (i = 1; i <= number; i++) {
    product *= i;
  }
  return product
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
