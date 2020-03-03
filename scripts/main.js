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
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection == computerSelection) {
        return "Tie!";
    }
    else if (playerSelection == "rock" && computerSelection == "paper") {
        return "You lose! Paper covers rock.";
    }
    else if (playerSelection == "rock" && computerSelection == "scissors") {
        return "You win! Rock crushes scissors.";
    }
    else if (playerSelection == "paper" && computerSelection == "rock") {
        return "You win! Paper covers rock.";
    }
    else if (playerSelection == "paper" && computerSelection == "scissors") {
        return "You lose! Scissors cut paper.";
    }
    else if (playerSelection == "scissors" && computerSelection == "rock") {
        return "You lose! Rock crushes scissors.";
    }
    else if (playerSelection == "scissors" && computerSelection == "paper") {
        return "You win! Scissors cut paper.";
    }
}

function game() {
    let i;
    let playerScore = 0;
    let computerScore = 0;
    for (i = 0; i < 5; i++) {
        let result = singleRound(prompt("What will you throw?"), computerPlay());
        console.log(result);
        if (result.includes("win")) {
            playerScore++;
        }
        else if (result.includes("lose")) {
            computerScore++;
        }
    }
    if (playerScore == computerScore) {
        console.log("Tie!");
    }
    else if (playerScore > computerScore) {
        console.log("You win!");
    }
    else {
        console.log("You lose!");
    }
}