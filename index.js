let arrPick;

function getComputerChoice() {

    arr = ["Rock", "Paper", "Scissors"];

  randomized = Math.floor(Math.random() * arr.length);

    arrPick = arr[randomized];
    return arrPick;

}


//----------------------------------------//


function oneRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase(playerSelection);

                //rock
    if (playerSelection == playerSelection && computerSelection == "Paper") {
        return "You lost. Paper beats rock."
    }
                //rock
    else if (playerSelection == playerSelection && computerSelection == "Scissors") {
        return "You win! Rock beats scissors.";
    }
              //paper
    else if (playerSelection == playerSelection && computerSelection == "Rock") {
        return "You win! Paper beats rock.";
    }
            //paper
    else if (playerSelection == playerSelection && computerSelection == "Scissors") {
        return "You lose. Scissors beats paper.";
    }
                //scissors
    else if (playerSelection == playerSelection && computerSelection == "Paper") {
        return "You win! Scissors beats paper.";
    }
              //scissors
    else if (playerSelection == playerSelection && computerSelection == "Rock") {
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
