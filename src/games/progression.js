import { getRandomNumber } from '../utilites.js';
import run from '../index.js';

const rule = 'What number is missing in the progression?';

const minLength = 6;
const maxLength = 10;
const minStart = 1;
const maxStart = 50;
const minStep = 1;
const maxStep = 7;

const getRightAnwser = () => {
  const lenght = getRandomNumber(minLength, maxLength);
  const step = getRandomNumber(minStep, maxStep);
  const firstNumber = getRandomNumber(minStart, maxStart);
  const result = [firstNumber];
  const hiddenPosition = getRandomNumber(1, lenght);
  for (let i = 0; i < lenght; i += 1) {
    result.push(result[i] + step);
  }
  const rightAnswer = result[hiddenPosition];
  result[hiddenPosition] = '..';
  return [result.join(' '), rightAnswer.toString()];
};

const gameProgression = () => {
  run(rule, getRightAnwser);
};

export default gameProgression;
