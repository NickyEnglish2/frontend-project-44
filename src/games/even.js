import randomNumber from '../randomnumber.js';
import playGame from '../index.js';

const isEven = (num) => num % 2 === 0;

const generateQuestionsForEven = () => {
  const num1 = randomNumber();

  const answer = isEven(num1) ? 'yes' : 'no';

  return [num1, answer];
};

const launchBrainEven = () => {
  playGame('Answer "yes" if the number is even, otherwise answer "no".', generateQuestionsForEven);
};

export default launchBrainEven;
