let values = ["paper", "rock", "scissors"];
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let randomindex = Math.floor(Math.random() * 3);
    return values[randomindex];

}


const container = document.querySelector("#container");
const Result = document.createElement("div");
const choice = document.createElement("h3");
const score = document.createElement("h3")
const winnerDeclaration = document.createElement("h3")
container.appendChild(Result)
Result.appendChild(choice);
Result.appendChild(score);
Result.appendChild(winnerDeclaration);



function playRound1() {

    let humanSelection = "rock";
    let computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
        console.log("tie, both of you think alike!");
    }
    else if (computerSelection === "scissors") {
        console.log("You Wn Ths Round!")
        humanScore++
    }
    else {
        console.log("You Lost This Round")
        computerScore++
    }
    choice.textContent = "Computer Choice Is " + computerSelection;
    score.textContent = "Your Score: " + humanScore + "\nComputer Score: " + computerScore;
}

function playRound2() {

    let humanSelection = "paper";
    let computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
        console.log("tie, both of you think alike!");
    }
    else if (computerSelection === "rock") {
        console.log("You Wn Ths Round!")
        humanScore++
    }
    else {
        console.log("You Lost This Round")
        computerScore++
    }
    choice.textContent = "Computer Choice Is " + computerSelection;
    score.textContent = "Your Score: " + humanScore + "\nComputer Score: " + computerScore;

}

function playRound3() {

    let humanSelection = "scissors";
    let computerSelection = getComputerChoice();

    if (humanSelection === computerSelection) {
        console.log("tie, both of you think alike!");
    }
    else if (computerSelection === "paper") {
        console.log("You Wn Ths Round!")
        humanScore++
    }
    else {
        console.log("You Lost This Round")
        computerScore++
    }

    choice.textContent = "Computer Choice Is " + computerSelection;
    score.textContent = "Your Score: " + humanScore + "Computer Score: " + computerScore;
}








