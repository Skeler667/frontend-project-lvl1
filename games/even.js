import readlineSync from 'readline-sync';
import { getNumber } from '../random/randomNumb.js';
import { gameEngine } from '../src/index.js';
let rules = console.log('Answer "yes" if the number is even, otherwise answer "no".');
gameEngine(rules, getNumber);
export { rules, gameEngine};