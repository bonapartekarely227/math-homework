function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b !== 0) {
    return a / b;
  } else {
    throw new Error("Division by zero is not allowed.");
  }
}

function square(num) {
  return num * num;
}

function cube(num) {
  return num * num * num;
}

function factorial(n) {
  if (n === 0) {
    return 1;
  }

  let result = n * factorial(n - 1);
  return result;
}
