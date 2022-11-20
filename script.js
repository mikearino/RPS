
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
    return "You win! Rock beats scissors!"
  } if (playerChoice == "rock" && compChoice == "rock") {
    return "Tie! Play again"
  } if (playerChoice == "rock" && compChoice == "paper") {
    return "You lose! paper beats rock!"
  } if (playerChoice == "scissors" && compChoice == "paper") {
    return "You win! Scissors beats paper!"
  } if (playerChoice == "scissors" && compChoice == "scissors") {
    return "Tie! Play again"
  } if (playerChoice == "scissors" && compChoice == "rock") {
    return "You lose! rock beats scissors!"
  } if (playerChoice == "paper" && compChoice == "rock") {
    return "You win! Scissors beats paper!"
  } if (playerChoice == "paper" && compChoice == "paper") {
    return "Tie! Play again"
  } if (playerChoice == "paper" && compChoice == "scissors") {
    return "You lose! Scissors beats paper!"
  }
}

const game = () => {
  playRound()
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));