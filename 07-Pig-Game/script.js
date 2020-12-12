'use strict';

let currentPlayer = 0;
let gameActive = 0;
let totalScores = [0, 0];
let currentScoreSum = 0;

const player1Name = document.querySelector('#name--0');
const player2Name = document.querySelector('#name--1');

const diceImage = document.querySelector('.dice');

const newGameButton = document.querySelector('.btn--new');
const rollButton = document.querySelector('.btn--roll');
const holdButton = document.querySelector('.btn--hold');

const totalPlayerScores = [
  document.querySelector('#score--0'),
  document.querySelector('#score--1'),
];
const currentPlayerScores = [
  document.querySelector('#current--0'),
  document.querySelector('#current--1'),
];
const playerSections = [
  document.querySelector('.player--0'),
  document.querySelector('.player--1'),
];

function changePlayer() {
  currentScoreSum = 0;
  currentPlayerScores[currentPlayer].textContent = 0;
  playerSections[currentPlayer].classList.remove('player--active');
  currentPlayer = (currentPlayer + 1) % 2;
  playerSections[currentPlayer].classList.add('player--active');
}

const newGame = function () {
  console.log('New game button pressed');

  totalScores = [0, 0];
  totalPlayerScores[0].textContent = 0;
  totalPlayerScores[1].textContent = 0;
  currentPlayerScores[0].textContent = 0;
  currentPlayerScores[1].textContent = 0;

  playerSections[0].className = 'player player--0 player--active';
  playerSections[1].className = 'player player--1';

  diceImage.classList.add('hidden');

  rollButton.disabled = false;
  holdButton.disabled = false;

  if (gameActive == 0) {
    player1Name.textContent = prompt('Enter Player 1 Name:');
    player2Name.textContent = prompt('Enter Player 2 Name:');
  }
  gameActive++;
};

newGameButton.addEventListener('click', newGame);

rollButton.addEventListener('click', function () {
  console.log('roll button pressed');
  const rollValue = Number(Math.trunc(Math.random() * 6) + 1);
  diceImage.src = 'dice-' + rollValue + '.png';

  if (gameActive == 0) {
    newGame();
    return;
  }

  if (rollValue == 1) {
    changePlayer();
  } else {
    currentScoreSum += rollValue;
    diceImage.classList.remove('hidden');
    currentPlayerScores[currentPlayer].textContent = currentScoreSum;
    if (totalScores[currentPlayer] + currentScoreSum >= 100) {
      totalPlayerScores[currentPlayer].textContent =
        totalScores[currentPlayer] + currentScoreSum;
      playerSections[currentPlayer].classList.add('player--winner');
      diceImage.classList.add('hidden');
      rollButton.disabled = 'disabled';
      holdButton.disabled = 'disabled';

      setTimeout(function () {
        alert(
          player1Name.textContent.toUpperCase() +
            ' is the WINNER! ✨...\nClick here to start a new game ...'
        );
        newGame();
      }, 1000);
    }
  }
});

holdButton.addEventListener('click', function () {
  if (gameActive == 0) {
    newGame();
    return;
  }

  totalScores[currentPlayer] += currentScoreSum;
  totalPlayerScores[currentPlayer].textContent = totalScores[currentPlayer];
  changePlayer();
});
