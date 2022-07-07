const getRandomNumber = (min, max) => {
  const minNumber = min;
  const maxNumber = max;
  return Math.floor(Math.random() * (maxNumber - minNumber + 1)) + minNumber;
};
export default getRandomNumber;
