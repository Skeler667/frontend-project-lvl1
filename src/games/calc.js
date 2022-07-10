import getRandomNumber from '../utilites.js';
import run from '../index.js';

const rules = 'What is the result of the expression?';
const operators = ['+', '-', '*'];
const calc = (firstNumb, operator, secondNumb) => {
  switch (operator) {
    case '+':
      return firstNumb + secondNumb;
    case '-':
      return firstNumb - secondNumb;
    case '*':
      return firstNumb * secondNumb;
    default:
      throw new Error(`Unkown operator: '${operator}'!`);
  }
};

const prepareGameData = () => {
  const firstNumb = getRandomNumber(1, 50);
  const secondNumb = getRandomNumber(1, 50);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const question = `${firstNumb} ${randomOperator} ${secondNumb}`;
  const rightAnswer = String(calc(firstNumb, randomOperator, secondNumb));
  return [question, rightAnswer];
};

const startBrainCalc = () => {
  run(rules, prepareGameData);
};
export default startBrainCalc;