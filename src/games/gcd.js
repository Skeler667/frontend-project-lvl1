import { getRandomNumber } from '../utilites.js';
import run from '../index.js';

const minRange = 1;
const maxRange = 50;

const rule = 'Find the greatest common divisor of given numbers.';
const calculateGCD = (firstNumber, secondNumber) => {
return secondNumber === 0 ? firstNumber : calculateGCD(secondNumber, firstNumber % secondNumber);
};
const generateRound = () => {
  const firstNumber = getRandomNumber(minRange, maxRange);
  const secondNumber = getRandomNumber(minRange, maxRange);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = `${calculateGCD(firstNumber, secondNumber)}`;
  return [question, rightAnswer];
};

export default () => {
  run(rule, generateRound);
};
