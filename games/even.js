import { getNumber } from '../random/randomNumb.js';
import { gameEngine } from '../src/index.js';

const getEven = (userAnswer, task) => {
	if((userAnswer==='yes' && getNumber%2===0) || (userAnswer==='no' && getNumber%2!==0)){
		console.log('Correct!');
		return true;
	}
	console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '{rightAnswer}'.\nLet's try again, '!'`);
	return false;
};


let rules = 'Answer "yes" if the number is even, otherwise answer "no".';
gameEngine(rules, 3, getNumber, getEven);
export { gameEngine };