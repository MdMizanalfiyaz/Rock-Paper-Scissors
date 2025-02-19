function getComputerChoice() {
  let number = Math.floor(Math.random() * 3);
  // console.log(number);

  switch (number) {
    case 0:
      return "rock";

    case 1:
      return "paper";


    default:
      return "scissors";
  }
}
console.log(getComputerChoice());

function getHumanChoice() {
  let humanGuess = prompt("Rock,paper or Scissors: ");
  return humanGuess;
}

console.log(getHumanChoice());

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();



function playGame() {

    
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
      if (humanChoice === computerChoice) {
        console.log("It's a Tie");
      } else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You won.Coz rock beats scissors");
        humanScore++;
      } else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You won.Coz paper beats rock");
        humanScore++;
      } else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You won.Coz scissors beat paper");
        humanScore++;
      } else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lost.Bcz scissors loses to rock");
        computerScore++;
      } else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lost.Bcz paper loses to scissors");
        computerScore++;
      } else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lost.Bcz rock loses to paper");
        computerScore++;
      }
    }
      for(let i = 0;i < 5; i++){
        console.log(`This is round ${i}`);
        // console.log(`You have Chosen: ${getHumanChoice()}`);
        // console.log(`Computer have Chosen: ${getComputerChoice()}`);
        
        playRound(getHumanChoice(), getComputerChoice()); 
        console.log(`Computer: ${computerScore} vs  Human: ${humanScore}`);
        console.log("<------------------| |------------------>");
      }
      if (humanScore > computerScore) {
        // return "You won";
        console.log("You won the game");
        
      } else if(humanScore === computerScore){
        console.log("It's a tie play again");
      }
      else {
        // return "Computer won";
        console.log("Computer won the game");
        
      }
      

      
    
}

playGame();