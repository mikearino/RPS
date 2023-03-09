
//initialize player scores
let playerScore = [0];
let compScore = [0];
let round = 0;

//select the div where all the display info will go
let display = document.querySelector('.display');
const playerDisplay = document.createElement('div');
const compDisplay = document.createElement('div');
const roundDisplay = document.createElement('div');

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
    return `You win! Rock beats scissors! Computer chose scissors`
  } if (playerChoice == "rock" && compChoice == "rock") {
    return `Tie! Play again. Computer chose rock`
  } if (playerChoice == "rock" && compChoice == "paper") {
    compScore++
    return `You lose! paper beats rock! Computer chose paper`
  } if (playerChoice == "scissors" && compChoice == "paper") {
    playerScore++
    return `You win! Scissors beats paper! Computer chose paper`
  } if (playerChoice == "scissors" && compChoice == "scissors") {
    return `Tie! Play again. Computer chose scissors`
  } if (playerChoice == "scissors" && compChoice == "rock") {
    compScore++
    return `You lose! rock beats scissors! Computer chose rock`
  } if (playerChoice == "paper" && compChoice == "rock") {
    playerScore++
    return `You win! Paper beats rock! Computer chose rock`
  } if (playerChoice == "paper" && compChoice == "paper") {
    return `Tie! Play again Computer chose paper`
  } if (playerChoice == "paper" && compChoice == "scissors") {
    compScore++
    return `You lose! Scissors beats paper! Computer chose scissors`
  }
}


//This starts a game with 5 rounds, records score and reports a winner or loser at the end.
const game = (playerChoice) => {
  // for (i=0; i<5; i++){
    const compChoice = getComputerChoice()

    roundDisplay.innerHTML = `round ${round}`
    display.appendChild(roundDisplay)
    // console.log(`round ${i + 1}`)

    playerDisplay.innerHTML = `playerScore: ${playerScore}`
    display.appendChild(playerDisplay)
    
    compDisplay.innerHTML = `compScore: ${compScore}`
    display.appendChild(compDisplay)
    
    console.log(`compScore: ${compScore}`)
    
    console.log(`Computer Choice: ${compChoice}`)
    // const playerChoice = prompt('Choose Rock, Paper, or Scissors!')
    console.log(playRound(playerChoice,compChoice))
    // }
    //check score at end
    round ++
    if (playerScore > compScore) {
      return console.log("Congrats you win!")
    } if (compScore > playerScore) {
      return console.log("You loose booooo!")
    } else return console.log("It's a tie bummer!")
  }



//initialize buttons with event listeners
const rock = document.querySelector('.rock')
console.log(rock)
rock.addEventListener('click', ()=> {
console.log('click')
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

