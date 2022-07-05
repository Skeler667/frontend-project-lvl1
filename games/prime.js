import getNumber from '../random/randomNumb.js';
import gameEngine from '../src/index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';


const prime = () =>{
for (let i = 2; i < question; i++) {
  if (question % i == 0) {
    return false;
  }
  return true;
};

const isFinishedGameData = () => {
  const question = getNumber(1, 50);
  const rightAnswer = prime(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startBrainPrime = gameEngine(rules, isFinishedGameData);
export default startBrainPrime;
