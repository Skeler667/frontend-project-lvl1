import getNumber from '../randomNumb.js';
import gameEngine from '../index.js';

const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (number) => number % 2 === 0;
const isFinishedGameData = () => {
  const question = getNumber(1, 10);
  const rightAnswer = isEven(question) ? 'yes' : 'no';
  return [question, rightAnswer];
};
const startBrainEven = gameEngine(rules, isFinishedGameData);
export default startBrainEven;
