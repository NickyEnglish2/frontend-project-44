import randomNumber from '../randomnumber.js';
import getAnswer from '../getanswer.js';

const isEven = (num) => num % 2 === 0;

const generateQuestionsForEven = () => {
  const num1 = randomNumber();

  const answer = getAnswer(isEven(num1));

  return [num1, answer];
};

export default generateQuestionsForEven;
