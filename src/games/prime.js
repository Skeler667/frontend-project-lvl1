import { getRandomNumber } from '../utilites.js';
import run from '../index.js';

const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const prepareGameData = () => {
  const number = getRandomNumber(2, 100);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, rightAnswer];
};

const startBrainPrime = () => {
  run(rules, prepareGameData);
};
export default startBrainPrime;
