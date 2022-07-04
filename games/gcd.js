import getNumber from '../random/randomNumb.js';
import gameEngine from '../src/index.js';

const rules = 'asdasdasdasdasdasd';
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
