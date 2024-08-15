import randomNumber from '../randomnumber.js';

const generateQuestionsForCalculator = () => {
  const number1 = randomNumber();
  const number2 = randomNumber();

  const operations = ['+', '-', '*'];
  const whichOperator = operations[Math.floor(Math.random() * operations.length)];

  let answer = 0;
  switch (whichOperator) {
    case '+':
      answer = number1 + number2;
      break;
    case '-':
      answer = number1 - number2;
      break;
    case '*':
      answer = number1 * number2;
      break;
    default:
  }

  const question = `${number1} ${whichOperator} ${number2}`;

  return [question, answer.toString()];
};

export default generateQuestionsForCalculator;
