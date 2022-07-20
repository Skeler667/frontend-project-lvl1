import { getRandomNumber, getRandomIndex } from '../utilites.js';
import run from '../index.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRange = 0;
const maxRange = 50;

const calculate = (operator, number1, number2) => {
  switch (operator) {
    case '+':
      return number1 + number2;
    case '-':
      return number1 - number2;
    case '*':
      return number1 * number2;
    default:
      throw new Error(`Unkown operator: '${operator}'!`);
  }
};

const generateRound = () => {
  const number1 = getRandomNumber(minRange, maxRange);
  const number2 = getRandomNumber(minRange, maxRange);
  const operator = operators[getRandomIndex(operators)];
  const question = `${number1} ${operator} ${number2}`;
  const rightAnswer = String(calculate(operator, number1, number2));
  return [question, rightAnswer];
};

export default () => {
  run(rule, generateRound);
};
