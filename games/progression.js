import getNumber from '../random/randomNumb.js';
import gameEngine from '../src/index.js';

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
  const startNum = getNumber(1, 10);
  const step = getNumber(1, 20);
  const n = 10;
  const hidden = getNumber(1, n);

  const answer = `${findProgressionMember(startNum, step, hidden)}`;
  const question = generateProgression(startNum, step, hidden, n);
  return [question, answer];
};

const startBrainProgression = gameEngine(rules, prepareGameData);
export default startBrainProgression;
