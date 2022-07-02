import readlineSync from 'readline-sync';
import { getNumber } from '../random/randomNumb.js';

const gameEngine = (rules, rightAnswer, task, getResult) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hi ${userName}!`);
  console.log(rules);
  
  const roundsCount = 3;
  let getRightCount = 0;
  for (let i = 0; i < roundsCount; i += 1) {
  console.log(task);
    const userAnswer = readlineSync.question('Your answer: ');
// const isNumberEven = () => task % 2 === 0;
//   const rightAnswer = isNumberEven(task) ? 'yes' : 'no';
    const getEven = (userAnswer) => {
      if (userAnswer === rightAnswer) {
        console.log('Correct!');
      } else {
        console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, '${userName}!'`);
      }
    };
    getEven(userAnswer);
    // if (userAnswer[i] == rightAnswer[i]) {
    //   getRightCount = getRightCount += 1;
    // }
  }
  // if (getRightCount == 3) {
  //   console.log(`Congratulations, ${userName}!`);
  // }
};
export { gameEngine };
