let arrPick;

function getComputerChoice() {

    arr = ["Rock", "Paper", "Scissors"];

  randomized = Math.floor(Math.random() * arr.length);

    arrPick = arr[randomized];
    return arrPick;

}


//----------------------------------------//


let playerSelection;
let scorePlayer = 0;
let scoreComputer = 0;

function oneRound(playerSelection, computerSelection) {

promptQuestion = "Rock, paper, or scissors?";

playerPrompt = prompt(promptQuestion);

playerSelection = playerPrompt.toLowerCase();


    if (playerSelection === "rock" && computerSelection === "Paper") {
        scoreComputer += 1;
        return "You lost. Paper beats rock.";
    }

    else if (playerSelection === "rock" && computerSelection === "Scissors") {
        scorePlayer += 1;
        return "You win! Rock beats scissors.";
    }

    else if (playerSelection == "rock" && computerSelection == "Rock") {
        return "Tie.";
    }

    else if (playerSelection === "paper" && computerSelection === "Rock") {
        scorePlayer += 1;
        return "You win! Paper beats rock.";
    }


    else if (playerSelection === "paper" && computerSelection === "Scissors") {
        scoreComputer += 1
        return "You lose. Scissors beats paper.";
    }

    else if (playerSelection == "paper" && computerSelection == "Paper") {
        return "Tie.";
    }

    else if (playerSelection === "scissors" && computerSelection === "Paper") {
        scorePlayer += 1;
        return "You win! Scissors beats paper.";
    }

    else if (playerSelection === "scissors" && computerSelection === "Rock") {
        scoreComputer += 1
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

    if (scorePlayer > scoreComputer) {
        console.log("You won the game! Player: " + scorePlayer + " || " + "Computer: " + scoreComputer);
    } else if (scoreComputer > scorePlayer) {
        console.log("You lost the game. Computer: " + scoreComputer + " || Player: " + scorePlayer)
    } else {
        console.log("It's a tie!");
    }
}

game();
