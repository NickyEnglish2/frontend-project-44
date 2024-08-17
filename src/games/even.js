import randomNumber from '../randomnumber.js';

const isEven = (num) => num % 2 === 0;

const generateQuestionsForEven = () => {
  const num1 = randomNumber();

  const answer = isEven(num1) ? 'yes' : 'no';

  return [num1, answer];
};

export default generateQuestionsForEven;
