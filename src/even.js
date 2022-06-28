import readlineSync from 'readline-sync';
import { getNumber } from '../random/randomNumb.js';

const brainEven = () => {
	
console.log('node bin/brain-games.js');
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have your name? ');
console.log(`Hi ${userName}!`);
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const roundsCount = 3;
for (let i = 0; i < roundsCount; i += 1) {
  let resultRandomNumb = getNumber();
  console.log(`Question: ${resultRandomNumb}`);
  const userAnswer = readlineSync.question('Your answer: ');
  const isNumberEven = () => resultRandomNumb % 2 === 0;
  const rightAnswer = isNumberEven(resultRandomNumb) ? 'yes' : 'no';
  const getEven = (userAnswer) => {
    if (userAnswer.toLowerCase() === rightAnswer.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, '${userName}!'`);
    return;
  }
  };
  getEven(userAnswer);
if (i == 2){
  console.log(`Congratulations, ${userName}!`)
}
}
};
brainEven();
export { brainEven };