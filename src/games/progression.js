import { getRandomNumber, getRandomIndex } from '../utilites.js';
import run from '../index.js';

const rule = 'What number is missing in the progression?';
const minLength = 6;
const maxLength = 10;
const minStart = 1;
const maxStart = 50;
const minStep = 1;
const maxStep = 7;

const createProgression = (start, step, length) => {
    const progression = [];
    for (let i = 0; i < length; i += 1) {
      progression.push(i * step + start);
    }
    return progression;
  };

const generateRound = () => {
  const length = getRandomNumber(minLength, maxLength);
  const step = getRandomNumber(minStep, maxStep);
  const start = getRandomNumber(minStart, maxStart);

  const progression = createProgression(start, step, length);
  const hiddenIndex = getRandomIndex(progression);
  const answer = String(progression[hiddenIndex]);
  progression[hiddenIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  run(rule, generateRound);
};
