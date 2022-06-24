function name(usNam){
	import readlineSync from 'readline-sync';
	let readlineSync = import('readline-sync');
	const userName = readlineSync.question('May I have your name? ');
	console.log('Hi ' + userName + '!');
};
export default name;