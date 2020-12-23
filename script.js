'use scrict';

const scoreP = document.querySelector('.score1');
const scoreC = document.querySelector('.scoreC');
const imagePEl = document.querySelector('.rps_imageP');
const imageCEl = document.querySelector('.rps_imageC');
const winner = document.querySelector('.winner');
const choice = document.querySelectorAll('.btns');
const btnRock = document.querySelector('.btn-rock');
const btnPaper = document.querySelector('.btn-paper');
const btnScrissors = document.querySelector('.btn-scrissors');
const btnNewGame = document.querySelector('.btn-newgame');
const play = document.querySelector('.btn-play');
const rPsNameP = document.querySelector('.player-pick');
const rPsNameC = document.querySelector('.comp-pick');

// player 1 choice
let rPsP;
let rPsC;

choice.forEach(btn => {
  btn.addEventListener('click', f);
});
function f(event) {
  console.log(event.currentTarget.id);

  if (event.currentTarget.id == 'btn-rock') {
    rPsNameP.textContent = 'Rock!';
    imagePEl.src = '/rps_1.png';
    rPsP = 1;
  } else if (event.currentTarget.id == 'btn-paper') {
    rPsNameP.textContent = 'Paper!';
    imagePEl.src = '/rps_2.png';
    rPsP = 2;
  } else if (event.currentTarget.id == 'btn-scissors') {
    rPsNameP.textContent = 'Scissors!';
    imagePEl.src = '/rps_3.png';
    rPsP = 3;
  }
}
// play functionality
play.addEventListener('click', function () {
  // random roll
  rPsC = Math.trunc(Math.random() * 3 + 1);

  // display computer roll
  imageCEl.src = `rps_${rPsC}.png`;

  if (rPsC === 1) rPsNameC.textContent = 'Rock!';
  if (rPsC === 2) rPsNameC.textContent = 'Paper!';
  if (rPsC === 3) rPsNameC.textContent = 'Scissors!';

  win(rPsP, rPsC);
});

// declare a winner
function win(p, c) {
  if (p === c) {
    winner.textContent = 'Tie!';
  } else if (
    (p === 1 && c === 3) ||
    (p === 2 && c === 1) ||
    (p === 3 && c === 2)
  ) {
    winner.textContent = 'You won!!';
    scoreP.textContent++;
  } else {
    winner.textContent = 'You Lose!!';
    scoreC.textContent++;
  }
}

// New game reset
btnNewGame.addEventListener('click', function () {
  scoreP.textContent = 0;
  scoreC.textContent = 0;
  winner.textContent = 'Rock beats Scirrors cuts Paper covers Rock';
});
