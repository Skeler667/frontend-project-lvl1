import getNumber from '../random/randomNumb.js';
import gameEngine from '../src/index.js';

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
      console.log(`Unkown operator: '${operator}'!`);
  }
};

const isFinishedGameData = () => {
  const firstNumb = getNumber(1, 50);
  const secondNumb = getNumber(1, 50);
  const randomOperator = operators[getNumber(0, operators.length - 1)];
  const question = `${firstNumb} ${randomOperator} ${secondNumb}`;
  const rightAnswer = String(calc(firstNumb, randomOperator, secondNumb));
  return [question, rightAnswer];
};

const startBrainCalc = gameEngine(rules, isFinishedGameData);
export default startBrainCalc;
