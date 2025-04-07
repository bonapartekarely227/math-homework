function calculateSum(numbers) {
  let sum = numbers.reduce((acc, current) => acc + current, 0);
  return sum;
}

console.log(calculateSum([1, 2, 3, 4, 5]));
