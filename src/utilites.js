export const getRandomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

export const getArrayRandom = (array) => {
  const rand = Math.floor(Math.random() * array.length);
  const rValue = array[rand];
  return rValue;
};
