import { getRandomNumber } from '../utilites.js';
import run from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const getGCD = (firstNumber, secondNumber) => {
  let x = firstNumber;
  let y = secondNumber;

  while (x !== 0 && y !== 0) {
    if (x > y) {
      x %= y;
    } else {
      y %= x;
    }
  }

  return String(x + y);
};

const getGCDRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const answer = getGCD(firstNumber, secondNumber);
  const question = `question: ${firstNumber} ${secondNumber}`;
  return [question, answer];
};
const getBrainGcdRound = () => {
  run(rule, getGCDRound);
};

export default getBrainGcdRound;
