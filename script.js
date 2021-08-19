const gameBtnsContainer = document.querySelector(".gameBtnsContainer");
const gameBtns = gameBtnsContainer.querySelectorAll("button");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#CPU");
const playerLabel = document.querySelector(".player");
const computerLabel = document.querySelector(".computer")
const player = [playerScore, playerLabel];
const computer = [computerScore, computerLabel];

function computerPlay() { //computers selection
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
};

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "rock") { //checks who won
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    computerScore.textContent++;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    playerScore.textContent++;
  };
  if (playerSelection === "paper" && computerSelection === "paper") {
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    computerScore.textContent++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    playerScore.textContent++;
  };
  if (playerSelection === "scissor" && computerSelection === "scissor") {
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    computerScore.textContent++;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    playerScore.textContent++;
  }
};

function game() {
  gameBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const playerSelection = e.target.value;
      playRound(playerSelection, computerPlay());
      checkWinner();
    })
  })
}

function checkWinner() {
  if (playerScore.textContent == 5) { //checks winner after the game is done
    gameBtns.forEach(btn => btn.setAttribute("disabled", "disabled"))
    gameBtns.forEach(btn => btn.classList.add("disabledBtn"));
    player.forEach(el => el.classList.add("winner"))
    computer.forEach(el => el.classList.add("loser"))
  } else if (computerScore.textContent == 5) {
    gameBtns.forEach(btn => btn.setAttribute("disabled", "disabled"))
    gameBtns.forEach(btn => btn.classList.add("disabledBtn"));
    player.forEach(el => el.classList.add("loser"))
    computer.forEach(el => el.classList.add("winner"))
  } 
  resetGame();
}

function resetGame() {
  const resetBtn = document.querySelector("#resetBtn");
  if (gameBtnsContainer.lastElementChild.getAttribute("disabled")) {
    resetBtn.addEventListener("click", () => {
      gameBtns.forEach(btn => btn.removeAttribute("disabled"))
      gameBtns.forEach(btn => btn.classList.remove("disabledBtn"));
      computerScore.textContent = "0";
      playerScore.textContent = "0";
      player.forEach(el => el.classList.remove("winner"))
      computer.forEach(el => el.classList.remove("loser"))
    })
  }
}
game();

