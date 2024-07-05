function getComputerChoice() {
    let result = null;
    randomNum = Math.ceil(Math.random() * 3);
    if (randomNum == 1){
        result = "rock";
    } else if (randomNum == 2) {
        result = "paper";
    } else if (randomNum == 3) {
        result = "scissors";
    }
    return result;
}

function findWinner(computerChoice, userChoice){
    if (computerChoice == userChoice){
        console.log(`\n We both guessed ${computerChoice}!`);
        results.textContent = `\n We both guessed ${computerChoice}!`;
        return "Tie"

    } else if (computerChoice == "rock") {
        if (userChoice == "paper") {
            console.log("\n You beat me!");
            results.textContent = "You beat me!";
            return "User";
        } else if (userChoice == "scissors") {
            console.log("\n You lose!");
            results.textContent = "You lose!";
            return "Computer";
        }
    } else if (computerChoice == "paper"){
        if (userChoice == "rock"){
            console.log("\n You lose!");
            results.textContent = "You lose!";
            return "Computer";
        } else if (userChoice == "scissors") {
            console.log("\n You beat me!");
            results.textContent = "You beat me!";
            return "User";
        }
    } else if (computerChoice == "scissors") {
        if (userChoice = "rock"){
            console.log("\n You beat me!");
            results.textContent = "You beat me!";
            return "User";
        }else {
            console.log("\n You lose!");
            results.textContent = "You lose!";
            return "Computer";
        }
    }
}

function playRound(userChoice){
    let computerChoice = getComputerChoice();
    let playerChoice = userChoice.toLowerCase();
    let winner = "";
    beginningText.textContent = "Rock, ";
    setTimeout(() => {
        beginningText.textContent += "Paper, ";
    }, 400);
    setTimeout(() => {
        beginningText.textContent += "Scissors, ";
    }, 800);
    setTimeout(() => {
        beginningText.textContent += "Shoot!";
    }, 1200);
    setTimeout(() => {
        choices.textContent = `Computer: ${computerChoice}, User: ${playerChoice}`;
        console.log("Rock, Paper, Scissors, Shoot!")
        console.log(`Computer: ${computerChoice}, User: ${playerChoice}`)
        winner = findWinner(computerChoice, playerChoice);
    }, 1600);
    setTimeout(() => {
        if (winner == "Computer"){
            computerScore += 1;
        } else if (winner == "User") {
            userScore += 1;
        }
        console.log(computerScore);
        console.log(userScore)
        results.textContent += `\nComputer Score: ${computerScore}, User Score: ${userScore}`;
        console.log(`Computer score: ${computerScore}, User score: ${userScore}`);
    }, 2000);
}

let userScore = 0;
let computerScore = 0;

function game(userChoice){
    beginningText.textContent = "";
    choices.textContent = "";
    results.textContent = "";
    if (userScore < 5 && computerScore < 5){
        playRound(userChoice);
    }
    if (userScore == 5){
        results.textContent = "You won!"
    }else if (userScore == 5){
        results.textContent = "The computer won!"
    }

}
const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scissorsBtn = document.getElementById("Scissors");
const buttons = [rockBtn, paperBtn, scissorsBtn];
const gameText = document.getElementById("gameText");
const beginningText = document.getElementById("beginningText");
const choices = document.getElementById("choices");
choices.style.marginTop = "10px";
const results = document.getElementById("results");
results.style.marginTop = "10px";

gameText.appendChild(beginningText);
gameText.appendChild(choices);
gameText.appendChild(results);
beginningText.style.marginTop = "30px";

for (let btn of buttons){
    btn.addEventListener('click', () => {
        game(btn.id);
    });
}