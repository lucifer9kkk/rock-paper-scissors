function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "rock";
    }   else if (choice === 1) {
        return "paper";
    }   else if (choice === 2) {
        return "scissor";
    }
}

function getHumanChoice() {
    return prompt("Welcome to the game!! \nPlease type your choice\n'Rock' - 'Paper' - 'Scissor'");
}

let humanScore = 0
let computerScore = 0

function playRound(humanChoice , computerChoice) {

    if (humanChoice === computerChoice) {
        return "Tie, Play again!";
    } else if (
        humanChoice === "rock" && computerChoice === "scissor" ||
        humanChoice === "paper" && computerChoice === "rock" ||
        humanChoice === "scissor" && computerChoice === "paper"
    )   {
        return "You Win!!"; 
    }   else {
        return "Computer Win!! You Lose mate."
    }
}   

function scoreUpdate() {
    if (result === "You Win!!") {
        humanScore++;
    }   else if (result === "Computer Win!! You Lose mate.") {
        computerScore++
    }
}

const humanSelection = getHumanChoice().trim().toLowerCase();
const computerSelection = getComputerChoice();
const result = playRound(humanSelection , computerSelection);
const score = scoreUpdate(result);

alert(result)
alert(`Your Score: ${humanScore}, Computer Score: ${computerScore}`)