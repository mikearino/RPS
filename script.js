let clank = new Audio('media/clank-1.wav') 
let glass = new Audio('media/glass.wav') 
let glass2 = new Audio('media/glass-2.wav') 
let glass3 = new Audio('media/glass-3.wav') 
let punch = new Audio('media/punch.wav') 
let scissor = new Audio('media/scissors.wav') 
let groan = new Audio('media/groan.wav')
let moan = new Audio('media/moan.wav')
let chop = new Audio('media/chop')
let cheering = new Audio('media/cheering.wav')
cheering.volume = .5;
let booing = new Audio('media/booing.wav')
booing.volume = .5;

let audio_files = [clank, glass, glass2, glass3, punch, scissor, moan, chop];

//initialize player scores
let playerScore = 0;
let compScore = 0;
let round = 1;

//select the div where all the display info will go
const display = document.querySelector('.display');
const playerDisplay = document.createElement('div');
const compDisplay = document.createElement('div');
const roundDisplay = document.createElement('div');
const compChoiceDisplay = document.createElement('div');
const playerChoiceDisplay = document.createElement('div');
const gameDisplay = document.createElement('div');
const youWin = document.createElement('div');
const youLose = document.createElement('div');

const getComputerChoice = () => {
  //randomly choose a number between 1 and 3 then boolean object
  const randomNumber = Math.floor(Math.random() * 3) + 1
  if (randomNumber == 1) {
    return "rock"
  } else if (randomNumber == 2) {
    return "paper"
  } else {
    return "scissors"
  }
}

//take two params player selection/comp selection and decide who wins
const playRound = (playerChoice, compChoice) => {
  let j = [Math.floor(Math.random() *  (8))];
  audio_files[j].play()
  if (playerChoice == "rock" && compChoice == "scissors") {
    playerScore += 1
    return `You win! Rock beats scissors!`
  } if (playerChoice == "rock" && compChoice == "rock") {
    return `Tie! Play again.`
  } if (playerChoice == "rock" && compChoice == "paper") {
    compScore += 1
    return `You lose! paper beats rock!`
  } if (playerChoice == "scissors" && compChoice == "paper") {
    playerScore += 1
    return `You win! Scissors beats paper!`
  } if (playerChoice == "scissors" && compChoice == "scissors") {
    return `Tie! Play again.`
  } if (playerChoice == "scissors" && compChoice == "rock") {
    compScore += 1
    return `You lose! rock beats scissors!`
  } if (playerChoice == "paper" && compChoice == "rock") {
    playerScore += 1
    return `You win! Paper beats rock!`
  } if (playerChoice == "paper" && compChoice == "paper") {
    return `Tie! Play again.`
  } if (playerChoice == "paper" && compChoice == "scissors") {
    compScore += 1
    return `You lose! Scissors beats paper!`
  }
}



//Starts a game, records score and reports a winner or loser at the end.
const game = (playerChoice) => {
  const compChoice = getComputerChoice()
  
  
  roundDisplay.innerHTML = `Round ${round}`
    display.appendChild(roundDisplay)

    playerDisplay.innerHTML = `Player Score: ${playerScore}`
    display.appendChild(playerDisplay)
    
    compDisplay.innerHTML = `Comp Score: ${compScore}`
    display.appendChild(compDisplay)

    compChoiceDisplay.innerHTML = `Computer: ${compChoice == "rock" ? "🪨" : '' 
    || compChoice == "paper" ? "📄" : '' || compChoice == "scissors" ? "✂️" : ''}`
    display.appendChild(compChoiceDisplay)

    playerChoiceDisplay.innerHTML = `Player Choice: ${playerChoice}`
    display.appendChild(playerChoiceDisplay)

    gameDisplay.innerHTML = playRound(playerChoice,compChoice)
    display.appendChild(gameDisplay)

    round++

    if (playerScore >= 5) {
     
      // display.appendChild(youWin)
      cheering.play();
      setTimeout(function(){alert("Congrats you win the game!")},500);
      playerScore = 0;
      compScore = 0;
      round = 1;
      display.removeChild(roundDisplay)
      display.removeChild(playerDisplay)
      display.removeChild(compDisplay)
      display.removeChild(compChoiceDisplay)
      display.removeChild(playerChoiceDisplay)
      display.removeChild(gameDisplay)
    } else if (compScore >= 5) {
      // display.appendChild(youLose)
      booing.play();
      setTimeout(function(){alert("Bummer you lost the game.")},500);
      playerScore = 0;
      compScore = 0;
      round = 1;
      display.removeChild(roundDisplay)
      display.removeChild(playerDisplay)
      display.removeChild(compDisplay)
      display.removeChild(compChoiceDisplay)
      display.removeChild(playerChoiceDisplay)
      display.removeChild(gameDisplay)
    }
    // youWin.innerHTML = "Congrats you win the game!" 
    // youLose.innerHTML = "Bummer you lost the game."
  }

//initialize buttons with event listeners
const rock = document.querySelector('.rock')
rock.addEventListener('click', ()=> {
game("rock")
})

const paper = document.querySelector('.paper')
paper.addEventListener('click', ()=> {
game("paper")
})

const scissors = document.querySelector('.scissors')
scissors.addEventListener('click', ()=> {
game("scissors")
})

