import readlineSync from 'readline-sync';

const askingQuestion = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello ${userName}!`);
};

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  askingQuestion();
};

export default greetingUser;
