// let pSelection = playerInput();
// let cSelection = computerPlay();
// playRound(pSelection, cSelection);

game();

function game() {
    for (let i = 0; i < 5; i++) {
        let pSelection = playerInput();
        let cSelection = computerPlay();
        playRound(pSelection, cSelection);
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a draw! You both choose: " + playerSelection);
    } else {
        switch (playerSelection) {
            case "rock":
                if (computerSelection === "scissors") {
                    console.log("You win! Rock beats Scissors");
                } else {
                    console.log("You lose! Paper beats Rock");
                }
                break;
            case "paper":
                if (computerSelection === "rock") {
                    console.log("You win! Paper beats Rock");
                } else {
                    console.log("You lose! Scissors beats Paper");
                }
                break;
            case "scissors":
                if (computerSelection === "paper") {
                    console.log("You win! Scissors beats Paper");
                } else {
                    console.log("You lose! Rock beats Scissors");
                }
                break;
        }
    }

}

function playerInput() {
    const input = prompt("What is your choice?").toLowerCase();
    return input;
}

function computerPlay() {
    let number = randomNum(1, 3);

    let selection = "";
    switch (number) {
        case 1:
            selection = "rock";
            break;
        case 2:
            selection = "paper";
            break;
        case 3:
            selection = "scissors"
            break;
    }
    return selection;
}

function randomNum(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

