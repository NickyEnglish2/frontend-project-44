import randomNumber from '../randomnumber.js';
import playGame from '../index.js';

const generateProgression = (startNum, progressNum) => {
  const result = [];

  for (let i = 0; i < 10; i += 1) {
    result.push(startNum + i * progressNum);
  }

  return result;
};

const generateQuestionsForBrainProgression = () => {
  const num1 = randomNumber();
  const num2 = randomNumber(1, 10);

  const progressionArray = generateProgression(num1, num2);

  const extortionIndex = randomNumber(0, progressionArray.length - 1);

  const correctAnswer = progressionArray[extortionIndex];

  progressionArray[extortionIndex] = '..';

  return [progressionArray.join(' '), correctAnswer.toString()];
};

const launchBrainProgression = () => {
  playGame('What number is missing in the progression?', generateQuestionsForBrainProgression);
};

export default launchBrainProgression;
