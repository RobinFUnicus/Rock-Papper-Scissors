function getComputerChoice() {
  let choice = "";
  let id = 0;

  id = Math.floor(Math.random() * 3 + 1);

  switch (id) {
    case 1:
      choice = "rock";
      break;
    case 2:
      choice = "paper";
      break;
    case 3:
      choice = "scissors";
      break;
    default:
      console.warn("Id was not  a number between 1 and 3");
      break;
  }

  return choice;
}

function oneRound(playerChoice, commputerChoice){
    let outcome = "";

    playerChoice = playerChoice.toLowerCase();

    if(playerChoice === "rock"){
        if(commputerChoice === "rock"){
            outcome = "Draw!";
        }else if(commputerChoice === "paper"){
            outcome = "Loss!";
        }else if(commputerChoice === "scissors"){
            outcome = "Win!"
        }
    }else if(playerChoice === "paper"){
        if(commputerChoice === "rock"){
            outcome = "Win!";
        }else if(commputerChoice === "paper"){
            outcome = "Draw!";
        }else if(commputerChoice === "scissors"){
            outcome = "Loss!"
        }
    }else if(playerChoice === "scissors"){
        if(commputerChoice === "rock"){
            outcome = "Loss!";
        }else if(commputerChoice === "paper"){
            outcome = "Win!";
        }else if(commputerChoice === "scissors"){
            outcome = "Draw!";
        }
    }
    console.log("You chose " + playerChoice + " and the computer chose " + commputerChoice + "\nThe round resulted in a " + outcome)
    return outcome;
}

function game(){
    let playerScore = 0;
    let commputerScore = 0;

    console.log("Welcome to a 5-round game of Rock-Paper-Scissors! I want to see an honest fight! Lets Begin!")

    for(i=0; i<5; i++){
        let commputerChoice = getComputerChoice();
        let playerChoice = prompt("Rock, Paper or Scissors?");
        let round = oneRound(playerChoice, commputerChoice);
        
        if(round === "Win!"){
            playerScore++;
        }else if(round === "Loss!"){
            commputerScore++;
        }
    }

    console.log("Game Over! Results: " + playerScore + "-" + commputerScore);
}

game();