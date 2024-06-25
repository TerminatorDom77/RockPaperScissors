/*
ask the user how many rounds they want to do (odd number)
have computer randomly choose rock, paper, or scissors
prompt the user to pick rock paper or scissors (probably by having them type it)
if computer chose rock:
    if user chose rock:
        tell the user that both it and the computer chose rock and to do it again
    if user chose paper:
        tell the user they won the round
        start next round / go back to beginning
    if user chose scissors:
        tell user they lost the round
        start next round

if computer chose paper:
    if user chose rock:
        tell user they lost the round
        start next round    
    if user chose paper:
        tell the user that both it and the computer chose paper and to do it again
    if user chose scissors:
        tell user they won the round
        start next round

if computer chose scissors:
    if user chose rock:
        tell user they won the round
        start next round
    if user chose paper:
        tell user they lost the round
        start next round    
    if user chose scissors:
        tell the user that both it and the computer chose scissors and to do it again

Remember to keep track of how many times computer won and user won
Compare computer wins and user wins
Display score and who won
*/

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

function playRound(){
    let computerChoice = getComputerChoice();
    let userChoice = getUserChoice();
    console.log("Rock, Paper, Scissors, Shoot!")
    console.log(`Computer: ${computerChoice}, User: ${userChoice}`)
    let winner = findWinner(computerChoice, userChoice);
    return winner;
}

let rounds = 2;
while (rounds % 2 == 0){
    rounds = parseInt(prompt("How many rounds do you want to play (odd number) ?"));
}

let userScore = 0;
let computerScore = 0;

for (let i = 0; i < rounds; i++){
    winner = playRound();
    if (winner == "Computer"){
        computerScore += 1;
    } else if (winner == "User") {
        userScore += 1;
    }
}
console.log(`Computer score: ${computerScore}, User score: ${userScore}`)