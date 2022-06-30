
import { getRandomNumber } from '../random/randomNumb.js';
import { gameEngine } from '../src/index.js';


const isEven = (number, answer) => {
	if((answer==='yes' && number%2===0) || (answer==='no' && number%2!==0)){
		console.log('RIGHT!');
		return true;
	}
	console.log('NO');
	return false;
};

let rules = 'Answer "yes" if the number is even, otherwise answer "no".';
gameEngine(rules, 3, getRandomNumber, isEven);
