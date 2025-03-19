import { guessedNumber } from './utils/guessed-number.js';
import { randomNumber } from './utils/random-number.js';

//dom
const dom = {
    guessBtn: document.getElementById('guess-btn'),
    restartBtn: document.getElementById('restart-btn'),
    selectedLevel: document.getElementById('difficulty'),
    userInput: document.getElementById('guess-input'),
    message: document.getElementById('message'),
    container: document.getElementById('game-container')
};

//handlers
let rightNumber = 0;
const handleChange = () => {
    const selectedRange = dom.selectedLevel.value;
    rightNumber = randomNumber(selectedRange);
};

const handleGuess = () => {
    if (rightNumber === 0) {
        rightNumber = randomNumber(dom.selectedLevel.value);
    }
    const userGuess = Number(dom.userInput.value);
    const result = guessedNumber(rightNumber, userGuess);
    dom.message.innerText = result;

    if (result === 'You won!') {
        dom.container.classList.add('win');
    }
};

const handleRestart = () => {
    rightNumber = 0;
    dom.container.classList.remove('win');
    dom.selectedLevel.value = '100';
    dom.userInput.value = '';
    dom.message.innerText = "Let's play a new game!";
};

//events
dom.selectedLevel.addEventListener('change', handleChange);
dom.guessBtn.addEventListener('click', handleGuess);
dom.restartBtn.addEventListener('click', handleRestart);
