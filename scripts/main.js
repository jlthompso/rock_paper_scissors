const roundNumberText = document.querySelector('#roundNumber');
const playerScoreText = document.querySelector('#playerScore');
const computerScoreText = document.querySelector('#computerScore');

let roundNumber;
let playerScore;
let computerScore;

resetGame();

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
        if (button.id === "reset") {
            resetGame();
        }
        else if (playerScore < 5 && computerScore < 5) {
            singleRound(button.id, computerPlay());

            if (playerScore >= 5) {
                alert("Congratulations, you won this round!");
            }
            else if (computerScore >= 5) {
                alert("You lost this round, try again!");
            }
        }
    });
});

function resetGame() {
    roundNumber = 1;
    playerScore = 0;
    computerScore = 0;

    roundNumberText.textContent = roundNumber;
    playerScoreText.textContent = playerScore;
    computerScoreText.textContent = computerScore;
}

function computerPlay() {
    rand = Math.floor(Math.random() * 3);
    switch(rand) {
        case 0:
            return "rock";
        case 1:
            return "paper";
        case 2:
            return "scissors";
    }
}

function singleRound(playerSelection, computerSelection) {
    roundNumberText.textContent = ++roundNumber;

    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        alert("Tie!");
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        alert("You lose! Paper covers rock.");
        computerScoreText.textContent = ++computerScore;
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        alert("You win! Rock crushes scissors.");
        playerScoreText.textContent = ++playerScore;
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        alert("You win! Paper covers rock.");
        playerScoreText.textContent = ++playerScore;
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        alert("You lose! Scissors cut paper.");
        computerScoreText.textContent = ++computerScore;
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        alert("You lose! Rock crushes scissors.");
        computerScoreText.textContent = ++computerScore;
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        alert("You win! Scissors cut paper.");
        playerScoreText.textContent = ++playerScore;
    }
}