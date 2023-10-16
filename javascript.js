let playerScore = 0;
let computerScore =0
let roundWinner = ''

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        roundWinner = 'tie'
    }

    if (
        (playerSelection === 'ROCK' && computerSelection === 'SCISSORS') ||
        (playerSelection === 'SCISSORS' && computerSelection === 'PAPER') ||
        (playerSelection === 'PAPER' && computerSelection === 'ROCK')
      ) {
        playerScore++
        roundWinner = 'player'
      }
      if (
        (computerSelection === 'ROCK' && playerSelection === 'SCISSORS') ||
        (computerSelection === 'SCISSORS' && playerSelection === 'PAPER') ||
        (computerSelection === 'PAPER' && playerSelection === 'ROCK')
      ) {
        computerScore++
        roundWinner = 'computer'
      }
}

function getRandomChoice() {
    let randomNumber = Math.floor(Math.random() * 3)
    switch (randomNumber) {
        case 0:
            return 'ROCK'
        case 1:
            return 'PAPER'
        case 2:
            return 'SCISSORS'
    }
}

const computerSelection = getRandomChoice()
const rockBtn = document.getElementById('ROCK')
const paperBtn = document.getElementById('PAPER')
const scissorsBtn = document.getElementById('SCISSORS')
const scoreInfo = document.getElementById('scoreInfo')
const playerScorePara = document.getElementById('playerScore')
const computerScorePara = document.getElementById('computerScore')

rockBtn.addEventListener('click', () => handleClick('ROCK'))
paperBtn.addEventListener('click', () => handleClick('PAPER'))
scissorsBtn.addEventListener('click', () => handleClick('SCISSORS'))

function handleClick(playerSelection){
  const computerSelection = getRandomChoice()
  playRound(playerSelection,computerSelection)
  updateScore()
}

function updateScore() {
  if (roundWinner === 'tie') {
    scoreInfo.textContent = "It's a tie!"  
  } else if (roundWinner === 'player') {
    scoreInfo.textContent = 'One point for Man!'
  } else if (roundWinner === 'computer') {
    scoreInfo.textContent = 'The Machines Inch Forward..'
  }

  playerScorePara.textContent = `Player: ${playerScore}`
  computerScorePara.textContent = `Machine: ${computerScore}`
}
