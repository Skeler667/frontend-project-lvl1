import { getNumber } from '../random/randomNumb.js';
import { gameEngine } from '../src/index.js';


	let task = console.log(`Question: ${getNumber()}`);
	let getResult = () => task % 2 === 0;
	let rightAnswer = getResult(task) ? 'yes' : 'no';
	rules = 'Answer "yes" if the number is even, otherwise answer "no".';

const getResult = (userAnswer, task) => {
	if((userAnswer==='yes' && getNumber%2===0) || (userAnswer==='no' && getNumber%2!==0)){
		console.log('Correct!');
		return true;
	}
	console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, '${userAnswer}!'`);
	return false;
};
gameEngine(rules, rightAnswer, task, getResult);
export { gameEngine };