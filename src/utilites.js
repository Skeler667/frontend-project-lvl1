export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getRandomIndex = (array) => getRandomNumber(0, array.length - 1);
