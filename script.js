let playerScore = 0;
let computerScore = 0;

let playerName = prompt("Hello! Welcome to Rock, Paper, Scissors! What is your name?");

function computerPlay() {
  let selection = ["rock", "paper", "scissors"];
  let randomIndex = Math.floor(Math.random() * selection.length);
  return selection[randomIndex];
}

function playRound(playerSelection, computerSelection) {
  try {
    if (playerSelection !== "rock" && playerSelection !== "paper" && playerSelection !== "scissors") {
      throw new Error("Invalid input!");
    }

    if (playerSelection === computerSelection) {
      console.log("It's a tie! The computer also picked " + computerSelection + ".");
    } else if (
      (playerSelection === "rock" && computerSelection === "scissors") ||
      (playerSelection === "paper" && computerSelection === "rock") ||
      (playerSelection === "scissors" && computerSelection === "paper")
    ) {
      console.log("You win! " + playerSelection + " beats " + computerSelection + " " + computerSelection + ".");
      playerScore++;
    } else {
      console.log("You lose! " + computerSelection + " beats " + playerSelection + " " + computerSelection + ".");
      computerScore++;
    }
  } catch (err) {
    console.log(err.message);
  }
}

function game() {
  console.log(`Welcome ${playerName} to Rock, Paper, Scissors!`);
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}:`);
    let playerSelection = prompt(`${playerName}, enter Rock, Paper, or Scissors.`);
    if (playerSelection === null) {
      console.log("Game cancelled.");
      return;
    }
    playerSelection = playerSelection.trim().toLowerCase();
    let computerSelection = computerPlay();
    playRound(playerSelection, computerSelection);
    console.log(`Current score: ${playerName} ${playerScore} - ${computerScore} Computer`);
  }

  if (playerScore > computerScore) {
    console.log(`Congratulations ${playerName}! You win! Final score: ${playerScore} - ${computerScore}`);
  } else if (playerScore < computerScore) {
    console.log(`Sorry ${playerName}, you lose! Final score: ${playerScore} - ${computerScore}`);
  } else {
    console.log(`It's a tie! Final score: ${playerScore} - ${computerScore}`);
  }
}

game();
