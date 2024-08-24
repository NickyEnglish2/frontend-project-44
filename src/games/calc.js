import randomNumber from '../randomnumber.js';
import playGame from '../index.js';

const calcAnswer = (number1, number2, operator) => {
  let answer = 0;
  switch (operator) {
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

  return answer;
};

const generateQuestionsForCalculator = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();

  const operations = ['+', '-', '*'];
  const operatorToChoose = operations[randomNumber(0, operations.length - 1)];

  const answerForCalcGame = calcAnswer(num1, num2, operatorToChoose);
  const question = `${num1} ${operatorToChoose} ${num2}`;

  return [question, answerForCalcGame.toString()];
};

const launchBrainCalc = () => {
  playGame('What is the result of the expression?', generateQuestionsForCalculator);
};

export default launchBrainCalc;
