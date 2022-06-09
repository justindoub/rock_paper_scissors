//generate a random computer play
function computerPlay() {
    let number = Math.floor(Math.random() * 3);
     if ( number == 0) {
         console.log("Computer: rock");
         return "rock";
     }
     else if ( number == 1) {
        console.log("Computer: paper"); 
        return "paper";
     }
     else console.log("Computer: scissors");
        return "scissors";
 }
 
 //player will choose rock, paper, or scissors
function playerPlay() {
    let playerSelection = prompt("What's your play? Rock, paper, or scissors?").toLowerCase();
    console.log("You: " + playerSelection);
    return playerSelection;
}

 //compare computer and human play, add score, and return a result 
 function playRound() {
     let playerSelection = playerPlay();
     let computerSelection = computerPlay();
     //let computerScore = 0;
     //let playerScore = 0;
     if (playerSelection == computerSelection ) {
         console.log("It's a tie!");
         console.log("You: " + playerScore + " Computer: " + computerScore);

     }
     else if (playerSelection === "rock" && computerSelection === "paper" ) {
        console.log("You lose the round! Paper beats rock."); 
        computerScore++;
        console.log("You: " + playerScore + " Computer: " + computerScore);
        return computerScore + 1;
     }
     else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("You win the round! Rock beats scissors.");
        playerScore++; 
        console.log("You: " + playerScore + " Computer: " + computerScore);
        return playerScore + 1;
     }
     else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("You win the round! Paper beats rock.");
        playerScore++; 
        console.log("You: " + playerScore + " Computer: " + computerScore);
        return playerScore + 1;
     }
 
     else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("You lose the round! Scissors beat paper.");
        computerScore++; 
        console.log("You: " + playerScore + " Computer: " + computerScore);
        return computerScore + 1;
     }
     else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("You lose the round! Rock beats scissors.");
        computerScore++; 
        console.log("You: " + playerScore + " Computer: " + computerScore);
        return computerScore + 1;
     }
     else if (playerSelection === "scissors" && computerSelection === "paper" ) {
        console.log("You win the round! Scissors beat paper.");
        playerScore++; 
        console.log("You: " + playerScore + " Computer: " + computerScore);
        return playerScore + 1;
     }
     else console.log("You didn't say rock, paper, or scissors. What kind of scam are you trying to run?");
        return "You didn't say rock, paper, or scissors. What kind of scam are you trying to run?";
   }   
   const playerSelection = playerPlay;
   const computerSelection = computerPlay();
   //console.log(playRound(playerSelection, computerSelection));


function game() {
    //play 5 rounds
    for (let i = 0; i < 5; i++) {
        playRound();
    }
}

//scores
let playerScore = 0;
let computerScore = 0;

game();

//play 5 rounds
 //for (let i = 0; i < 5; i++) {
 //    if (i < 5) {(console.log(playRound())) && computerSelection()};
    
 //}