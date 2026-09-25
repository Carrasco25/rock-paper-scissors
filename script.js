function getComputerChoice() {
  const number = Math.random();

  if (number <= 0.35) {
    return "rock";
  } else if (number <= 0.75) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt("What is your choice? Rock Paper or Scissors.").toLowerCase();

  if (choice === "rock") {
    return "rock";
  } else if (choice === "paper") {
    return "paper";
  } else if (choice === "scissors") {
    return "scissors";
  } else {
    return null;
  }
}

function playGame() {
  let humanScore = 0;
  let computerScore = 0;
  let score = "Score" + humanScore + " to " + computerScore;

  function playRound(humanChoice, computerChoice) {
      if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("You lose! Rock beats Scissors");
        computerScore = computerScore + 1;
      }
      if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("You lose! Paper beats Rock");
        computerScore = computerScore + 1;
      }
      if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("You lose! Scissors beat Paper");
        computerScore = computerScore + 1;
      }
      if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("You Win! Scissors beat Paper");
        humanScore = humanScore + 1;
      }
      if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("You Win! Rock beats Scissors");
        humanScore = humanScore + 1;
      }
      if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("You Win! Paper beats Rock");
        humanScore = humanScore + 1;
      }

      if (computerChoice === humanChoice) {
        console.log("Draw");
      }
      console.log(`Score: ${humanScore} to ${computerScore}`);
    }
    for (let i = 1; i <= 5; i++) {
      const humanSelection = getHumanChoice();
      const computerSelection = getComputerChoice();
      
      playRound(humanSelection, computerSelection);

      if ( i === 5 && humanScore > computerScore){ 
        console.log("You are the winner!");      
      }
      if ( i === 5 && computerScore > humanScore){         
        console.log("You are a loser man");
      }
      if ( i === 5 && computerScore === humanScore){
        console.log("This is a draw.")
      }
    }
  }


playGame()