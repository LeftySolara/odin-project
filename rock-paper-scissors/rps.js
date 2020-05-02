function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min) + min);
}

function computerPlay() {
    let choices = ["rock", "paper", "scissors"];
    return choices[getRandomNumber(0, 3)];
}

function playRound(playerSelection) {
    let player_choice = playerSelection.toLowerCase();
    let computer_choice = computerPlay().toLowerCase();
    let result_display = document.querySelector("#result");
    let player_won = null;

    if (player_choice == "rock") {
        if (computer_choice == "paper") {
            result_display.textContent = "You lose! Paper beats rock!";
            player_won = false;
        }
        else if (computer_choice == "scissors") {
            result_display.textContent = "You win! Rock beats scissors!";
            player_won = true;
        }
        else {
            result_display.textContent = "It's a tie!";
        }
    }
    else if (player_choice == "paper") {
        if (computer_choice == "rock") {
            result_display.textContent = "You win! Paper beats rock!";
            player_won = true;
        }
        else if (computer_choice == "scissors") {
            result_display.textContent = "You lose! Scissors beats paper!";
            player_won = false;
        }
        else {
            result_display.textContent = "It's a tie!"
        }
    }
    else if (player_choice == "scissors") {
        if (computer_choice == "rock") {
            result_display.textContent = "You lose! Rock beats scissors!";
            player_won = false;
        }
        else if (computer_choice == "paper") {
            result_display.textContent = "You win! Scissors beats paper!";
            player_won = true;
        }
        else {
            result_display = "It's a tie!";
        }
    }
    
    let playerScore = document.querySelector("#player-score");
    let cpuScore = document.querySelector("#cpu-score");

    if (player_won == true) {
        playerScore.textContent++;
    }
    else if (player_won == false) {
        cpuScore.textContent++;
    }

    if (playerScore.textContent == 5) {
        alert("You win!");
        playerScore.textContent = 0;
        cpuScore.textContent = 0;
    }
    else if (cpuScore.textContent == 5) {
        alert("You lose!");
        playerScore.textContent = 0;
        cpuScore.textContent = 0;
    }
}

function setupButtons() {
    let btnRock = document.querySelector("#rock");
    let btnPaper = document.querySelector("#paper");
    let btnScissors = document.querySelector("#scissors");

    btnRock.addEventListener("click", function (e) {
        playRound("rock");
    });

    btnPaper.addEventListener("click", function (e) {
        playRound("paper");
    });

    btnScissors.addEventListener("click", function (e) {
        playRound("scissors");
    });
}

setupButtons();
