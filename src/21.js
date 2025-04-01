function getRandomInteger(minValue, maxValue) {
  return Math.floor(Math.random() * (maxValue - minValue + 1)) + minValue;
}

// Example usage:
console.log(getRandomInteger(10, 20)); // Outputs a random integer between 10 and 20
