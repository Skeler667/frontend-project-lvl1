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
let userAnswer = readlineSync.question('Your answer: ');
// функция проверки и вывод результата рандомного числа.
const isNumberEven = (number) => number % 2 === 0;

const rightAnswer = isNumberEven(getRandomNumb) ? 'yes' : 'no';

const getEven = (userAnswer) => {
if (userAnswer.toLowerCase() === rightAnswer.toLowerCase()) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer :(. Correct answer was '${rightAnswer}'.\nLet's try again, '${userName}!'`);
      return;
    }
};
getEven(userAnswer);
