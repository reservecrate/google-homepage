const computerPlay = () => {
    const randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) return 'Rock';
    else if (randomNumber === 1) return 'Paper';
    else return 'Scissors';
};

const playRound = (playerSelection, computerSelection) => {
    let playerScore = 0;
    let computerScore = 0;
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        return 'It\'s a tie!';
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerScore++;
        return 'You lose! Paper beats Rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        playerScore++;
        return 'You win! Rock beats Scissors';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        playerScore++;
        return 'You win! Paper beats Rock';
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        return 'It\'s a tie!';
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        computerScore++;
        return 'You lose! Scissors beat Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        computerScore++;
        return 'You lose! Rock beats Scissors';
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++;
        return 'You win! Scissors beat Paper';
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        return 'It\'s a tie!';
    } else {
        return 'Invalid input entered';
    }
};

const playerSelection = window.prompt('Enter Rock, Paper or Scissors: : ');
const computerSelection = computerPlay();

const playGame = () => {
    for (let i = 0; i < 5; i++) {
        console.log(playRound(playerSelection, computerSelection));
    }
};

playGame();