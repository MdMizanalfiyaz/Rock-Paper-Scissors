function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  // console.log(number);

  switch (number) {
    case 0:
      return "rock";
      break;

    case 1:
      return "paper";
      break;

    default:
      return "scissors";
      break;
  }
}
// console.log(getComputerChoice());

function getHumanChoice() {
  let humanGuess = prompt("Rock,paper or Scissors: ");
  return humanGuess;
}

// console.log(getHumanChoice());

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    console.log("It's a Tie");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    console.log("You won");
  } else if (humanChoice === "paper" && computerChoice === "rock") {
    console.log("You won");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    console.log("You won");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    console.log("You lost");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    console.log("You lost");
  } else if (humanChoice === "rock" && computerChoice === "paper") {
    console.log("You lost");
  }
}

function playGame() {
    for (let i = 0; i < 5; i++) {
        
    }
    const humanChoice = getHumanChoice();
    const computerChoice = getComputerChoice();
    playRound(humanChoice, computerChoice);



}

playGame();