export default function randomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Zły typ danych w funkcji randomNumber()')
  }
  if (min > max) {
    throw new Error('Źle ustawiony zakres funkcji randomNumber()')
  }
  return Math.floor(Math.random() * (max - min + 1)) + min
}