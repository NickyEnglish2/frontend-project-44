import readlineSync from 'readline-sync';
import { greetingUser } from './cli.js';

const playGame = (gameDescription, generatedQuestionAndAnswer) => {
  const playerName = greetingUser();
  console.log(`Hello, ${playerName}!`);

  console.log(gameDescription);

  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = generatedQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${playerName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${playerName}!`);
};

export default playGame;
