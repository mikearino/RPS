
const getComputerChoice = () => {
  //randomly choose a number between one and three
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