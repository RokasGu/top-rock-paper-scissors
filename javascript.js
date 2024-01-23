const choices = ["Rock", "Paper", "Scissors"];
function getComputerChoice(choices) {
    let random = Math.floor(Math.random() * choices.length);
    let choice = choices[random];
    return choice;
}

const computerSelection = getComputerChoice(choices);
console.log(computerSelection);