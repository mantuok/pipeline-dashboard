export const getRandomResponse = (onSuccess, onFail) => {
  const random = Math.random() * 10;
  return random >= 3 ? onSuccess : onFail;
}