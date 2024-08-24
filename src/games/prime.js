import randomNumber from '../randomnumber.js';
import playGame from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }

  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const generateQuestionsForPrimeNumber = () => {
  const primeNumber = randomNumber();

  const correctAnswer = isPrime(primeNumber) ? 'yes' : 'no';

  return [primeNumber, correctAnswer];
};

const launchBrainPrime = () => {
  playGame('Answer "yes" if given number is prime. Otherwise answer "no".', generateQuestionsForPrimeNumber);
};

export default launchBrainPrime;
