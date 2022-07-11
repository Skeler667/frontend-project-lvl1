import { getRandomNumber } from '../utilites.js';
import run from '../index.js';

const rule = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const minRange = 0;
const maxRange = 50;

const calculate = (x, operator, y) => {
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

const getGameCalculate = () => {
  const x = getRandomNumber(minRange, maxRange);
  const y = getRandomNumber(minRange, maxRange);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${x} ${randomOperator} ${y}`;
  const rightAnswer = String(calculate(x, randomOperator, y));
  return [question, rightAnswer];
};

const startBrainCalc = () => {
  run(rule, getGameCalculate);
};
export default startBrainCalc;
