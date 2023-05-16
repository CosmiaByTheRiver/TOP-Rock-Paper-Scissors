let arrPick;

            function getComputerChoice() {

                arr = ["Rock", "Paper", "Scissors"];

            randomized = Math.floor(Math.random() * arr.length);

            arrPick = arr[randomized];
                return arrPick;

}

getComputerChoice();



function oneRound(playerSelection, computerSelection) {

    playerSelection = playerSelection.toLowerCase(playerSelection);


    if (playerSelection == playerSelection && computerSelection == "Paper") {
        return "You lost."
    }
}

let playerSelection  = "rock";
let computerSelection = getComputerChoice();

console.log(oneRound(playerSelection, computerSelection));
