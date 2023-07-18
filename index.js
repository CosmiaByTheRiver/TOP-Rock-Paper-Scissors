                //FUNCTIONS
//----------------------------------------//


let arrPick;

function getComputerChoice() {

    arr = ["Rock", "Paper", "Scissors"];

    randomized = Math.floor(Math.random() * arr.length);

    arrPick = arr[randomized];
    return arrPick;

}


//----------------------------------------//

let bChoice;

function pressButton() {

    buttons = document.querySelectorAll('button');

    buttons.forEach((button) => {
        button.addEventListener('click', () => {
            bChoice = button.id
            playRound();
        });
    });
};

pressButton();


// -------------------------------------------//


function playRound() {

    oneRound(playerSelection, computerSelection);

    if (scorePlayer == 5 || scoreComputer == 5) {
        if (scorePlayer == 5) {
            gameResult.textContent = "Congratulations! You win. " + "Player: " +
            scorePlayer + " || " + "Computer: " + scoreComputer;
        } else if (scoreComputer == 5) {
            gameResult.textContent = "Sorry, you lose. " + "Computer: " +
            scoreComputer + " || " + "Player: " + scorePlayer;
        }

    } else if (scorePlayer > scoreComputer) {
        gameResult.textContent = "Player: " + scorePlayer + " || " + "Computer: " + scoreComputer;
    } else if (scoreComputer > scorePlayer) {
        gameResult.textContent = "Computer: " + scoreComputer + " || Player: " + scorePlayer;
    } else if (scoreComputer == scorePlayer) {
        gameResult.textContent = "It's a tie! " + "Player: " + scorePlayer + " || Computer: " + scoreComputer;
    }
}


// -------------------------------------------//


let playerSelection;
let computerSelection;

let scorePlayer = 0;
let scoreComputer = 0;


function oneRound(playerSelection, computerSelection) {


    playerSelection = bChoice;
    computerSelection = getComputerChoice();


        if (playerSelection === "rock" &&
        computerSelection === "Paper") {
            scoreComputer += 1;
            return "You lost. Paper beats rock.";
        }

        else if (playerSelection === "rock" &&
        computerSelection === "Scissors") {
            scorePlayer += 1;
            return "You win! Rock beats scissors.";
        }

        else if (playerSelection == "rock" &&
        computerSelection == "Rock") {
            return "Tie.";
        }

        else if (playerSelection === "paper" &&
        computerSelection === "Rock") {
            scorePlayer += 1;
            return "You win! Paper beats rock.";
        }


        else if (playerSelection === "paper" &&
        computerSelection === "Scissors") {
            scoreComputer += 1
            return "You lose. Scissors beats paper.";
        }

        else if (playerSelection == "paper" &&
        computerSelection == "Paper") {
            return "Tie.";
        }

        else if (playerSelection === "scissors" &&
        computerSelection === "Paper") {
            scorePlayer += 1;
            return "You win! Scissors beats paper.";
        }

        else if (playerSelection === "scissors" &&
        computerSelection === "Rock") {
            scoreComputer += 1
            return "You lose. Rock beats scissors.";
        }

        else if (playerSelection == "scissors" &&
        computerSelection == "Scissors") {
            return "Tie.";
        }
    };


    //----------------------------------------//

    const gameResult = document.getElementById('results');
