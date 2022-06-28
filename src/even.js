import readlineSync from 'readline-sync';
import { getNumber } from '../random/randomNumb.js';

const brainEven = () => {
  const resultRandomNumb = getNumber();
  console.log('node bin/brain-games.js');
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const roundsCount = 3;
  for (let i = 0; i < roundsCount; i += 1) {
    const randomNumber = getNumber();
    console.log(`Question: ${randomNumber}`);
    const userAnswer = readlineSync.question('Your answer: ');
    const isNumberEven = () => resultRandomNumb % 2 === 0;
    const rightAnswer = isNumberEven(resultRandomNumb) ? 'yes' : 'no';
    const getEven = () => {
      if (userAnswer.toLowerCase() === rightAnswer.toLowerCase()) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, '${userName}!'`);
      }
    };
    getEven(userAnswer);
  }
};
brainEven();
export { brainEven };
