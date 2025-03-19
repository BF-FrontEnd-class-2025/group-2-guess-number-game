/**
 * Check if user given number is the same as the random number in the range
 *
 * @param {number} [rightNum = 1] - The number that user is looking for in the game
 * @param {number} [userGuess = 1] - The number that user gave
 * @returns {string} - the result of guessing the number
 */

export const guessedNumber = (rightNum = 1, userGuess = 1) => {
    let result = '';
    if(userGuess === rightNum) {
        result = 'You won!';
    }
    else if(userGuess > rightNum) {
        result = 'Too high!';
    }
    else {
        result = 'Too low!';
    }

    return result;
 }


