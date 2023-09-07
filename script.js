'use strict';

/*
// select element in html file
console.log(document.querySelector('.message'));

// select just the text of the element
console.log(document.querySelector('.message').textContent);

// DOM (Document Object Model) Manipulation
// DOM is basically the connection between html and javascript

document.querySelector('.message').textContent = 'Correct Number 🥳🎉'
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/

// DEFINE SECRET NUMBER:

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;


document.querySelector('.check').addEventListener
    ('click', function () {
        const guess = Number(document.querySelector('.guess').value);
        console.log(guess, typeof guess);

        // when no input
        if (!guess) {
            document.querySelector('.message').textContent = '⛔️ No number! ⛔️';
        }

        // when player guesses correctly (WIN CONDITION)
        else if (guess === secretNumber) {
            document.querySelector('.message').textContent = '🎉🎉🎉 CORRECT NUMBER 🎉🎉🎉';

            document.querySelector('.number').textContent = secretNumber;

            document.querySelector('body').style.backgroundColor = '#60b347';

            document.querySelector('.number').style.width = '30rem';
            if (score > highScore) {
                highScore = score;
                document.querySelector('.highscore').textContent = highScore;
            }

        }

        // when guess is too high
        else if (guess > secretNumber) {
            if (score > 0) {
                document.querySelector('.message').textContent = '⚠️⚠️⚠️ Too High ⚠️⚠️⚠️';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '⛔️ You lost the game... ⛔️';
            }
        }

        // when guess is too low
        else if (guess < secretNumber) {
            if (score > 0) {
                document.querySelector('.message').textContent = '⚠️⚠️⚠️ Too Low ⚠️⚠️⚠️';
                score--;
                document.querySelector('.score').textContent = score;
            } else {
                document.querySelector('.message').textContent = '⛔️ You lost the game... ⛔️';
            }
        }

    });
/////////////////////////////////////////
// CODING CHALLENG #1
// MAKE 'AGAIN!' BUTTON WORK:
/* 
Implement game reset functionality, so that the player can make a new game!

Here is how: 

1. Select the element with the 'again' class and attach a click event handler.
2. In the handler function, restore initial values of the score and secretNumber variables.
3. Restore the initial conditions of the message, number, score and guess input field.
4. also restore the original background color (#222) and number width (15rem).
*/

document.querySelector('.again').addEventListener
    ('click', function () {
        document.querySelector('.message').textContent = 'Start guessing...';
        document.querySelector('.score').textContent = 20;
        document.querySelector('body').style.backgroundColor = '#222';
        document.querySelector('.number').style.width = '15rem';
        document.querySelector('.number').textContent = '?';
        document.querySelector('.guess').value = '';
        secretNumber = Math.trunc(Math.random() * 20) + 1;
        score = 20;
    });