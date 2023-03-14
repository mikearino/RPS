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
  if (playerChoice == "rock" && compChoice == "scissors") {
    playerScore++
    return `You win! Rock beats scissors!`
  } if (playerChoice == "rock" && compChoice == "rock") {
    return `Tie! Play again.`
  } if (playerChoice == "rock" && compChoice == "paper") {
    compScore++
    return `You lose! paper beats rock!`
  } if (playerChoice == "scissors" && compChoice == "paper") {
    playerScore++
    return `You win! Scissors beats paper!`
  } if (playerChoice == "scissors" && compChoice == "scissors") {
    return `Tie! Play again.`
  } if (playerChoice == "scissors" && compChoice == "rock") {
    compScore++
    return `You lose! rock beats scissors!`
  } if (playerChoice == "paper" && compChoice == "rock") {
    playerScore++
    return `You win! Paper beats rock!`
  } if (playerChoice == "paper" && compChoice == "paper") {
    return `Tie! Play again.`
  } if (playerChoice == "paper" && compChoice == "scissors") {
    compScore++
    return `You lose! Scissors beats paper!`
  }
}

//Starts a game, records score and reports a winner or loser at the end.
const game = (playerChoice) => {
    const compChoice = getComputerChoice()

    roundDisplay.innerHTML = `round ${round}`
    display.appendChild(roundDisplay)

    playerDisplay.innerHTML = `playerScore: ${playerScore}`
    display.appendChild(playerDisplay)
    
    compDisplay.innerHTML = `compScore: ${compScore}`
    display.appendChild(compDisplay)

    compChoiceDisplay.innerHTML = `Computer Choice: ${compChoice}`
    display.appendChild(compChoiceDisplay)

    playerChoiceDisplay.innerHTML = `Player Choice: ${playerChoice}`
    display.appendChild(playerChoiceDisplay)

    gameDisplay.innerHTML = playRound(playerChoice,compChoice)
    display.appendChild(gameDisplay)

    round++
    youWin.innerHTML = "Congrats you win the game!"
    youLose.innerHTML = "Bummer you lost the game."
   
    if (playerScore >= 5) {
      display.appendChild(youWin)
    } if (compScore >= 5) {
      display.appendChild(youLose)
    } else return console.log("It's a tie bummer!")
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

