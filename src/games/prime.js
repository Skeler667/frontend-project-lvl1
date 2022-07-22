import { getRandomNumber } from '../utilites.js';
import run from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const minRange = 1;
const maxRange = 100;

const isPrime = (number) => {
  if (number < 2) {
    return false;
  }
  const max = Math.sqrt(number);
  for (let i = 2; i <= max; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
};

const generateRound = () => {
  const question = getRandomNumber(minRange, maxRange);
  const answer = isPrime(question) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  run(rule, generateRound);
};
