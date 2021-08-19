// window.addEventListener("click", (e) => {
//   console.log(e.target)
// })

const gameBtnsContainer = document.querySelector(".gameBtnsContainer");
const gameBtns = gameBtnsContainer.querySelectorAll("button");
const playerScore = document.querySelector("#playerScore");
const computerScore = document.querySelector("#CPU");


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
    console.log("Tie");
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    console.log("Computer wins!");
    computerScore.textContent++;
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    console.log("Player wins");
    playerScore.textContent++;
  };
  if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("Tie");
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    console.log("Computer wins!");
    computerScore.textContent++;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Player wins");
    playerScore.textContent++;
  };
  if (playerSelection === "scissor" && computerSelection === "scissor") {
    console.log("Tie");
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    console.log("Computer wins!");
    computerScore.textContent++;
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    console.log("Player wins");
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
  const playerScore = document.querySelector("#playerScore");
  const computerScore = document.querySelector("#CPU");

  if (playerScore.textContent == 5) { //checks winner after the game is done
    gameBtns.forEach(btn => btn.setAttribute("disabled", "disabled"))
  } else if (computerScore.textContent == 5) {
    gameBtns.forEach(btn => btn.setAttribute("disabled", "disabled"))
  } 
  resetGame();
}

function resetGame() {
  const resetBtn = document.querySelector("#resetBtn");
  if (gameBtnsContainer.lastElementChild.getAttribute("disabled")) {
    resetBtn.addEventListener("click", () => {
      console.log('hey')
      gameBtns.forEach(btn => btn.removeAttribute("disabled"))
      computerScore.textContent = "0";
      playerScore.textContent = "0";
    })
  }
  

}
game();

