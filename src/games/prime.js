import randomNumber from '../randomnumber.js';
import getAnswer from '../getanswer.js';

const isPrime = (num6) => {
  if (num6 <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num6); i += 1) {
    if (num6 % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionsForPrimeNumber = () => {
  const primeNumber = randomNumber();

  const correctAnswer = getAnswer(isPrime(primeNumber));

  return [primeNumber, correctAnswer];
};

export default generateQuestionsForPrimeNumber;
