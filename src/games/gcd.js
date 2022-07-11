import { getRandomNumber } from '../utilites.js';
import run from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const findGCD = (num1, num2) => {
  let result = 1;
  if (num1 === num2) return num1;
  const greatestNumber = num1 > num2 ? num1 : num2;
  for (let i = greatestNumber - 1; i > 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};

const minNumberOne = 1;
const maxNumberOne = 100;
const minNumberTwo = 1;
const maxNumberTwo = 100;

const getGameGCD = () => {
  const nubmerOne = getRandomNumber(minNumberOne, maxNumberOne);
  const numberTwo = getRandomNumber(minNumberTwo, maxNumberTwo);
  const question = `${nubmerOne} ${numberTwo}`;
  const rightAnswer = findGCD(nubmerOne, numberTwo).toString();

  return [question, rightAnswer];
};

const gameGcd = () => run(rule, getGameGCD);

export default gameGcd;
