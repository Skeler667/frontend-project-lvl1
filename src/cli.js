import readlineSync from 'readline-sync';

function name() {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}!`);
}
export default name;
