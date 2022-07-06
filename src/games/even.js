import getRandomNumber from '../utilites.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const prepareGameData = () => {
  const question = getRandomNumber(1, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};
const startBrainEven = () => {
  gameEngine(rules, prepareGameData);
};
export default startBrainEven;
