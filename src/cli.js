import readlineSync from 'readline-sync';

const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  return userName;
};

const launchBrainGame = () => {
  const playerName = greetingUser();
  console.log(`Hello, ${playerName}!`);
};

export { greetingUser, launchBrainGame };
