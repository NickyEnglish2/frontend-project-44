import randomNumber from '../randomnumber.js';
import playGame from '../index.js';

const generateProgression = () => {
  const startingNumber = randomNumber();
  const progressionNumber = randomNumber(1, 10);

  const result = [];

  for (let i = 0; i < 10; i += 1) {
    result.push(startingNumber + i * progressionNumber);
  }

  return result;
};

const generateQuestionsForBrainProgression = () => {
  const progressionArray = generateProgression();

  const extortionIndex = randomNumber(0, progressionArray.length - 1);

  const correctAnswer = progressionArray[extortionIndex];

  progressionArray[extortionIndex] = '..';

  return [progressionArray.join(' '), correctAnswer.toString()];
};

const launchBrainProgression = () => {
  playGame('What number is missing in the progression?', generateQuestionsForBrainProgression);
};

export default launchBrainProgression;
