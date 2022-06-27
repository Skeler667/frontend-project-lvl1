#!/usr/bin/env node
import name from '../src/cli.js';
import readlineSync from 'readline-sync';
let userName
console.log('node bin/brain-games.js');
console.log('Welcome to the Brain Games!');
name();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
// функция нахождения рандомного числа.
const getRandomNumb = (max) => {
  return Math.floor(Math.random() * 10);
};
// вывод вопроса с рандомным числом.
console.log(`Question: ${getRandomNumb()}`);
// ответ на вопрос с рандомным числом.
let variant = readlineSync.question('Your answer: ');
// функция проверки и вывод результата рандомного числа.
const getEven = (variant) => {
	if (getRandomNumb % 2 == 0 && variant == 'yes') {
		console.log('Correct!')
	}else if (getRandomNumb % 2 !== 0 && variant == 'no') {
		console.log('Correct!')
	}else {
		console.log(`'${variant}' is wrong answer ;(. Correct answer was 'no'.Let's try again, ${userName}`);
	}
}
getEven(variant);