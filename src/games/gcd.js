import getRandomNumber from '../utilites.js';
import run from '../index.js';

const rules = 'Find the greatest common divisor of given numbers.';

const getRightAnwser = (num1, num2) => {
  let result = 1;
  if (num1 === num2) return num1;
  const greatestNumber = num1 > num2 ? num1 : num2;
  for (let i = greatestNumber - 1; i > 1; i -= 1) {
    if (num1 % i === 0 && num2 % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};

const prepareData = () => {
  const nubmerOne = getRandomNumber(1, 100);
  const numberTwo = getRandomNumber(1, 100);
  const exercise = `${nubmerOne} ${numberTwo}`;
  const rightAnswer = getRightAnwser(nubmerOne, numberTwo).toString();

  return [exercise, rightAnswer];
};

const gameGcd = () => run(rules, prepareData);

export default gameGcd;
