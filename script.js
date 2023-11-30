//  Code runs at the start!
const buttonNodes = document.getElementsByClassName("playButton")
const buttons = Array.from(buttonNodes)
buttons.forEach(button => {
    button.addEventListener('click', () => {
        playRound(button.id);
    })
});

const results = document.getElementById("results");
const scoreboard = document.getElementById("score");
let playerScore = 0;
let computerScore = 0;
let drawCount = 0;


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

function playRound(playerChoice){
    let outcome = "";
    
    commputerChoice = getComputerChoice();
    playerChoice = playerChoice.toLowerCase();

    if(playerChoice === "rock"){
        if(commputerChoice === "rock"){
            outcome = "Draw!";
            drawCount++;
        }else if(commputerChoice === "paper"){
            outcome = "Loss!";
            computerScore++;
        }else if(commputerChoice === "scissors"){
            outcome = "Win!"
            playerScore++;
        }
    }else if(playerChoice === "paper"){
        if(commputerChoice === "rock"){
            outcome = "Win!";
            playerScore++;
        }else if(commputerChoice === "paper"){
            outcome = "Draw!";
            drawCount++;
        }else if(commputerChoice === "scissors"){
            outcome = "Loss!"
            computerScore++;
        }
    }else if(playerChoice === "scissors"){
        if(commputerChoice === "rock"){
            outcome = "Loss!";
            computerScore++;
        }else if(commputerChoice === "paper"){
            outcome = "Win!";
            playerScore++;
        }else if(commputerChoice === "scissors"){
            outcome = "Draw!";
            drawCount++;
        }
    }
    
    const roundResult = document.createElement('p');
    roundResult.textContent = "You chose " + playerChoice + " and the computer chose " + commputerChoice + "\nThe round resulted in a " + outcome;
    results.appendChild(roundResult);

    scoreboard.textContent = 'Score: ' + playerScore + ' - ' + computerScore + '\t draws: ' + drawCount;
    const winAndLossMessage = document.createElement('h4');
    if(playerScore == 5){
        winAndLossMessage.textContent = 'You have WON the best to 5!'
        results.appendChild(winAndLossMessage);
    }else if(computerScore == 5){
        winAndLossMessage.textContent = 'You have LOST the best to 5!'
        results.appendChild(winAndLossMessage);
    }

    return outcome;
}