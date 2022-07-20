import { getRandomNumber, getRandomIndex } from '../utilites.js';
import run from '../index.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRange = 0;
const maxRange = 50;

const calculate = (operator, x, y) => {
  switch (operator) {
    case '+':
      return x + y;
    case '-':
      return x - y;
    case '*':
      return x * y;
    default:
      throw new Error(`Unkown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const x = getRandomNumber(minRange, maxRange);
  const y = getRandomNumber(minRange, maxRange);
  const operator = operators[getRandomIndex(operators)];
  const question = `${x} ${operator} ${y}`;
  const rightAnswer = String(calculate(x, operator, y));
  return [question, rightAnswer];
};

export default () => {
  run(rule, generateRound);
};
