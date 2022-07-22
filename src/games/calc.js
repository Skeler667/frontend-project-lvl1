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
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const operator = operators[getRandomIndex(operators)];
  const question = `${number1} ${operator} ${number2}`;
  const answer = String(calculate(operator, number1, number2));
  return [question, answer];
};

export default () => {
  run(rule, generateRound);
};
