import readlineSync from 'readline-sync';

const gameEngine = (rules, roundGame) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(`${rules}`);

  const roundsCount = 3;

  for (let i = 0; i < roundsCount; i += 1) {
   const [task, rightAnswer] = roundGame[i];
    console.log(`Question: ${task}`);
    const getEven = (userAnswer) => {
      if (userAnswer.toLowerCase() === rightAnswer.toLowerCase()) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, '${userName}!'`);
      }
    };
    getEven(userAnswer);
    if (userAnswer[i] == rightAnswer[i]) {
      getRightCount = getRightCount += 1;
    }
  }
  if (getRightCount == 3) {
    console.log(`Congratulations, ${userName}!`);
  }
};
export { gameEngine };
