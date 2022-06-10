 //player will choose rock, paper, or scissors
 function playerPlay() {
    let playerSelection = prompt("What's your play? Rock, paper, or scissors?").toLowerCase();
    console.log("You: " + playerSelection);
    return playerSelection;
}

//generate a random computer play
function computerPlay() {
    let number = Math.floor(Math.random() * 3);
     if ( number == 0) {
         return "rock";
     }
     else if ( number == 1) {
        return "paper";
     }
     else return "scissors";
 }

 //compare computer and human play, add score, and return a result 
 function playRound() {
     let playerSelection = playerPlay();  
     let computerSelection = computerPlay();
 
     if (playerSelection == computerSelection ) {
        console.log("Computer: " + computerSelection);
        console.log("It's a tie!");
        console.log("You: " + playerScore + " Computer: " + computerScore);

     }
     else if (playerSelection === "rock" && computerSelection === "paper" ) {
        console.log("Computer: paper"); 
        console.log("You lose the round! Paper beats rock."); 
        computerScore++;
        console.log("You: " + playerScore + " Computer: " + computerScore);
        return computerScore + 1;
     }
     else if (playerSelection === "rock" && computerSelection === "scissors") {
        console.log("Computer: scissors"); 
        console.log("You win the round! Rock beats scissors.");
        playerScore++; 
        console.log("You: " + playerScore + " Computer: " + computerScore);
        return playerScore + 1;
     }
     else if (playerSelection === "paper" && computerSelection === "rock") {
        console.log("Computer: rock"); 
        console.log("You win the round! Paper beats rock.");
        playerScore++; 
        console.log("You: " + playerScore + " Computer: " + computerScore);
        return playerScore + 1;
     }
     else if (playerSelection === "paper" && computerSelection === "scissors") {
        console.log("Computer: scissors"); 
        console.log("You lose the round! Scissors beat paper.");
        computerScore++; 
        console.log("You: " + playerScore + " Computer: " + computerScore);
        return computerScore + 1;
     }
     else if (playerSelection === "scissors" && computerSelection === "rock") {
        console.log("Computer: rock"); 
        console.log("You lose the round! Rock beats scissors.");
        computerScore++; 
        console.log("You: " + playerScore + " Computer: " + computerScore);
        return computerScore + 1;
     }
     else if (playerSelection === "scissors" && computerSelection === "paper" ) {
        console.log("Computer: paper"); 
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
    //play 5 rounds and determine a winner
    for (let i = 0; i < 5; i++) {
        playRound();
        if ( i == 4 && (playerScore > computerScore)) {
           console.log("You win the game!");
         }
         else if ( i == 4 && (computerScore > playerScore )) {
            console.log("You lose the game. Try again.");
         }
         else  if ( i == 4 ) {
            console.log("It's a tie. Try again.");
        }
    }
}

//scores
let playerScore = 0;
let computerScore = 0;

game();