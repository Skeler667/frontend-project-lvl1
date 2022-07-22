import { getRandomNumber } from '../utilites.js';
import run from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const minRange = 1;
const maxRange = 10;

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const question = getRandomNumber(minRange, maxRange);
  const answer = isEven(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  run(rule, generateRound);
};
