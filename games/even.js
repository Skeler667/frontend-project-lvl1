import { getNumber } from '../random/randomNumb.js';
import { gameEngine } from '../src/index.js';

const getEven = (userAnswer, task) => {
	if((userAnswer==='yes' && getNumber%2===0) || (userAnswer==='no' && getNumber%2!==0)){
		console.log('Correct!');
		return true;
	}
	console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, '${userAnswer}!'`);
	return false;
};
let roundGame = 3;
let task = getNumber();
  const isNumberEven = () => task % 2 === 0;
  const rightAnswer = isNumberEven(task) ? 'yes' : 'no';
let rules = 'Answer "yes" if the number is even, otherwise answer "no".';
gameEngine(rules, roundGame[rightAnswer, task]);
export { gameEngine };