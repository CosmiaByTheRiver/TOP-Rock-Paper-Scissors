let arrPick;

function getComputerChoice() {

    arr = ["Rock", "Paper", "Scissors"];

  randomized = Math.floor(Math.random() * arr.length);

    arrPick = arr[randomized];
    return arrPick;

}


//----------------------------------------//


function oneRound(playerSelection, computerSelection) {

let promptQuestion = "Rock, paper, or scissors?";

let playerPrompt = prompt(promptQuestion);

let promptLowerCase = playerPrompt.toLowerCase(promptQuestion);
    playerSelection = playerSelection.toLowerCase(playerSelection);


    if (promptLowerCase == playerSelection && computerSelection == "Paper") {
        return "You lost. Paper beats rock."
    }

    else if (promptLowerCase == playerSelection && computerSelection == "Scissors") {
        return "You win! Rock beats scissors.";
    }

    else if (promptLowerCase == playerSelection && computerSelection == "Rock") {
        return "You win! Paper beats rock.";
    }

    else if (promptLowerCase == playerSelection && computerSelection == "Scissors") {
        return "You lose. Scissors beats paper.";
    }

    else if (promptLowerCase == playerSelection && computerSelection == "Paper") {
        return "You win! Scissors beats paper.";
    }

    else if (promptLowerCase == playerSelection && computerSelection == "Rock") {
        return "You lose. Rock beats scissors.";
    }
}

let playerSelection  = "rock";
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
