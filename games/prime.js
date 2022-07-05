import getNumber from '../random/randomNumb.js';
import gameEngine from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

let num = getNumber(1, 50);
const isPrime = (num) =>{
for (let i = 2; i < num; i++) {
  if (num % i === 0) {
    return false;
  }
  return num > 1;
};

const isFinishedGameData = () => {
  const question = num;
  const rightAnswer = prime(num) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startBrainPrime = gameEngine(rules, isFinishedGameData);
export default startBrainPrime;
