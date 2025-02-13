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
    let humanChoice = prompt("Enter one of the fllowing value: ");
    if(humanChoice === "rock"){
        return "rock";
    } else if(humanChoice === "paper"){
        return "paper";
    } else if(humanChoice === "scissors"){
        return "scissors";
    }
    else{
        return "invalid input";
    }
}

// getHumanChoice();
console.log(getHumanChoice());


getComputerChoice();
// console.log(getComputerChoice());

let humanScore = 0;
let computerScore = 0;