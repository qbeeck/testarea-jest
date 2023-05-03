const swapNegativeWithLast = require('./swap-negative-with-last');

describe('swapNegativeWithLast', () => {
  it('should throw an error if argument is not an array', () => {
    expect(() => swapNegativeWithLast(null)).toThrow('Is not array');
    expect(() => swapNegativeWithLast(undefined)).toThrow('Is not array');
    expect(() => swapNegativeWithLast('string')).toThrow('Is not array');
    expect(() => swapNegativeWithLast({ a: 1 })).toThrow('Is not array');
    expect(() => swapNegativeWithLast(123)).toThrow('Is not array');
  });

  it('should return an empty array if argument is an empty array', () => {
    expect(swapNegativeWithLast([])).toEqual([]);
  });

  it('should throw an error if any element in the array is not a number', () => {
    expect(() => swapNegativeWithLast([1, 2, 'three'])).toThrow('Element in array by index 2 is not number');
    expect(() => swapNegativeWithLast([4, '5', 6])).toThrow('Element in array by index 1 is not number');
    expect(() => swapNegativeWithLast([{ a: 1 }, 2, 3])).toThrow('Element in array by index 0 is not number');
  });

  it('should swap the last element with the maximum negative number in the array', () => {
    expect(swapNegativeWithLast([1, 2, -3])).toEqual([1, 2, -3]);
    expect(swapNegativeWithLast([-1, 2, -3])).toEqual([-3, 2, -1]);
    expect(swapNegativeWithLast([-3, -2, -1])).toEqual([-3, -2, -1]);
    expect(swapNegativeWithLast([-1, -2, -3])).toEqual([-3, -2, -1]);
    expect(swapNegativeWithLast([4, 5, 6])).toEqual([4, 5, 6]);
  });
});
