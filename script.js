let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const number = Math.random();

    if (number <= .35){
    return "rock";
    }

    else if (number <=.75){ //&&  number >= .4){
    return "paper";
    }

    else {  // if (number <= 10 && number >= .71 ){
    return "scissors";
    }


    
}

function getHumanChoice(){
    let choice = prompt("What is your choice? Rock Paper or Scissors.").toLowerCase()
    
    if (choice === "rock"){
        return "rock";
    }
     else if (choice === "paper"){
        return "paper";
    }

    else if (choice === "scissors"){
        return "scissors";
    }
    else{
        return null;
    }
}


function playRound(humanChoice, computerChoice){

    if (humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissors");
        computerScore = computerScore +1;
        return computerScore;
    }
    if (humanChoice === "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore = computerScore +1;
        return computerScore;
    }
    if (humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beat Paper");
        computerScore = computerScore +1;
        return computerScore;
    }
    if (humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You Win! Scissors beat Paper");
        humanScore = humanScore +1;
        return humanScore;
    }
    if (humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You Win! Rock beats Scissors");
        humanScore = humanScore +1;
        return humanScore;
    }
    if (humanChoice === "paper" && computerChoice === "rock"){
        console.log("You Win! Paper beats Rock");
        humanScore = humanScore +1;
        return humanScore;
    }

    if (computerChoice === humanChoice){
        console.log("Draw, try again.");
    }

    }

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);


function playGame(){


    for (let i = 1; i===5; i++){


    if (humanScore === 5){
        console.log("You are the winner!")
    }
    if (computerScore === 5){
        console.log("You are a loser man")
    }

}
}
