function getComputerChoice() {
  let num = Math.floor(Math.random() * 3);

  if (num === 0) {
    return "rock";
  } else if (num === 1) {
    return "paper";
  } else {
    return "scissor";
  }
}
console.log(getComputerChoice());

function getHumanChoice() {
  let playerChoice = prompt("Rock, paper, or Sicssor? ").toLowerCase();
  return playerChoice;
}
console.log(getHumanChoice());

// getHumanChoice();

const humanChoice = getHumanChoice();

const computerChoice = getComputerChoice();



function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice == computerChoice) {
      console.log("It's a Tie");
    } else if (humanChoice === "rock" && computerChoice === "paper") {
      console.log("You lost");
    } else if (humanChoice === "rock" && computerChoice === "scissor") {
      console.log("You won");
    } else if (humanChoice === "paper" && computerChoice === "rock") {
      console.log("You won");
    } else if (humanChoice === "paper" && computerChoice === "scissor") {
      console.log("You lost");
    } else if (humanChoice === "scissor" && computerChoice === "paper") {
      console.log("You won");
    } else if (humanChoice === "scissor" && computerChoice === "rock") {
      console.log("You lost");
    }
  }
  for (let i = 1; i < 5; i++) {
    console.log(`You chose ${getHumanChoice()}`);
    console.log(`Computer chose ${getComputerChoice()}`);
    
    playRound(getHumanChoice(), getComputerChoice());
  }

}

playGame();