const choices = ["rock", "paper", "scissors"];
function getComputerChoice(choices) {
    let random = Math.floor(Math.random() * choices.length);
    let choice = choices[random];
    return choice;
}

const computerSelection = getComputerChoice(choices);
console.log(computerSelection);

const playerSelection = prompt("Make your move").toLowerCase();

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie! Play again!";
    } else if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return (`You win! ${playerSelection} beats ${computerSelection}`);
    } else {
        return (`Computer wins! ${computerSelection} beats ${playerSelection}`);
    }
}
console.log(playRound(playerSelection, computerSelection));