

let playerScore = [0]
let compScore = [0]


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
    return "You win! Scissors beats paper!" + playerScore + 1
  } if (playerChoice == "paper" && compChoice == "paper") {
    return "Tie! Play again"
  } if (playerChoice == "paper" && compChoice == "scissors") {
    return "You lose! Scissors beats paper!" + compScore++
  }
}

//This starts a game with 5 rounds, records score and reports a winner or loser at the end.
const game = () => {
  for (i=0; i<5; i++){
    const compChoice = getComputerChoice()
    console.log(i)
    console.log(`playerScore: ${playerScore}`)
    console.log(`compScore: ${compScore}`)
    console.log(`Computer Choice: ${compChoice}`)
    const playerChoice = prompt('Choose Rock, Paper, or Scissors!')
    console.log(playRound(playerChoice,compChoice))
    //check score first
    if (playerScore == 5) {
      return console.log("Congrats you win!")
    } if (compScore == 5) {
      return console.log("You loose booooo!")
    } 

  }
}



game()


