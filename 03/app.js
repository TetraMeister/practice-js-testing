export default function randomNumber(min, max) {
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new Error('Zły typ danych w funkcji randomNumber()')
  }

  if (min === 1 && max === 1) {
    return 1;
  }
}