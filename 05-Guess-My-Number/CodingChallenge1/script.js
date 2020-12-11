'use strict';

let guessnumber = Math.trunc(Math.random() * 100) + 1;
let score = 20;
let highScore = 0;
console.log(guessnumber);

let reset = function () {
  score = 20;
  guessnumber = Math.trunc(Math.random() * 100) + 1;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.check').disabled = false;
};

let checkNumber = function () {
  console.log('clicked');
  let tempnum = Number(document.querySelector('.guess').value);

  if (!tempnum) {
    document.querySelector('.message').textContent = 'Please Enter A Value...';
  } else if (tempnum === guessnumber) {
    document.querySelector('.message').textContent = 'Correct Answer !';
    document.body.style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '20rem';
    document.querySelector('.number').textContent = guessnumber;
    document.querySelector('.check').disabled = 'disabled';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  } else if (score == 1) {
    score--;
    document.querySelector('.score').textContent = 0;
    document.querySelector('.message').textContent = 'You lose !!!';
    document.body.style.backgroundColor = '#ff5050';
    document.querySelector('.check').disabled = 'disabled';
  } else if (tempnum > guessnumber) {
    document.querySelector('.message').textContent = 'Too High!';
    score--;
    document.querySelector('.score').textContent = score;
  } else {
    document.querySelector('.message').textContent = 'Too Low!';
    score--;
    document.querySelector('.score').textContent = score;
  }
};

document.querySelector('.check').addEventListener('click', checkNumber);
document.querySelector('.again').addEventListener('click', reset);
