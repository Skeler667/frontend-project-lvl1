import getRandomNumber from '../utilites.js';
import run from '../index.js';

const rules = 'What number is missing in this progression?';

const findProgressionMember = (startNum, step, n) => {
  if (n > 1) {
    return startNum + (step * (n - 1));
  }
  return startNum;
};

const generateProgression = (startNum, step, hidden, n) => {
  let progression = '';
  for (let i = 1; i <= n; i += 1) {
    if (i === hidden) {
      progression += '.. ';
    } else {
      progression += `${findProgressionMember(startNum, step, i)} `;
    }
  }

  return progression;
};

const prepareGameData = () => {
  const startNum = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 20);
  const n = 10;
  const hidden = getRandomNumber(1, n);

  const answer = `${findProgressionMember(startNum, step, hidden)}`;
  const question = generateProgression(startNum, step, hidden, n);
  return [question, answer];
};

const startBrainProgression = () => {
  run(rules, prepareGameData);
};
export default startBrainProgression;
