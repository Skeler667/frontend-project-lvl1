import { getRandomNumber } from '../utilites.js';
import run from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (number) => {
  for (let i = 2, max = Math.sqrt(number); i <= max; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
};

const minNumber = 2;
const maxNumber = 100;

const getGamePrime = () => {
  const number = getRandomNumber(minNumber, maxNumber);
  const rightAnswer = isPrime(number) ? 'yes' : 'no';
  return [number, rightAnswer];
};

const gamePrime = () => {
  run(rule, getGamePrime);
};
export default gamePrime;
