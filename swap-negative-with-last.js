const swapNegativeWithLast = (array) => {
  if (!Array.isArray(array)) throw Error('Is not array');
  if (array.length === 0) return [];

  let maxNegative = Number.NEGATIVE_INFINITY;
  let maxNegativeIndex = -1;

  for (let i = 0; i < array.length; i++) {
    if (typeof array[i] !== 'number') throw Error(`Element in array by index ${i} is not number`);

    if (array[i] < 0 && array[i] > maxNegative) {
      maxNegative = array[i];
      maxNegativeIndex = i;
    }
  }

  if (maxNegativeIndex !== -1) {
    const temp = array[maxNegativeIndex];
    array[maxNegativeIndex] = array[array.length - 1];
    array[array.length - 1] = temp;
  }

  return array;
}

module.exports = swapNegativeWithLast;