function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[getRandomNumber(0, 3)];
}

function playRound(playerSelection, computerSelection) {
    let player_choice = playerSelection.toLowerCase();
    let computer_choice = computerSelection.toLowerCase();

    if (player_choice == "rock") {
        if (computer_choice == "paper") {
            return "You lose! Paper beats rock!"
        }
        else if (computer_choice == "scissors") {
            return "You win! Rock beats scissors!";
        }
        else {
            return "It's a tie!";
        }
    }
    else if (player_choice == "paper") {
        if (computer_choice == "rock") {
            return "You win! Paper beats rock!";
        }
        else if (computer_choice == "scissors") {
            return "You lose! Scissors beats paper!";
        }
        else {
            return "It's a tie!"
        }
    }
    else if (player_choice == "scissors") {
        if (computer_choice == "rock") {
            return "You lose! Rock beats scissors!";
        }
        else if (computer_choice == "paper") {
            return "You win! Scissors beats paper!";
        }
        else {
            return "It's a tie!";
        }
    }
    else {
        return "Invalid option selected!";
    }
}

function game() {
    for (i = 0; i < 5; ++i) {
        let player_choice = prompt("Rock, paper, or scissors?");
        let computer_choice = computerPlay();
        let result = playRound(player_choice, computer_choice);
        console.log(result);
    }
}

game();
