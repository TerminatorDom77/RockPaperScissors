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
    console.log(result);
    return result;
}
function getUserChoice() {
    let result = prompt("Rock, paper, or scissors?");
    result = result.toLowerCase();
    console.log(result);
    return result;
}

let computerChoice = getComputerChoice();
let userChoice = getUserChoice();