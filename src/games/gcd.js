import { getRandomNumber } from '../utilites.js';
import run from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';
const minRange = 1;
const maxRange = 50;

const gcd = (x, y) => (y === 0 ? x : gcd(y, x % y));

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const question = `${number1} ${number2}`;
  const answer = `${gcd(number1, number2)}`;
  return [question, answer];
};

export default () => {
  run(rule, generateRound);
};
