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
    return "computer";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    console.log("Player wins");
    return "player";
  };
  if (playerSelection === "paper" && computerSelection === "paper") {
    console.log("Tie");
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    console.log("Computer wins!");
    return "computer";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    console.log("Player wins");
    return "player";
  };
  if (playerSelection === "scissor" && computerSelection === "scissor") {
    console.log("Tie");
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    console.log("Computer wins!");
    return "computer";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    console.log("Player wins");
    return "player";
  }
};

function game() {
  let player = 0;
  let computer = 0;

  // for (let i = 1; i <= 5; i++) {
  // const computerSelection = computerPlay();
 
  //   const round = playRound(playerSelection, computerSelection);

  //   switch (round) { //update score
  //     case "computer":
  //       computer++;
  //       break;
  //     case "player":
  //       player++;
  //       break;
  //   }
  // }

  const gameBtnsContainer = document.querySelector(".gameBtnsContainer");
  const gameBtns = gameBtnsContainer.querySelectorAll("button");

  gameBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
      const playerSelection = e.target.value;
      playRound(playerSelection, computerPlay());
    })
  })




  // if (player === computer) { //checks winner after the game is done
  //   console.log("Tie Game");
  // } else if (player > computer) {
  //   console.log("Player wins the game");
  // } else {
  //   console.log("Computer wins the game");
  // }
};

game();

