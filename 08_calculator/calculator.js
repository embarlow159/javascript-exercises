const add = function(value1, value2) {
  return value1+value2
};

const subtract = function(value1, value2) {
	return value1-value2
};

const sum = function(arr) {
	let sum = 0;
  for (let i=0; i<arr.length; i++) {
    sum += arr[i];
  }
  return sum
};

const multiply = function(...args) {
  let sum = 1;
  for (let i=0; i<args.length; i++) {
    sum = sum*args[i];
  }
  return sum
};

const power = function(value1, value2) {
	return Math.pow(value1, value2)
};

const factorial = function(value) {
	if (value<0) {
    return -1;
  }
  else if (value===0) {
    return 1;
  }
  else {
    return (value * factorial(value - 1))
  }
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
