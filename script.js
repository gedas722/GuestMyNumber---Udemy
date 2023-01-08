'use strict';
/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = 'Correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);
*/
let secreatNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

// kodo optimizavimas - bendrine funkcija zinuciu atvaizdavimui
const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
// kodo optimizavimas - bendrine funkcija fono spalvos keitimui
const changeBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
// kodo optimizavimas - bendrine funkcija stiliaus  keitimui
const changeStyle = function (style) {
  document.querySelector('.number').style.width = style;
};

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);
  if (!guess) {
    // document.querySelector('.message').textContent = 'No number!';
    displayMessage('No number!');
    //  When player wins!
  } else if (guess === secreatNumber) {
    // document.querySelector('.message').textContent = 'Correct Number!';
    displayMessage('Correct Number!');
    document.querySelector('.number').textContent = secreatNumber;
    // document.querySelector('body').style.backgroundColor = '#60b347';
    changeBackground('#60b347');
    // document.querySelector('.number').style.width = '30rem';
    changeStyle('30rem');

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is diferent
  } else if (guess !== secreatNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secreatNumber ? 'Too high!' : 'Too low!';
      displayMessage(guess > secreatNumber ? 'Too high!' : 'Too low!');
      score = score - 1; // score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the game :/!';
      displayMessage('You lost the game :/!');
      document.querySelector('.score').textContent = 0;
    }
  }

  // When guess is too high

  //   } else if (guess > secreatNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too high!';
  //       score = score - 1; // score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game :/!';
  //       document.querySelector('.score').textContent = 0;
  //     }

  // When guess is too low

  //   } else if (guess < secreatNumber) {
  //     if (score > 1) {
  //       document.querySelector('.message').textContent = 'Too low!';
  //       score = score - 1; // score--;
  //       document.querySelector('.score').textContent = score;
  //     } else {
  //       document.querySelector('.message').textContent = 'You lost the game :/!';
  //       document.querySelector('.score').textContent = 0;
  //     }
  //   }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  secreatNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.score').textContent = score;
  // document.querySelector('body').style.backgroundColor = '#222';
  changeBackground('#222');
  // document.querySelector('.number').style.width = '15rem';
  changeStyle('15rem');
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  document.querySelector('.guess').value = '';
});
