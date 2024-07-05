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
        return "Tie"

    } else if (computerChoice == "rock") {
        if (userChoice == "paper") {
            console.log("\n You beat me!");
            return "User";
        } else if (userChoice == "scissors") {
            console.log("\n You lose!");
            return "Computer";
        }
    } else if (computerChoice == "paper"){
        if (userChoice == "rock"){
            console.log("\n You lose!");
            return "Computer";
        } else if (userChoice == "scissors") {
            console.log("\n You beat me!");
            return "User";
        }
    } else if (computerChoice == "scissors") {
        if (userChoice = "rock"){
            console.log("\n You beat me!");
            return "User";
        }else {
            console.log("\n You lose!");
            return "Computer";
        }
    }
}

function playRound(userChoice){
    let computerChoice = getComputerChoice();
    let playerChoice = userChoice.toLowerCase();
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
        let winner = findWinner(computerChoice, playerChoice);
        return winner;
    }, 1600);
}

let userScore = 0;
let computerScore = 0;

function game(userChoice){
    let winner = playRound(userChoice);
    if (winner == "Computer"){
        computerScore += 1;
    } else if (winner == "User") {
        userScore += 1;
    }
    console.log(`Computer score: ${computerScore}, User score: ${userScore}`);
}
const rockBtn = document.getElementById("Rock");
const paperBtn = document.getElementById("Paper");
const scissorsBtn = document.getElementById("Scissors");
const buttons = [rockBtn, paperBtn, scissorsBtn];
const resultsDiv = document.getElementById("results");
const beginningText = document.getElementById("beginningText");
const choices = document.getElementById("choices");
choices.style.marginTop = "10px";
resultsDiv.appendChild(beginningText);
resultsDiv.appendChild(choices);
beginningText.style.marginTop = "30px";

for (let btn of buttons){
    btn.addEventListener('click', () => {
        game(btn.id);
    });
}