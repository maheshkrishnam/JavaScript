const randomNumber = parseInt(Math.random()*100+1);
console.log(randomNumber);
let previousGuess = document.querySelector('.previousGuess');
const remainingGuess = document.querySelector('.remainingGuess');
const submitButton = document.querySelector('.submit');
const result = document.querySelector('.result');
let inputValue =document.querySelector('.userInput');

let prevGuess = [];
let noOfGuess = 0;
let playGame = true;

if(playGame) {
  submitButton.addEventListener('click', function(e) {
    e.preventDefault();
    const guess = parseInt(document.querySelector('.userInput').value);
    validateGuess(guess);
  });
}

function validateGuess(guess){
  if(isNaN(guess) || guess >100 || guess < 1){
    result.innerHTML = 'Enter a number between 1 to 100';
  } else{
    noOfGuess++;
    prevGuess.push(guess);
    checkGuess(guess);
  }
}

function checkGuess(guess){
  if(guess === randomNumber){
    result.innerHTML = `You guessed the Correct number ==> Random number = ${guess}`;
    endGame();
  } else{
    updateGuess(guess);
    displayMassage(guess);
  }
}

function updateGuess(guess){
  previousGuess.innerHTML += `${guess} `;
  displayMassage();
}

function displayMassage(guess){
  remainingGuess.innerHTML = `${10-noOfGuess}`;
  if(noOfGuess === 10){
    result.innerHTML = `Game Over: Random number was ${randomNumber}`;
    endGame();
  } else if(guess > randomNumber){
    result.innerHTML = `Random number is lower than your guess`;
  } else if(guess < randomNumber){
    result.innerHTML = `Random number is higher than your guess`;
  }
  inputValue.value = '';
}

function endGame(){
  submitButton.setAttribute('disabled','');
  inputValue.setAttribute('disabled','');
  startGame();
}

function startGame(){
  document.querySelector('.startNew').innerHTML = 'New Game';
}