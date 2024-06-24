let values = ["paper", "rock", "scissors"];
let humanScore = 0;
let computerScore = 0;
let gamePlays = 5;

function getComputerChoice() {
    let randomindex = Math.floor(Math.random() * 3);
    return values[randomindex];

}

function getHumanChoice() {
    let choice = prompt("please select between rock, paper or scissors").toLowerCase();
    while(!values.includes(choice)){
        choice =prompt("Invalid choice, Please select an option between rock Paper or Scissors").toLowerCase();
    }
    return choice;
}

function playRound() {

    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();

    console.log("Your choice", humanSelection)
    console.log("Computers choice", computerSelection)

    if (humanSelection === computerSelection) {
        console.log("tie, both of you think alike!");
    }
    else if (
        (humanSelection === "paper" && computerSelection === "rock") ||
        (humanSelection === "scissors" && computerSelection === "paper") ||
        (humanSelection === "rock" && computerSelection === "scissors")
    ) {
        console.log("You Wn Ths Round!")
        humanScore++
    }
    else {
        console.log("You Lost This Round")
        computerScore++
    }

    console.log("Your score", humanScore);
    console.log("Computer Score", computerScore);

    if(humanScore > computerScore){
        console.log(" You win this game ")
    }
    else{
        console.log(" You lost this game ")
    }
}

for(let i =0; i < gamePlays; i++){
playRound();
}






