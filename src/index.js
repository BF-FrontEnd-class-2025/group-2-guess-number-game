import { guessedNumber } from './utils/guessed-number.js';
import { randomNumber } from './utils/random-number.js';

//dom
const dom = {
    guessBtn: document.getElementById('guess-btn'),
    restartBtn: document.getElementById('restart-btn'),
    selectedLevel: document.getElementById('difficulty'),
    userInput: document.getElementById('guess-input'),
    message: document.getElementById('message')
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
    dom.userInput.value = '';
    dom.message.innerText = result;
};

const handleRestart = () => {
    rightNumber = 0;
    dom.selectedLevel.value = '100';
    dom.userInput.value = '';
    dom.message.innerText = "Let's play a new game!";
};

//events
dom.selectedLevel.addEventListener('change', handleChange);
dom.guessBtn.addEventListener('click', handleGuess);
dom.restartBtn.addEventListener('click', handleRestart);
