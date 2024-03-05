/*LINKING HTML*/
const rockBtn = document.getElementById('rock');
const paperBtn = document.getElementById('paper');
const scissorBtn = document.getElementById('scissor');
const roundResult = document.getElementById('result');

rockBtn.addEventListener("click", function () {
    playRound("rock");
})
paperBtn.addEventListener("click", function () {
    playRound("paper");
})
scissorBtn.addEventListener("click", function () {
    playRound("scissor");
})

/*RANDOM CHOICE BY COMPUTER*/
function getComputerChoice() {
    const choices = ["rock", "paper", "scissor"];
    const rndChoice = Math.floor(Math.random() * choices.length);
    return result = choices[rndChoice];
}

/*PLAYER CHOICE & CONDITIONS*/
function playRound(playerChoice) {
    const computerChoice = getComputerChoice();
    if (playerChoice === computerChoice) {
        return roundResult.innerHTML = "🧷 It's a Tie ! Both choose : " + playerChoice;
    } else if ((playerChoice === "rock" && computerChoice === "scissor") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissor" && computerChoice === "paper")) {
        return roundResult.innerHTML = "🏆 You Win! " + playerChoice + " beats " + computerChoice;
    } else {
        return roundResult.innerHTML = "👏 You Lose! - play again " + computerChoice + " beats " + playerChoice;
    }
}
