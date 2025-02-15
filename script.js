let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){

    let num = Math.floor(Math.random() * 3);

    if(num === 0){
        return "rock";
    } else if(num === 1){
        return "paper";
    } 
    else{
        return "scissors";
    }

    
    
}

function getHumanChoice(){
    let playerChoice = prompt("Enter one of the fllowing value: ");
    if(playerChoice === "rock"){
        return "rock";
    } else if(playerChoice === "paper"){
        return "paper";
    } else if(playerChoice === "scissors"){
        return "scissors";
    }
    else{
        return "invalid input";
    }
    // const playersChoice = playerChoice;
    // if(playerChoice === "rock"||"ROCK"||"RocK"){
    //     return "rock";
    // } else if(playerChoice === "paper"||"PAPER"||"PapeR"){
    //     return "paper";
    // } else if(playerChoice === "scissors"||"SCISSORS"||"ScissorS"){
    //     return "scissors";
    // }
    // else{
    //     return "invalid input";
    // }
}

getHumanChoice();
// console.log(getHumanChoice());


// getComputerChoice();
// console.log(getComputerChoice());



function playRound(humanChoice,computerChoice) {
    
}

const humanChoice = getHumanChoice();
const computerChoice = getComputerChoice();

// playRound(humanChoice,computerChoice);