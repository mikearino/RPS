const playerSelection = prompt("Enter player selection! Rock, Paper, or Scissors"
)

const playerScore = []
const compScore = []

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
console.log(getComputerChoice())
  //take two params player selection/comp selection and decide who wins
const playRound = (playerChoice, compChoice) => {
  if (playerChoice == "rock" && compChoice == "scissors") {
    return "You win! Rock beats scissors!" + playerScore++
  } if (playerChoice == "rock" && compChoice == "rock") {
    return "Tie! Play again"
  } if (playerChoice == "rock" && compChoice == "paper") {
    return "You lose! paper beats rock!" + compScore++
  } if (playerChoice == "scissors" && compChoice == "paper") {
    return "You win! Scissors beats paper!" + playerScore++
  } if (playerChoice == "scissors" && compChoice == "scissors") {
    return "Tie! Play again"
  } if (playerChoice == "scissors" && compChoice == "rock") {
    return "You lose! rock beats scissors!" + compScore++
  } if (playerChoice == "paper" && compChoice == "rock") {
    return "You win! Scissors beats paper!" + playerScore++
  } if (playerChoice == "paper" && compChoice == "paper") {
    return "Tie! Play again"
  } if (playerChoice == "paper" && compChoice == "scissors") {
    return "You lose! Scissors beats paper!" + compScore++
  }
}

//This starts a game with 5 rounds, records score and reports a winner or loser at the end.
const game = () => {
  for (i=0; i<5; i++){
    playRound(playerSelection, computerSelection)

  }
}


const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
