'use strict';

// DOM Element Selection

// const messageEl = document.querySelector(".message");
// console.log(messageEl);

// change the text content of messageEl
// messageEl.textContent = 'Hello from JavaScrpt';

const scoreEl = document.querySelector('.score');
// scoreEl.textContent = 15;

 const highscoreEl = document.querySelector('.highscore');
// highscoreEl.textContent = 18;

 const guessInputEl = document.querySelector('.guess');
// guessInputEl.value = 6;

// Game state variables

let secretNumber = Math.trunc(Math.random() * 20) + 1;
console.log('Your secret number is: ', secretNumber);

let score = 30;
let highscore = 0;

document.querySelector(' .score').textContent = score;
document.querySelector(' .highscore').textContent = highscore;

////////////
// basic game logic 
document.querySelector(' .check').addEventListener('click', function () {
    // code block

    console.log ('Check button clicked!');
    const guess = Number(document.querySelector(' .guess').value);
    console.log('Players guessed: ', guess);

    // input validation

    if (guess < 1 || guess > 20) {
        document.querySelector(' .message').textContent = 'Number must be between 1 and 20. Please try Again !';
        return;
    }
    if (!guess) {
       document.querySelector(' .message').textContent = 'Please Input a number !';
    }
if (guess === secretNumber) {
    //
    console.log('Correct guess !');
    document.querySelector(' .message').textContent = 'Correct Number !';
    document.querySelector(' .number').textContent = secretNumber;
    if (score > highscore) {
        highscore = score;
        document.querySelector(' .highscore').textContent = highscore;
    }
    document.querySelector(' .guess').disabled = true;
    document.querySelector(' .check').disabled = true;
    document.querySelector(' .message').textContent = 'You Won!';
    document.body.style.backgroundColor = 'green';
    document.querySelector(' .guess').value = '';
} else if (guess > secretNumber) {
    console.log('Too high !');
    document.querySelector(' .message').textContent = 'Too high !';
    score--;
    document.querySelector(' .score').textContent = score;
    if (score < 1) {
        document.querySelector(' .message').textContent = 'Game Over! please press again';
        document.querySelector(' .number').textContent = secretNumber;
        document.querySelector(' .guess').disabled = true;
        document.querySelector(' .check').disabled = true;
        document.body.style.backgroundColor = 'red';
        document.querySelector(' .guess').value = '';
       
    }
} else if (guess < secretNumber) {


    document.querySelector(' .message').textContent = 'Too Low !';
    console.log('Too Low !');
    score--;

    if (score < 1) {
        document.querySelector(' .message').textContent = 'Game Over! please press again';
        document.querySelector(' .number').textContent = secretNumber;
    document.querySelector(' .guess').disabled = true;
    document.querySelector(' .check').disabled = true;
    document.querySelector(' .message').textContent = 'You Won!';
    document.body.style.backgroundColor = 'green';
    document.querySelector(' .guess').value = '';
    }
}
});

document.querySelector(' .again').addEventListener('click', function() {
    // block
    score = 30;
    secretNumber = Math.trunc(Math.random() * 20) + 1;
     document.querySelector(' .message').textContent = 'Start guessing...';
     // restart secret Number
     document.querySelector(' .number').textContent = '?';
     // restart score
     document.querySelector(' .score').textContent = score;

     // empty the guess input field
     document.querySelector(' .guess').value = '';

     // enable guess and check input buttons

     document.querySelector(' .guess').disabled = false;
     document.querySelector(' .check').disabled = false;
     document.body.style.backgroundColor = '';

     console.log('Your new secret number is: ', secretNumber);
   
   
  
});






