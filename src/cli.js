function name(usNam){
	let readlineSync = import('readline-sync');
let userName = readlineSync.question('May I have your name? ')
console.log('Hi ' + userName + '!')
};
export default name;