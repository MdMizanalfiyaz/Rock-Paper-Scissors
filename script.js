function getComputerChoice(){

    let num = Math.floor(Math.random() * 3);

    if(num == 0){
        return "rock";
    } else if(num == 1){
        return "paper";
    } 
    else{
        return "scissors";
    }

    
    
}
console.log(getComputerChoice());


function getHumanChoice(){
    let playerChoice = prompt("Rock, paper, or Sicssors? ").toLowerCase();
    return playerChoice;
}
console.log(getHumanChoice());

// getHumanChoice();

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice,computerChoice) {
    if(humanChoice == computerChoice){
        console.log("It's a Tie");        
    } else if(humanChoice == "rock" && computerChoice === "paper"){
        console.log("You lost");
    } else if(humanChoice == "rock" && computerChoice === "sicssors"){
        console.log("You won");
    } else if(humanChoice == "paper" && computerChoice === "rock"){
        console.log("You won");
    } else if(humanChoice == "paper" && computerChoice === "sicssors"){
        console.log("You lost");
    } else if(humanChoice == "sicssors" && computerChoice === "paper"){
        console.log("You won");
    } 
    else{
        console.log("You lost");
    }
}

const humanChoice =  getHumanChoice();

const computerChoice = getComputerChoice();

playRound(humanChoice,computerChoice);