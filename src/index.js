import readlineSync from 'readline-sync';

const playGame = (gameDescription, generatedQuestionAndAnswer) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);

  console.log(gameDescription);

  const roundsCount = 3;
  for (let i = 1; i <= roundsCount; i += 1) {
    const [question, correctAnswer] = generatedQuestionAndAnswer();

    console.log(`Question: ${question}`);
    const userAnswer = readlineSync.question('Your Answer: ');

    if (userAnswer !== correctAnswer) {
      console.log(`'${userAnswer}' is wrong ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default playGame;
