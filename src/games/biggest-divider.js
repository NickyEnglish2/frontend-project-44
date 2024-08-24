import randomNumber from '../randomnumber.js';
import playGame from '../index.js';

const gcd = (a, b) => {
  let x = a;
  let y = b;
  while (y !== 0) {
    const temporary = y;
    y = x % y;
    x = temporary;
  }
  return x;
};

const generateQuestionsForGCD = () => {
  const num1 = randomNumber();
  const num2 = randomNumber();

  const gcdAnswer = gcd(num1, num2);
  const gcdQuestion = `${num1} ${num2}`;

  return [gcdQuestion, gcdAnswer.toString()];
};

const launchBrainGCD = () => {
  playGame('Find the greatest common divisor of given numbers.', generateQuestionsForGCD);
};

export default launchBrainGCD;
