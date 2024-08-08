'use strict';

//selecting elements
const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const current0 = document.getElementById('current--0');
const current1 = document.getElementById('current--1')
const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');



// starting conditions

let scores, currentScore, activePlayer, playing;

const init   = function(){

  scores =[0,0]
  currentScore = 0;
  activePlayer = 0;
  playing = true;
  score0El.textContent = 0;
  score1El.textContent = 0;
  current0.textContent = 0;
  current1.textContent = 0;


  diceEl.classList.add('hidden');
  player1El.classList.remove('player--active');
  player0El.classList.add('player--active');
  player0El.classList.remove('player--winner');
  player1El.classList.remove('player--winner');
}
init()

const switchPlayer = function() {
  document.querySelector(`#current--${activePlayer}`).textContent = 0;
    currentScore= 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
}

btnRoll.addEventListener('click' , function() {
  //1. Generate dice roll
  if(playing) {

  
  const dice = Math.trunc(Math.random() * 6) + 1 ;
  diceEl.src = `dice-${dice}.png`;
  console.log(dice);

  //2.display in the screen

  diceEl.classList.remove('hidden');

  //3. check for dice one ? if true switch to next player

  if ( dice !== 1) {
    // add current score
    currentScore +=dice;
    document.querySelector(`#current--${activePlayer}`).textContent = currentScore;
  }else{
    switchPlayer()
  }
}
})


btnHold.addEventListener('click', function(){
  //add current score to active player's score
  if(playing){


    scores[activePlayer]+=currentScore;
    document.getElementById(`score--${activePlayer}`).textContent = scores[activePlayer];

    //check if player's score is >=100
    if(scores[activePlayer] >=20){
      //finish the game
      playing = false;
      diceEl.classList.add('hidden');

      document.querySelector(`.player--${activePlayer}`).classList.add('player--winner');
      document.querySelector(`.player--${activePlayer}`).classList.remove('player--active');
    }else{

      //switch the player
      switchPlayer()
    }
}
})

btnNew.addEventListener('click', init)