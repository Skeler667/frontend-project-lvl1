import getNumber from '../randomNumb.js';
import gameEngine from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';
const calculateGCD = (firstNumber, secondNumber) => {
  if (secondNumber === 0) {
    return firstNumber;
  }
  if (secondNumber > firstNumber) {
    return calculateGCD(secondNumber, firstNumber);
  }
  return calculateGCD(secondNumber, firstNumber % secondNumber);
};
const prepareGameData = () => {
  const firstNumber = getNumber(1, 50);
  const secondNumber = getNumber(1, 50);
  const question = `${firstNumber} ${secondNumber}`;
  const rightAnswer = `${calculateGCD(firstNumber, secondNumber)}`;
  return [question, rightAnswer];
};

const startBrainGcd = gameEngine(rules, prepareGameData);
export default startBrainGcd;
