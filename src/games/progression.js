import randomNumber from '../randomnumber.js';

const generateQuestionsForBrainProgression = () => {
  const startingNumber = randomNumber();
  const progressionNumber = randomNumber(1, 10);

  const result = [];

  for (let i = 0; i < 10; i += 1) {
    result.push(startingNumber + i * progressionNumber);
  }

  const extortionIndex = randomNumber(0, result.length - 1);

  const correctAnswer = result[extortionIndex];

  result[extortionIndex] = '..';

  return [result.join(' '), correctAnswer.toString()];
};

export default generateQuestionsForBrainProgression;
