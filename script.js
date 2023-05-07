let playerScore = 0;
let computerScore = 0;

function computerPlay() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
  while (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
    playerSelection = prompt(`${playerName}, that's an invalid input. Please enter Rock, Paper, or Scissors.`)
      .trim()
      .toLowerCase();
    if (playerSelection === null) {
      console.log("Round cancelled.");
      return;
    }
  }
  
  console.log(`You chose ${playerSelection}.`);
  console.log(`Computer chose ${computerSelection}.`);
  
  if (playerSelection === computerSelection) {
    console.log("It's a tie!");
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    console.log(`You win this round! ${playerSelection} beats ${computerSelection}.`);
    playerScore++;
  } else {
    console.log(`You lose this round! ${computerSelection} beats ${playerSelection}.`);
    computerScore++;
  }
}

function game() {
  console.log(`Welcome to Rock, Paper, Scissors, ${playerName}!`);
  
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("Let us begin. Enter Rock, Paper, or Scissors.")
      .trim()
      .toLowerCase();
    if (playerSelection === null) {
      console.log("Game cancelled.");
      return;
    }
    
    const computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    
    console.log(`Current score: ${playerName} ${playerScore} - ${computerScore} Computer`);
  }
  
  console.log(`Final score: ${playerName} ${playerScore} - ${computerScore} Computer`);
  if (playerScore > computerScore) {
    console.log(`${playerName} wins the game!`);
  } else if (computerScore > playerScore) {
    console.log("Computer wins the game!");
  } else {
    console.log("It's a tie game!");
  }
}

const playerName = prompt("Hello! Welcome to Rock Paper Scissors, what is your name?");
if (playerName === null) {
  console.log("Game cancelled.");
} else {
  game();
}
