import { getRandomNumber } from '../utilites.js';
import run from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minNumber = 1;
const maxNumber = 10;

const isEven = (number) => number % 2 === 0;

const getGameEven = () => {
  const question = getRandomNumber(minNumber, maxNumber);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};

const startBrainEven = () => {
  run(rule, getGameEven);
};
export default startBrainEven;
