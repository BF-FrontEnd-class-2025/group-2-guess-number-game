import { randomNumber } from './random-number.js';

describe('randomNumber function', () => {
  it('should return a number between 1 and the given range (inclusive)', () => {
    const range = 100; // Example range
    const number = randomNumber(range);

    expect(number).toBeGreaterThanOrEqual(1); // Check if number is at least 1
    expect(number).toBeLessThanOrEqual(range); // Check if number does not exceed range
  });

  it('should default to 50 when no range is provided', () => {
    const number = randomNumber(); // Call without arguments

    expect(number).toBeGreaterThanOrEqual(1);
    expect(number).toBeLessThanOrEqual(50);
  });
});
