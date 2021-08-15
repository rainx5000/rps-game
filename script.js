function computerPlay() {
  let randomNum = Math.floor(Math.random() * 3);
  switch (randomNum) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissor";
      break;
  }
}

const computerSelection = computerPlay();
const playerSelection = prompt("rock, paper, scissor, shoot!").toLowerCase();

function playRound(playerSelection, computerSelection) {
  console.log(`computer: ${computerSelection} ||| player: ${playerSelection}`);
  if (playerSelection === "rock" && computerSelection === "rock") {
    return "Tie";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Computer wins!";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return "Player wins";
  };
  if (playerSelection === "paper" && computerSelection === "paper") {
    return "Tie";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return "Computer wins!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Player wins";
  };
  if (playerSelection === "scissor" && computerSelection === "scissor") {
    return "Tie";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return "Computer wins!";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return "Player wins";
  }
}

console.log(playRound(playerSelection, computerSelection));