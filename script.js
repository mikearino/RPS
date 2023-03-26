let acid = new Audio('media/Acid.wav')
let clank = new Audio('media/clank-1.wav') 
let glass = new Audio('media/glass.wav') 
let glass2 = new Audio('media/glass-2.wav') 
let glass3 = new Audio('media/glass-3.wav') 
let punch = new Audio('media/punch.wav') 
let scissor = new Audio('media/scissors.wav') 
let groan = new Audio('media/groan.wav')
let moan = new Audio('media/moan.wav')
let chop = new Audio('media/chop.wav')
let cheering = new Audio('media/cheering.wav')
cheering.volume = .5;
let booing = new Audio('media/booing.wav')
booing.volume = .5;



let audio_files = [clank, glass, glass2, glass3, punch, scissor, moan, chop];

//initialize player scores
let playerScore = 5;
let compScore = 5;
let round = 1;

setTimeout(acid.play(),500);

//select the div where all the display info will go
const display = document.querySelector('.display');
const playerDisplay = document.createElement('div');
playerDisplay.classList.add('playerScore');
const compDisplay = document.createElement('div');
compDisplay.classList.add('compScore');
const roundDisplay = document.createElement('div');
roundDisplay.classList.add('round');

const compChoiceDisplay = document.createElement('div');
compChoiceDisplay.classList.add('compChoice');
const playerChoiceDisplay = document.createElement('div');
const gameDisplay = document.createElement('div');
gameDisplay.classList.add('gameDisplay');

const youWin = document.createElement('div');

const youLose = document.createElement('div');
const roundPlayerScore = document.createElement('div');
roundPlayerScore.classList.add('playerScoreAndRound')
const compChoiceAndScore = document.createElement('div');
compChoiceAndScore.classList.add('compChoicePlusScore')


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
  console.log(audio_files[j])
  if (playerChoice == "rock" && compChoice == "scissors") {
    compScore -= 1
    return `You win! Rock beats scissors!`
  } if (playerChoice == "rock" && compChoice == "rock") {
    return `Tie! Play again.`
  } if (playerChoice == "rock" && compChoice == "paper") {
    playerScore -= 1
    return `You lose! paper beats rock!`
  } if (playerChoice == "scissors" && compChoice == "paper") {
    compScore -= 1
    return `You win! Scissors beats paper!`
  } if (playerChoice == "scissors" && compChoice == "scissors") {
    return `Tie! Play again.`
  } if (playerChoice == "scissors" && compChoice == "rock") {
    playerScore -= 1
    return `You lose! rock beats scissors!`
  } if (playerChoice == "paper" && compChoice == "rock") {
    compScore -= 1
    return `You win! Paper beats rock!`
  } if (playerChoice == "paper" && compChoice == "paper") {
    return `Tie! Play again.`
  } if (playerChoice == "paper" && compChoice == "scissors") {
    playerScore -= 1
    return `You lose! Scissors beats paper!`
  }
}



//Starts a game, records score and reports a winner or loser at the end.
const game = (playerChoice) => {
  const compChoice = getComputerChoice()
  
  display.appendChild(roundPlayerScore)
  roundDisplay.innerHTML = `Round ${round}`
  roundPlayerScore.appendChild(roundDisplay)

  playerDisplay.innerHTML = `Player ♥️ ${playerScore}`
  roundPlayerScore.appendChild(playerDisplay)
    gameDisplay.innerHTML = playRound(playerChoice,compChoice)
    display.appendChild(gameDisplay)

    
    display.appendChild(compChoiceAndScore)
    compDisplay.innerHTML = `Comp ♥️ ${compScore}`
    compChoiceAndScore.appendChild(compDisplay)

    compChoiceDisplay.innerHTML = `${compChoice == "rock" ? "🪨" : '' 
    || compChoice == "paper" ? "📄" : '' || compChoice == "scissors" ? "✂️" : ''}🤖`
    compChoiceAndScore.appendChild(compChoiceDisplay)
    
    // Possibly remove 🤖this\/
    // playerChoiceDisplay.innerHTML = `Player Choice: ${playerChoice}`
    // display.appendChild(playerChoiceDisplay)

    

    round++

    if (playerScore <= 0) {
     
      // display.appendChild(youWin)
      cheering.play();
      setTimeout(function(){alert("Bummer you lost the game."),document.location.reload()},500);
      playerScore = 5;
      compScore = 5;
      round = 1;
      display.removeChild(roundDisplay)
      display.removeChild(playerDisplay)
      display.removeChild(compDisplay)
      display.removeChild(compChoiceDisplay)
      display.removeChild(playerChoiceDisplay)
      display.removeChild(gameDisplay)
    } else if (compScore <= 0) {
      // display.appendChild(youLose)
      booing.play();
      setTimeout(function(){alert("Congrats you win the game!"),document.location.reload()},500);
      playerScore = 5;
      compScore = 5;
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


