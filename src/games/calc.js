import randomNumber from '../randomnumber.js';
import playGame from '../index.js';

const whichOperator = () => {
  const operations = ['+', '-', '*'];
  const operatorToChoose = operations[randomNumber(0, operations.length - 1)];

  return operatorToChoose;
};

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
  const numb1 = randomNumber();
  const numb2 = randomNumber();
  const rightOperator = whichOperator();

  const answerForCalcGame = calcAnswer(numb1, numb2, rightOperator);
  const question = `${numb1} ${rightOperator} ${numb2}`;

  return [question, answerForCalcGame.toString()];
};

const launchBrainCalc = () => {
  playGame('What is the result of the expression?', generateQuestionsForCalculator);
};

export default launchBrainCalc;
