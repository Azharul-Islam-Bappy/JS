// Calculator || console version

function addNumber(num1, num2) {
  return num1 + num2;
}
function subtract(num1, num2) {
  return num1 - num2;
}
function multiply(num1, num2) {
  return num1 * num2;
}
function divide(num1, num2) {
  return num1 / num2;
}
function logResult(num1, num2, operator, result) {
  console.log(`${num1} ${operator} ${num2} = ${result}`);
}


// calculate 
function calculate(num1, num2, operator) {
  let result;
  // operator check
  switch (operator) {
    case '+':
      // add numbers 
      result = addNumber(num1, num2);
      logResult(num1, num2, operator, result);
      break;
    case '-':
      // subtract numbers 
      result = subtract(num1, num2);
      logResult(num1, num2, operator, result);
      break;
    case '*':
      // multiply numbers
      result = multiply(num1, num2);
      logResult(num1, num2, operator, result);
      break;
    case '/':
      // divide numbers
      result = divide(num1, num2);
      logResult(num1, num2, operator, result);
      break;
    default:
      // exception or Error 
      console.error('No operator found');
  }
}

calculate(5,20,'*'); // Expected Output: 100