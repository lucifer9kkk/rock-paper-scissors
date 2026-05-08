function getComputerChoice() {
    let choice = Math.floor(Math.random() * 3);
    if (choice === 0) {
        return "Rock";
    }   else if (choice === 1) {
        return "Paper";
    }   else if (choice === 2) {
        return "Scissor";
    }
}

function getHumanChoice() {
    return prompt("Welcome to the game!! \nPlease type your choice\n'Rock' - 'Paper' - 'Scissor'");
}
