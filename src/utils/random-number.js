/**
 * Generates a new random number from 1 to given range
 *
 * @param {number} [range = 50] - The maximum number
 * @returns {number} - the random number from 1 to range
 */

export const randomNumber = (range = 50) => {
    return Math.floor(Math.random() * range) + 1;
 }


