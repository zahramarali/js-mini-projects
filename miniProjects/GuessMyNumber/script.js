// console.log(document.querySelector('.message').textContent); 
// document.querySelector('.message').textContent = "🎉 Correct Number";
// console.log(document.querySelector('.message').textContent); 

// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 10;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20)+1;
console.log(secretNumber);
let score = 20;
let highScore = 0;

function displayMessage(message){
  document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function(){
const guess =Number(document.querySelector('.guess').value);
// console.log(guess , typeof guess);

//when there is no input
if(!guess){
displayMessage("No Number"); 

//when player wins
}else if(guess === secretNumber){
  displayMessage("🎉 Correct Number")
  document.querySelector('.number').textContent = secretNumber
  document.querySelector('body').style.backgroundColor = '#60b347';
  document.querySelector('.number').style.width = '30rem';

  if( score > highScore ){
    highScore = score;
    document.querySelector('.highscore').textContent = highScore;
  }

 
}else if( guess !== secretNumber){
  if(score > 1){
    displayMessage(guess > secretNumber ? 'Too High' : 'Too Low');
    score--;
    document.querySelector('.score').textContent = score;
  }else{
    displayMessage(' You lost the game');
    document.querySelector('.score').textContent = 0;

  }};

}

//  //when guess is too high
// else if(guess > secretNumber){
//   if(score > 1){
//     document.querySelector('.message').textContent = 'Too High';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }else{
//     document.querySelector('.message').textContent = ' You lost the game';
//     document.querySelector('.score').textContent = 0;

//   }

//     //when guess is too low

// }else if(guess < secretNumber){
//   if(score > 1){
//     document.querySelector('.message').textContent = 'Too Low';
//     score--;
//     document.querySelector('.score').textContent = score;
//   }else{
//     document.querySelector('.message').textContent = ' You lost the game';
//     document.querySelector('.score').textContent = 0;

//   }};}
);

// reset

document.querySelector('.again').addEventListener('click' , function(){
  score = 20
  document.querySelector('.number').textContent = '?'
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem'
  secretNumber = Math.trunc(Math.random()*20)+1;
  document.querySelector('.guess').value ='';
} ) 



