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
function getUserChoice() {
    let result = prompt("Rock, paper, or scissors?");
    result = result.toLowerCase();
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
    //let userChoice = getUserChoice();
    let playerChoice = userChoice;
    console.log("Rock, Paper, Scissors, Shoot!")
    console.log(`Computer: ${computerChoice}, User: ${playerChoice}`)
    let winner = findWinner(computerChoice, playerChoice);
    return winner;
}

/*let rounds = 2;
while (rounds % 2 == 0){
    rounds = parseInt(prompt("How many rounds do you want to play (odd number) ?"));
}*/

let userScore = 0;
let computerScore = 0;

/*for (let i = 0; i < rounds; i++){
    winner = playRound();
    if (winner == "Computer"){
        computerScore += 1;
    } else if (winner == "User") {
        userScore += 1;
    }
}*/
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
let userChoice = null;
let counter = 0;

for (let btn of buttons){
    counter += 1;
    userChoice = btn.id;
    btn.addEventListener('click', () => {
        game(userChoice);
    });
}