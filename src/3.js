
// A simple function to generate a random math problem and its answer
function getRandomProblem() {
  const num1 = Math.floor(Math.random() * 10 + 1);
  const num2 = Math.floor(Math.random() * 10 + 1);
  let operator;

  // Randomly select an operator (+, -, x, /)
  switch (Math.floor(Math.random() * 4)) {
    case 0:
      operator = "+";
      break;
    case 1:
      operator = "-";
      break;
    case 2:
      operator = "*";
      break;
    case 3:
      operator = "/";
      break;
  }

  // Calculate the answer based on the problem and operator
  let answer = eval(`${num1}${operator}${num2}`);

  return {
    problem: `${num1} ${operator} ${num2}`,
    answer: answer,
  };
}