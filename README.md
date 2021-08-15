Me vs Computer

Create a function for the computer called computerPlay that will randomly return either ROCK - PAPER - SCISSORS

Create a function that plays a single round of RPS
  Function should take 2 parameters - playerSelection and computerSelection
  Return a string that declares the result (win/lose/tie)

playerSelection - should be case-insensitive (rock, ROCK, roCk, etc)


write a NEW function called game(), use the single round function inside of this to play 5 round game, which keeps score and reports winner at the end. 

console.log will be used to keep score and report winner

prompt() to get input from user

---------------------------------------
task 1:

computerPlayer function

number generator between 0-2

0 = rock
1 = paper
2 = scissors

if the random number generator picks 1, it will return paper


-------
task 2:

playRound function 
  should take 2 parameters (playerSelection and computerSelection)
  playerSelection should be assigned to the prompt function, where its case-insensitive
  computerSelection should be assigned to the invoked computerPlay function

  compare the 2 parameters

  if player = rock and computer is rock //TIE
  if player = rock and computer is scissor //player WINS
  if player = rock and computer is paper // computer WINS

  if player = paper and computer is paper //TIE
  if player = paper and computer is rock //player WINS
  if player = paper and computer is scissors //computer WINS

  if player = scissor and computer is scissor //TIE
  if player = scissor and computer is rock // computer WINS
  if player = scissor and computer is paper // player WINS
  


