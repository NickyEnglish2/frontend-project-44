import randomNumber from '../randomnumber.js';

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
  const num2 = randomNumber();
  const num3 = randomNumber();

  const gcdAnswer = gcd(num2, num3);
  const gcdQuestion = `${num2} ${num3}`;

  return [gcdQuestion, gcdAnswer.toString()];
};

export default generateQuestionsForGCD;
