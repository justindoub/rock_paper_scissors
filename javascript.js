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

//player will choose rock, paper, or scissors
let rock
let paper
let scissors

let playerPlay = prompt("What's your play? Rock, paper, or scissors?").toLowerCase()

//compare computer and human plays and return a result

// I think I'm not using .toLowerCase correctly here.

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection ) {
        return "It's a tie!";
    }
    else if (playerSelection === "rock" && computerSelection === "paper" ) {
        return "You lose! Paper beats rock.";
    }
    else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "You win! Rock beats scissors.";
    }
    else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";
    }

    else if (playerSelection === "paper" && computerSelection === "scissors") {
        return "You lose! Scissors beat paper.";
    }
    else if (playerSelection === "scissors" && computerSelection === "rock") {
        return "You lose! Rock beats scissors.";
    }
    else if (playerSelection === "scissors" && computerSelection === "paper" ) {
        return "You win! Scissors beat paper.";
    }
  }   

//play 5 rounds
for (let i = 0; i < 5; i++) {
    // your code here!
 }

  const playerSelection = playerPlay;
  const computerSelection = computerPlay();
  console.log(playRound(playerSelection, computerSelection));