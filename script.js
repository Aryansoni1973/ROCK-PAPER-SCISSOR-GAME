// Container & Play again & winner template
const container = document.querySelector('#container');
const playAgain = document.querySelector('#play-again');
const winner = document.querySelector('#winner');

// Scores
const computerScore = document.querySelector('#computer-score');
const playerScore = document.querySelector('#player-score');

// Buttons
const rockBtn = document.querySelector('#rock');
const paperBtn = document.querySelector('#paper');
const scissorBtn = document.querySelector('#scissor');
const playAgainBtn = document.querySelector('#play-again-btn');

// Choices
const playerChoice = document.querySelector('#player-choice');
const computerChoice = document.querySelector('#computer-choice');

// Result
const finalResult = document.querySelector('#result');

// Player Selection
let playerSelection;
let playedRound = 0;
let totalRound = 5;

// random Computer Choice Function 
const getComputerChoice = () => {
    const choice = ['ROCK', 'PAPER', 'SCISSOR'];
    const rndChoice = Math.floor(Math.random() * choice.length);
    return choice[rndChoice];
}

// Play Round Function !
const playRound = () => {
    const computerSelection = getComputerChoice();
    computerChoice.textContent = computerSelection;
    if (playerSelection === computerSelection) {
        finalResult.textContent = `It's a Tie`;
    } else if ((playerSelection === "ROCK" && computerSelection === "SCISSOR") ||
        (playerSelection === "PAPER" && computerSelection === "ROCK") ||
        (playerSelection === "SCISSOR" && computerSelection === "PAPER")) {
        finalResult.textContent = 'YOU WIN';
        playerScore.textContent = parseInt(playerScore.textContent) + 1;
    } else {
        finalResult.textContent = 'YOU LOSE';
        computerScore.textContent = parseInt(computerScore.textContent) + 1;
    }
    playedRound++;
    if (playedRound === totalRound) {
        container.style.display = 'none';
        playAgain.removeAttribute('style');
        playedRound = 0;
        if (playerScore.textContent > computerScore.textContent) {
            winner.textContent = `🎉 You Win with ${playerScore.textContent} points...🎉`
        } else if (computerScore.textContent > playerScore.textContent) {
            winner.textContent = `🥹 Computer Wins 👻`
        } else {
            winner.textContent = `🤝 It's a Tie 🧣`
        }
        playerScore.textContent = 0;
        computerScore.textContent = 0;
        finalResult.textContent = 'Play 5 Rounds';
        computerChoice.textContent = '';
        playerChoice.textContent = '';
    }
}

// Event Listeners
rockBtn.addEventListener('click', () => {
    playerSelection = 'ROCK';
    playerChoice.textContent = 'ROCK';
    playRound();
});
paperBtn.addEventListener('click', () => {
    playerSelection = 'PAPER';
    playerChoice.textContent = 'PAPER';
    playRound();
});
scissorBtn.addEventListener('click', () => {
    playerSelection = 'SCISSOR';
    playerChoice.textContent = 'SCISSOR';
    playRound();
});
playAgainBtn.addEventListener('click', () => {
    playAgain.style.display = 'none';
    container.style.display = 'grid';
})
