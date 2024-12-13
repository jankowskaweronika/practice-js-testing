export default function randomNumber(min, max) {
  if (!isNumber(min)) {
    throwError('min must be a number');
  }
  if (!isNumber(max)) {
    throwError('max must be a number');
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function throwError(msg) {
  throw new Error(msg);
}

function isNumber(n) {
  return typeof n === 'number' && !Number.isNaN(n);
}