/**
 * Correct Guess Test: Ensures the function responds with "You won!" when the user's guess matches the target number
 * Too High Test: Ensures the function responds with "Too high!" when the user's guess exceeds the target number.
 * Too Low Test: Ensures the function responds with "Too low!" when the user's guess is below the target number.
 */


import { guessedNumber } from './guessed-number.js';

describe('guessedNumber function', () => {
  it('should return "You won!" when the guess is correct', () => {
    const result = guessedNumber(10, 10); // rightNum = 10, userGuess = 10
    expect(result).toBe('You won!');
  });

  it('should return "Too high!" when the guess is higher than the correct number', () => {
    const result = guessedNumber(5, 7); // rightNum = 5, userGuess = 7
    expect(result).toBe('Too high!');
  });

  it('should return "Too low!" when the guess is lower than the correct number', () => {
    const result = guessedNumber(8, 6); // rightNum = 8, userGuess = 6
    expect(result).toBe('Too low!');
  });
});