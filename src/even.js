import readlineSync from 'readline-sync';

const randomNumber = () => Math.floor(Math.random() * 100);
const isEven = (num) => num % 2 === 0;

const playGameBrainEven = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  for (let i = 1; i <= 3; i += 1) {
    const numberForQuestion = randomNumber();

    console.log(`Question: ${numberForQuestion}`);
    const userAnswer = readlineSync.question('Your Answer: ');

    const correctAnswer = isEven(numberForQuestion) ? 'yes' : 'no';

    if (userAnswer !== 'yes' && userAnswer !== 'no') {
      console.log(`'${userAnswer}' is wrong ;(. Correct answer was '${correctAnswer}'`);
      return;
    }

    if (userAnswer === correctAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong ;(. Correct answer was '${correctAnswer}'`);
      return;
    }
  }
  console.log('Congratulations!');
};

export default playGameBrainEven;
