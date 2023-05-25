let arrPick;

function getComputerChoice() {

    arr = ["Rock", "Paper", "Scissors"];

  randomized = Math.floor(Math.random() * arr.length);

    arrPick = arr[randomized];
    return arrPick;

}


//----------------------------------------//

let promptQuestion;

let playerPrompt;

let playerSelection;

function oneRound(playerSelection, computerSelection) {

promptQuestion = "Rock, paper, or scissors?";

playerPrompt = prompt(promptQuestion);

playerSelection = playerPrompt.toLowerCase();


    if (playerSelection === "rock" && computerSelection === "Paper") {
        return "You lost. Paper beats rock.";
    }

    else if (playerSelection === "rock" && computerSelection === "Scissors") {
        return "You win! Rock beats scissors.";
    }

    else if (playerSelection === "paper" && computerSelection === "Rock") {
        return "You win! Paper beats rock.";
    }

    else if (playerSelection == "rock" && computerSelection == "Rock") {
        return "Tie.";
    }

    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        return "You lose. Scissors beats paper.";
    }

    else if (playerSelection == "paper" && computerSelection == "Paper") {
        return "Tie.";
    }

    else if (playerSelection === "scissors" && computerSelection === "Paper") {
        return "You win! Scissors beats paper.";
    }

    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        return "You lose. Rock beats scissors.";
    }

    else if (playerSelection == "scissors" && computerSelection == "Scissors") {
        return "Tie.";
    }
}

let computerSelection = getComputerChoice();


// -------------------------------------------//


function game() {

    console.log(oneRound(playerSelection, getComputerChoice()));
    console.log(oneRound(playerSelection, getComputerChoice()));
    console.log(oneRound(playerSelection, getComputerChoice()));
    console.log(oneRound(playerSelection, getComputerChoice()));
    console.log(oneRound(playerSelection, getComputerChoice()));
}

game();
