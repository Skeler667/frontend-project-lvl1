import readlineSync from 'readline-sync';
function name(usNam){
	let readlineSync = import('readline-sync');
	const userName = readlineSync.question('May I have your name? ');
	console.log('Hi ' + userName + '!');
};
export default name;