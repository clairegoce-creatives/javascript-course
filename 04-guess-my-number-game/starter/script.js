'use strict';
// constants
const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const START_SCORE = 30;

// Cached selectors
const bodyEl = document.body;
const messageEl = document.querySelector('.message');
const scoreEl = document.querySelector('.score');
const numberEl = document.querySelector('.number');
const highscoreEl = document.querySelector('.highscore');
 const guessInputEl = document.querySelector('.guess');
const checkBtnEl = document.querySelector('.check');
const againBtnEl = document.querySelector('.again');

// UI Helpers
function setMessage(text) {
    messageEl.textContent = text;
}

function setNumber(value) {
    numberEl.textContent = value;
}

function setScore(value) {
    scoreEl.textContent = value;
}

function setHighscore(value) {
    highscoreEl.textContent = value;
}
function setBackground(color) {
    bodyEl.style.backgroundColor = color;
}

function disablePlay(disabled) {
    guessInputEl.disabled = disabled;
    checkBtnEl.disabled = disabled;
}

function clearInput() {
    guessInputEl.value = '';
}
// Game state variables

let secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;
console.log('Your secret number is: ', secretNumber);

let score = START_SCORE;
let highscore = 0;

function resetGameState() {
    score = START_SCORE;
    secretNumber = Math.trunc(Math.random() * MAX_NUMBER) + MIN_NUMBER;

}
function renderInitialUI() {
    setMessage('Start guessing...');
    setNumber('?');
    setScore(score);
    clearInput();
    disablePlay(false);
    setBackground('');
    console.log('Your new secret number is: ', secretNumber);

}

renderInitialUI();


////////////
// basic game logic 
checkBtnEl.addEventListener('click', function () {
    const guess = Number(guessInputEl.value);
    console.log('Players guessed: ', guess);
    // code block
    // input validation

    if (!guess) {
       document.querySelector(' .message').textContent = 'Please Input a number !';
    }
if (guess < MIN_NUMBER || guess > MAX_NUMBER) {
    return setMessage(`
        Number must be in between ${MIN_NUMBER} and ${MAX_NUMBER} !
        `)
}

if (guess === secretNumber) {
    setMessage('You have won !!!!');
    setNumber(secretNumber);
    setBackground('green');
    if (score > highscore) {
        highscore = score;
        setHighscore(highscore);
    }
    disablePlay(true);
    clearInput();
    return;

} setMessage(guess > secretNumber ? 'Too High !' : 'Too Low !');
score--;
setScore(score);

if (score < 1) {
    setMessage('Game Over, Please Press Again!');
    setNumber(secretNumber);
    setBackground('red');
    disablePlay(true);
    clearInput();
}

});

againBtnEl.addEventListener('click', function() {
    resetGameState();
    renderInitialUI();
});

//Allow pressing Enter 
window.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && !checkBtnEl.disabled) {
        checkBtnEl();

    }
});

// Focus Input or Restart 
againBtnEl.addEventListener('Click',  function() {
    guessInputEl.focus();
});








